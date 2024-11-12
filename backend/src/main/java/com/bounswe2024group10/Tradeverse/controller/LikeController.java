package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.like.*;
import com.bounswe2024group10.Tradeverse.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/like")
public class LikeController {
    @Autowired
    private LikeService likeService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/like-post")
    public ResponseEntity<LikePostResponse> likePost(@RequestBody LikePostRequest request) {
        LikePostResponse response = likeService.likePost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/unlike-post")
    public ResponseEntity<UnlikePostResponse> unlikePost(@RequestBody UnlikePostRequest request) {
        UnlikePostResponse response = likeService.unlikePost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-liked-posts")
    public ResponseEntity<GetLikedPostsResponse> getLikedPosts(@RequestBody GetLikedPostsRequest request) {
        GetLikedPostsResponse response = likeService.getLikedPosts(request);
        return ResponseEntity.ok(response);
    }
}
