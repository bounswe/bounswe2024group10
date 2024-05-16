package com.bounswe2024group10.animaltroove.controller;

import com.bounswe2024group10.animaltroove.model.Comment;
import com.bounswe2024group10.animaltroove.dto.CommentRequest;
import com.bounswe2024group10.animaltroove.dto.CommentResponse;
import com.bounswe2024group10.animaltroove.dto.DeleteCommentRequest;
import com.bounswe2024group10.animaltroove.dto.DeleteCommentResponse;
import com.bounswe2024group10.animaltroove.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comment")
public class CommentController {   

    @Autowired
    private CommentService commentService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/post")
    public ResponseEntity<CommentResponse> comment(@RequestBody CommentRequest request) {
        CommentResponse response = commentService.postComment(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/delete")
    public ResponseEntity<DeleteCommentResponse> deleteComment(@RequestBody DeleteCommentRequest request) {
        DeleteCommentResponse response = commentService.deleteComment(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}