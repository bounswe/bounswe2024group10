package com.bounswe2024group10.Tradeverse.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.like.*;
import com.bounswe2024group10.Tradeverse.model.Dislike;
import com.bounswe2024group10.Tradeverse.model.Like;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Service
public class LikeService {
    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private DislikeRepository dislikeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    public LikePostResponse likePost(LikePostRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (user == null) {
            return new LikePostResponse(false, "User does not exist");
        }
        if (likeRepository.findByUsernameAndPostID(user.getUsername(), request.getPostId()) != null) {
            return new LikePostResponse(false, "You have already liked this post");
        }
        if (post == null) {
            return new LikePostResponse(false, "Post does not exist");
        }  
        Like like = new Like(request.getUsername(), request.getPostId());
        likeRepository.save(like);
        Dislike dislike = dislikeRepository.findByUsernameAndPostID(user.getUsername(), request.getPostId());
        if (dislike != null) {
            dislikeRepository.delete(dislike);
        }
        postRepository.save(post);
        return new LikePostResponse(true, "Post liked successfully");
    }

    public UnlikePostResponse unlikePost(UnlikePostRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return new UnlikePostResponse(false, "User does not exist");
        }
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new UnlikePostResponse(false, "Post does not exist");
        } 
        Like like = likeRepository.findByUsernameAndPostID(user.getUsername(), request.getPostId());
        if (like != null) {
            likeRepository.delete(like);
            return new UnlikePostResponse(true, "Post unliked successfully");
        } else {
            return new UnlikePostResponse(false, "You have not liked this post");
        }
    }

    public GetLikedPostsResponse getLikedPosts(GetLikedPostsRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return new GetLikedPostsResponse(false, "User does not exist", null);
        }

        List<Like> likes = likeRepository.findByUsername(user.getUsername());
        List<Long> likedPostIds = likes.stream()
                .map(Like::getPostID)
                .collect(Collectors.toList());
        List<Post> likedPosts = postRepository.findAllById(likedPostIds);

        return new GetLikedPostsResponse(true, "Liked posts retrieved successfully", likedPosts);
    }

    public GetLikersResponse getLikersOfPost(GetLikersRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetLikersResponse(false, "Post does not exist", null);
        }

        List<Like> likes = likeRepository.findByPostID(post.getId());
        List<String> likerUsernames = likes.stream()
                .map(Like::getUsername)
                .collect(Collectors.toList());

        return new GetLikersResponse(true, "Likers retrieved successfully", likerUsernames);
    }
}