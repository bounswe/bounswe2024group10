package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.comment.GetCommentResponse;
import com.bounswe2024group10.Tradeverse.service.CommentService;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;
import com.bounswe2024group10.Tradeverse.dto.comment.CreateCommentRequest;
import com.bounswe2024group10.Tradeverse.dto.comment.CreateCommentResponse;
import com.bounswe2024group10.Tradeverse.dto.comment.DeleteCommentRequest;
import com.bounswe2024group10.Tradeverse.dto.comment.DeleteCommentResponse;
import org.springframework.http.HttpStatus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CommentService commentService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/create")
    public ResponseEntity<CreateCommentResponse> createComment(@RequestBody CreateCommentRequest request, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        CreateCommentResponse response = commentService.createComment(request, username);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-comments")
    public ResponseEntity<List<GetCommentResponse>> getComments(@RequestParam Long postId) {
        List<GetCommentResponse> comments = commentService.getCommentsByPostId(postId);
        return ResponseEntity.ok(comments);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/delete")
    public ResponseEntity<DeleteCommentResponse> deleteComment(@RequestBody DeleteCommentRequest request, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        DeleteCommentResponse response = commentService.deleteComment(request, username);
        if (response.getMessage().equals("Comment not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
        return ResponseEntity.ok(response);
    }
} 