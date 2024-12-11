package com.bounswe2024group10.Tradeverse.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.post.PostResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.AllSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.user.GetUserResponse;
import com.bounswe2024group10.Tradeverse.model.Asset;
import com.bounswe2024group10.Tradeverse.model.Content;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.Subforum;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.AssetRepository;
import com.bounswe2024group10.Tradeverse.repository.CommentRepository;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.SubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Service
public class SearchService {

    @Autowired
    private SubforumRepository subforumRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AssetRepository assetRepository;

    @Autowired
    private SubforumService subforumService;

    @Autowired
    private PostService postService;

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private DislikeRepository dislikeRepository;

    @Autowired
    private CommentRepository commentRepository;

    public List<AllSubforumResponse> searchSubforums(String keyword) {
        List<Subforum> subforums = subforumRepository.findByNameContainingOrDescriptionContaining(keyword, keyword);
        List<AllSubforumResponse> response = new ArrayList<>();
        for (Subforum subforum : subforums) {
            response.add(subforumService.convertToAllSubforumResponse(subforum));
        }
        return response;
    }

    public List<String> searchTags(String keyword) {
        List<String> tags = new ArrayList<>();
        List<Content> contents = postRepository.findTagsByValueContaining(keyword);
        for (Content content : contents) {
            tags.add(content.getValue());
        }
        return tags;
    }

    public List<GetUserResponse> searchUsers(String keyword) {
        List<User> users = userRepository.findByUsernameContainingOrNameContainingOrBioContaining(keyword, keyword, keyword);
        List<GetUserResponse> response = new ArrayList<>();
        for (User user : users) {
            response.add(new GetUserResponse(user.getUsername(), user.getName(), user.getProfilePhoto()));
        }
        return response;
    }

    public List<Asset> searchAssets(String keyword) {
        return assetRepository.findByKeyword(keyword);
    }

    public List<PostResponse> searchPosts(String keyword) {
        List<Post> posts = postRepository.findByTextContaining(keyword);
        List<PostResponse> response = new ArrayList<>();
        for (Post post : posts) {
            response.add(convertToPostResponse(post));
        }
        return response;
    }

    private PostResponse convertToPostResponse(Post post) {
        post.setViewCount(post.getViewCount() + 1);
        int likeCount = likeRepository.countByPostID(post.getId());
        int dislikeCount = dislikeRepository.countByPostID(post.getId());
        int commentCount = commentRepository.countByPostID(post.getId());
        User creatorUser = userRepository.findByUsername(post.getCreatedBy());
        String userPhoto = creatorUser.getProfilePhoto();
        String creatorUserName = creatorUser.getName();
        Subforum subforum = subforumRepository.findById(post.getSubforumID()).orElse(null);
        return new PostResponse(
                post.getId(),
                post.getTitle(),
                post.getContent(),
                post.getCreatedBy(),
                post.getCreationDate(),
                likeCount,
                dislikeCount,
                commentCount,
                userPhoto,
                creatorUserName,
                subforum
        );
    }
}
