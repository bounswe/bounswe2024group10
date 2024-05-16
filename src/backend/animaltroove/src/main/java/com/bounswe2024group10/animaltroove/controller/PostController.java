package com.bounswe2024group10.animaltroove.controller;

import com.bounswe2024group10.animaltroove.service.PostService;
import com.bounswe2024group10.animaltroove.dto.CreatePostRequest;
import com.bounswe2024group10.animaltroove.dto.CreatePostResponse;
import com.bounswe2024group10.animaltroove.dto.GetPostsRequest;
import com.bounswe2024group10.animaltroove.dto.GetPostsResponse;

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

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/getByUser")
    public ResponseEntity<GetPostsResponse> getPosts(@RequestBody GetPostsRequest request) {
        GetPostsResponse response = postService.getPostsByUser(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/getFeed")
    public ResponseEntity<GetPostsResponse> getPosts() {
        GetPostsResponse response = postService.getPosts();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}