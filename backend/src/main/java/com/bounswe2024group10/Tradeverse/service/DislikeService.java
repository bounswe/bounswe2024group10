package com.bounswe2024group10.Tradeverse.service;



import com.bounswe2024group10.Tradeverse.dto.dislike.*;
import com.bounswe2024group10.Tradeverse.model.Like;
import com.bounswe2024group10.Tradeverse.model.Dislike;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


public class DislikeService {
    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private DislikeRepository dislikeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    public DislikePostResponse dislikePost(DislikePostRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        Post post = postRepository.findById(request.getPostId()).orElse(null);

        if (user == null || post == null) {
            return new DislikePostResponse(false, "User or Post does not exist");
        }

        Dislike dislike = new Dislike(user.getUsername(), post.getId());
        dislikeRepository.save(dislike);

        Like like = likeRepository.findByUsernameAndPostId(user.getUsername(), post.getId());
        if (like != null) {
            likeRepository.delete(like);
        }

        return new DislikePostResponse(true, "Post liked successfully");
    }

    public UndislikePostResponse undislikePost(UndislikePostRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        Post post = postRepository.findById(request.getPostId()).orElse(null);

        if (user == null || post == null) {
            return new UndislikePostResponse(false, "User or Post does not exist");
        }

        Dislike dislike = dislikeRepository.findByUsernameAndPostId(user.getUsername(), post.getId());
        if (dislike != null) {
            dislikeRepository.delete(dislike);
            return new UndislikePostResponse(true, "Post unliked successfully");
        } else {
            return new UndislikePostResponse(false, "You have not liked this post");
        }
    }
}
