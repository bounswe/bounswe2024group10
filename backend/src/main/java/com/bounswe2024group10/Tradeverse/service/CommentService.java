package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.comment.*;
import com.bounswe2024group10.Tradeverse.model.Comment;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.CommentRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    public List<GetCommentResponse> getCommentsByPostId(Long postId) {
        List<Comment> allComments = commentRepository.findByPostID(postId);
        
        Map<Long, List<Comment>> commentsByParent = allComments.stream()
            .collect(Collectors.groupingBy(
                comment -> comment.getCommentID() != null ? comment.getCommentID() : -1L
            ));

        List<Comment> topLevelComments = commentsByParent.getOrDefault(-1L, new ArrayList<>());

        return topLevelComments.stream()
            .map(comment -> convertToResponseWithReplies(comment, commentsByParent))
            .collect(Collectors.toList());
    }

    private GetCommentResponse convertToResponseWithReplies(Comment comment, Map<Long, List<Comment>> commentsByParent) {
        List<GetCommentResponse> replies = commentsByParent.getOrDefault(comment.getId(), new ArrayList<>())
            .stream()
            .map(reply -> convertToResponseWithReplies(reply, commentsByParent))
            .collect(Collectors.toList());

        return new GetCommentResponse(
            comment.getId(),
            comment.getContent(),
            comment.getCreatedBy(),
            comment.getPostID(),
            comment.getCommentID(),
            comment.getCreationDate(),
            replies
        );
    }

    public CreateCommentResponse createComment(CreateCommentRequest request, String username) {
        if (username == null) {
            return new CreateCommentResponse(false, "User not authenticated", null);
        }
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new CreateCommentResponse(false, "User not found", null);
        }
        Optional<Post> post = postRepository.findById(request.getPostID());
        if (post.isEmpty()) {
            return new CreateCommentResponse(false, "Post not found", null);
        }
        Comment comment = new Comment(
            username,
            request.getPostID(),
            request.getParentCommentID(),
            request.getContent(),
            LocalDateTime.now(),
            null
        );
        Comment savedComment = commentRepository.save(comment);
        return new CreateCommentResponse(true, "Comment created successfully", savedComment.getId());
    }

    public DeleteCommentResponse deleteComment(DeleteCommentRequest request, String username) {
        if (username == null) {
            return new DeleteCommentResponse(false, "User not authenticated");
        }
        Optional<Comment> comment = commentRepository.findById(request.getCommentId());
        if (comment.isEmpty()) {
            return new DeleteCommentResponse(false, "Comment not found");
        }
        if (!comment.get().getCreatedBy().equals(username)) {
            return new DeleteCommentResponse(false, "User does not have permission to delete this comment");
        }
        List<Comment> replies = commentRepository.findByParentCommentID(request.getCommentId());
        for (Comment reply : replies) {
            commentRepository.deleteById(reply.getId());
        }
        commentRepository.deleteById(request.getCommentId());
        return new DeleteCommentResponse(true, "Comment deleted successfully");
    }
} 