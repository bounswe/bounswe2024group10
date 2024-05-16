package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.CommentRequest;
import com.bounswe2024group10.animaltroove.dto.CommentResponse;
import com.bounswe2024group10.animaltroove.model.Comment;
import com.bounswe2024group10.animaltroove.repository.CommentRepository;
import com.bounswe2024group10.animaltroove.repository.PostRepository;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private RegisteredUserRepository registeredUserRepository;

    public CommentResponse postComment(CommentRequest request) {
        if (registeredUserRepository.findByUserName(request.getUsername()) == null) {
            return new CommentResponse(false, "User not found");
        }
        if (postRepository.findByPostID(request.getPostID()) == null) {
            return new CommentResponse(false, "Post not found");
        }
        try {
            commentRepository.save(new Comment(request.getUsername(), request.getPostID(), request.getDescription()));
            return new CommentResponse(true, "Comment added");
        } catch (IllegalArgumentException e) {
            return new CommentResponse(false, "Invalid post data.");
        }
    }
}
