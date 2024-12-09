package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.post.CreatePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreatePostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.DeletePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.DeletePostResponse;
import com.bounswe2024group10.Tradeverse.model.Content;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.Subforum;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.SubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Base64;
import java.util.UUID;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SubforumRepository subforumRepository;

    @Autowired
    private PostRepository postRepository;

    public CreatePostResponse createPost(CreatePostRequest request) {
        if (request.getUsername() == null || request.getTitle() == null || request.getContent() == null || request.getSubforumID() == null) {
            return new CreatePostResponse(false, "Invalid request", null);
        }

        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return new CreatePostResponse(false, "User not found", null);
        }

        Optional<Subforum> subforum = subforumRepository.findById(request.getSubforumID());
        if (subforum.isEmpty()) {
            return new CreatePostResponse(false, "Subforum not found", null);
        }

        List<Content> content = new ArrayList<>();
        for (Content contentItem : request.getContent()) {
            if (contentItem.getType().equals("image")) {
                try {
                    String imageEncoded = contentItem.getValue();
                    byte[] imageDecoded = Base64.getDecoder().decode(imageEncoded);
                    String imageFileName = UUID.randomUUID().toString() + ".jpg";
                    String imageFilePath = "images/" + imageFileName;
                    File imageFile = new File(imageFilePath);
                    FileOutputStream imageFileOutputStream = new FileOutputStream(imageFile);
                    imageFileOutputStream.write(imageDecoded);
                    imageFileOutputStream.close();
                    contentItem.setValue(imageFileName);
                    content.add(contentItem);
                } catch (IOException e) {
                    e.printStackTrace();
                    return new CreatePostResponse(false, "Failed to save image", null);
                }
            } else {
                content.add(contentItem);
            }
        }

        Post post = new Post(
            request.getTitle(),
            content,
            request.getUsername(),
            request.getSubforumID(),
            LocalDateTime.now(),
            null,
            null
        );
        postRepository.save(post);
        return new CreatePostResponse(true, "Post created successfully", post.getId());
    }

    public DeletePostResponse deletePost(DeletePostRequest request) {
        Optional<Post> post = postRepository.findById(request.getPostId());
        if (post.isEmpty()) {
            return new DeletePostResponse(false, "Post not found");
        }

        for (Content contentItem : post.get().getContent()) {
            if (contentItem.getType().equals("image")) {
                File imageFile = new File("images/" + contentItem.getValue());
                if (imageFile.exists()) {
                    imageFile.delete();
                }
            }
        }

        postRepository.deleteById(request.getPostId());
        return new DeletePostResponse(true, "Post deleted successfully");
    }
}
