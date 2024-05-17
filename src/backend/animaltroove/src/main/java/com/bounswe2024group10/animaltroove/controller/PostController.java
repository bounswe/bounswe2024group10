package com.bounswe2024group10.animaltroove.controller;

import com.bounswe2024group10.animaltroove.service.PostService;
import com.bounswe2024group10.animaltroove.dto.CreatePostRequest;
import com.bounswe2024group10.animaltroove.dto.CreatePostResponse;
import com.bounswe2024group10.animaltroove.dto.GetPostsRequest;
import com.bounswe2024group10.animaltroove.dto.GetPostsResponse;
import com.bounswe2024group10.animaltroove.dto.GetUserPostInteractionsRequest;
import com.bounswe2024group10.animaltroove.dto.GetUserPostInteractionsResponse;
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
    @PostMapping("/getByUser")
    public ResponseEntity<GetPostsResponse> getPostsByUser(@RequestBody GetPostsRequest request) {
        GetPostsResponse response = postService.getPostsByUser(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/getByAnimalName")
    public ResponseEntity<GetPostsResponse> getPostsByAnimalName(@RequestBody GetPostsRequest request) {
        GetPostsResponse response = postService.getPostsByAnimalName(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/getFeed")
    public ResponseEntity<GetPostsResponse> getPosts() {
        GetPostsResponse response = postService.getPosts();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/getUserPostInteractions")
    public ResponseEntity<GetUserPostInteractionsResponse> getUserPostInteractions(@RequestBody GetUserPostInteractionsRequest request) {
        GetUserPostInteractionsResponse response = postService.getUserPostInteractions(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}