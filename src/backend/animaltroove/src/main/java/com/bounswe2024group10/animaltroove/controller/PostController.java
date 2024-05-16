package com.bounswe2024group10.animaltroove.controller;

import com.bounswe2024group10.animaltroove.service.PostService;
import com.bounswe2024group10.animaltroove.dto.CreatePostRequest;
import com.bounswe2024group10.animaltroove.dto.CreatePostResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/posts")
public class PostController {   

    @Autowired
    private PostService postService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/create")
    public ResponseEntity<CreatePostResponse> createPost(@RequestBody CreatePostRequest request) {
        CreatePostResponse response = postService.createPost(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}