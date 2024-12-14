package com.bounswe2024group10.Tradeverse.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.post.CreatePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreatePostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.DeletePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.DeletePostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GetPostResponse;
import com.bounswe2024group10.Tradeverse.model.Comment;
import com.bounswe2024group10.Tradeverse.model.Content;
import com.bounswe2024group10.Tradeverse.model.Follow;
import com.bounswe2024group10.Tradeverse.model.FollowSubforum;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.Subforum;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.CommentRepository;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowSubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.SubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Service
public class PostService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SubforumRepository subforumRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private DislikeRepository dislikeRepository;

    @Autowired
    private FollowRepository followRepository;

    @Autowired
    private FollowSubforumRepository followSubforumRepository;

    public CreatePostResponse createPost(CreatePostRequest request, String username) {
        if (username == null) {
            return new CreatePostResponse(false, "User not authenticated", null);
        }

        if (request.getTitle() == null || request.getContent() == null || request.getSubforumID() == null) {
            return new CreatePostResponse(false, "Invalid request", null);
        }

        User user = userRepository.findByUsername(username);
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
                    String imageFilePath = "/images/" + imageFileName;
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
                username,
                request.getSubforumID(),
                0,
                LocalDateTime.now(),
                null
        );
        postRepository.save(post);
        return new CreatePostResponse(true, "Post created successfully", post.getId());
    }

    public DeletePostResponse deletePost(DeletePostRequest request, String username) {
        Optional<Post> post = postRepository.findById(request.getPostId());
        if (post.isEmpty()) {
            return new DeletePostResponse(false, "Post not found");
        }

        if (!post.get().getCreatedBy().equals(username) && !userRepository.findByUsername(username).getIsAdmin()) {
            return new DeletePostResponse(false, "User does not have permission to delete this post");
        }

        for (Content contentItem : post.get().getContent()) {
            if (contentItem.getType().equals("image")) {
                File imageFile = new File("/images/" + contentItem.getValue());
                if (imageFile.exists()) {
                    imageFile.delete();
                }
            }
        }

        postRepository.deleteById(request.getPostId());
        return new DeletePostResponse(true, "Post deleted successfully");
    }

    protected GetPostResponse convertToGetPostResponse(Post post, String username) {
        post.setViewCount(post.getViewCount() + 1);
        int likeCount = likeRepository.countByPostID(post.getId());
        int dislikeCount = dislikeRepository.countByPostID(post.getId());
        int commentCount = commentRepository.countByPostID(post.getId());
        boolean isLikedByUser = username != null && likeRepository.existsByUsernameAndPostID(username, post.getId());
        boolean isDislikedByUser = username != null && dislikeRepository.existsByUsernameAndPostID(username, post.getId());
        User creatorUser = userRepository.findByUsername(post.getCreatedBy());
        String userPhoto = creatorUser.getProfilePhoto();
        String creatorUserName = creatorUser.getName();
        Subforum subforum = subforumRepository.findById(post.getSubforumID()).orElse(null);
        return new GetPostResponse(
                post.getId(),
                post.getTitle(),
                post.getContent(),
                post.getCreatedBy(),
                post.getCreationDate(),
                likeCount,
                dislikeCount,
                commentCount,
                isLikedByUser,
                isDislikedByUser,
                userPhoto,
                creatorUserName,
                subforum
        );
    }

    public List<GetPostResponse> getPostsBySubforum(Long subforumID, String username) {
        List<Post> posts = postRepository.findAllBySubforumIDOrderByCreationDateDesc(subforumID);
        List<GetPostResponse> response = new ArrayList<>();
        for (Post post : posts) {
            response.add(convertToGetPostResponse(post, username));
        }
        return response;
    }

    public List<GetPostResponse> getPostsByTag(String tag, String username) {
        List<Post> posts = postRepository.findByTag(tag);
        List<GetPostResponse> response = new ArrayList<>();
        for (Post post : posts) {
            response.add(convertToGetPostResponse(post, username));
        }
        return response;
    }

    public List<GetPostResponse> getForYouPosts(String username) {
        List<Post> posts = postRepository.findTop100ByOrderByCreationDateDesc();
        List<GetPostResponse> response = new ArrayList<>();
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new ArrayList<>();
        }
        int userTag = user.getTag();
        Map<Long, Integer> postScoreMap = new HashMap<>();
        for (Post post : posts) {
            int score = 0;
            User creator = userRepository.findByUsername(post.getCreatedBy());
            int creatorTag = creator.getTag();
            if (creatorTag == userTag) {
                score += 3;
            }
            List<Comment> comments = commentRepository.findByPostID(post.getId());
            for (Comment comment : comments) {
                User commentCreator = userRepository.findByUsername(comment.getCreatedBy());
                int commentCreatorTag = commentCreator.getTag();
                if (commentCreatorTag == userTag) {
                    score += 2;
                } else {
                    score += 1;
                }
            }
            score += likeRepository.countByPostID(post.getId());
            score -= dislikeRepository.countByPostID(post.getId());
            postScoreMap.put(post.getId(), score);
        }
        List<Post> sortedPosts = posts.stream()
                .sorted((p1, p2) -> postScoreMap.get(p2.getId()) - postScoreMap.get(p1.getId()))
                .collect(Collectors.toList());

        for (Post post : sortedPosts) {
            response.add(convertToGetPostResponse(post, username));
        }
        return response;
    }

    public List<GetPostResponse> getRecentPosts(String username) {
        List<Post> posts = postRepository.findTop100ByOrderByCreationDateDesc();
        List<GetPostResponse> response = new ArrayList<>();
        Map<Long, Integer> postScoreMap = new HashMap<>();
        for (Post post : posts) {
            int score = 0;
            score += likeRepository.countByPostID(post.getId());
            score += dislikeRepository.countByPostID(post.getId());
            score += 2 * commentRepository.countByPostID(post.getId());
            postScoreMap.put(post.getId(), score);
        }
        List<Post> sortedPosts = posts.stream()
                .sorted((p1, p2) -> postScoreMap.get(p2.getId()) - postScoreMap.get(p1.getId()))
                .collect(Collectors.toList());
        for (Post post : sortedPosts) {
            response.add(convertToGetPostResponse(post, username));
        }
        return response;
    }

    public List<GetPostResponse> getPopularPosts(String username) {
        List<Post> posts = postRepository.findTop100ByOrderByCreationDateDesc();
        List<GetPostResponse> response = new ArrayList<>();
        for (Post post : posts) {
            response.add(convertToGetPostResponse(post, username));
        }
        return response;
    }

    public List<GetPostResponse> getFollowedTopicsPosts(String username) {
        List<GetPostResponse> response = new ArrayList<>();
        List<FollowSubforum> followedSubforums = followSubforumRepository.findByFollowerUsername(username);
        for (FollowSubforum followedSubforum : followedSubforums) {
            List<Post> posts = postRepository.findAllBySubforumIDOrderByCreationDateDesc(followedSubforum.getSubforumID());
            for (Post post : posts) {
                response.add(convertToGetPostResponse(post, username));
            }
        }
        response.sort((p1, p2) -> p2.getCreationDate().compareTo(p1.getCreationDate()));
        return response;
    }

    public List<GetPostResponse> getFollowedPeoplePosts(String username) {
        List<Follow> follows = followRepository.findByFollowerUsername(username);
        List<GetPostResponse> response = new ArrayList<>();
        for (Follow follow : follows) {
            List<Post> posts = postRepository.findByCreatedBy(follow.getFollowedUsername());
            for (Post post : posts) {
                response.add(convertToGetPostResponse(post, username));
            }
        }
        return response;
    }

    public GetPostResponse getPost(Long postId, String username) {
        Post post = postRepository.findById(postId).orElse(null);
        if (post == null) {
            return null;
        }
        return convertToGetPostResponse(post, username);
    }
}
