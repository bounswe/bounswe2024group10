package com.bounswe2024group10.Tradeverse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.like.GetLikedPostsRequest;
import com.bounswe2024group10.Tradeverse.dto.like.GetLikedPostsResponse;
import com.bounswe2024group10.Tradeverse.dto.like.LikePostRequest;
import com.bounswe2024group10.Tradeverse.dto.like.LikePostResponse;
import com.bounswe2024group10.Tradeverse.dto.like.UnlikePostRequest;
import com.bounswe2024group10.Tradeverse.dto.like.UnlikePostResponse;
import com.bounswe2024group10.Tradeverse.service.LikeService;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;

@RestController
@RequestMapping("/api/like")
public class LikeController {

    @Autowired
    private LikeService likeService;
    @Autowired
    private JwtUtil jwtUtil;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/like-post")
    public ResponseEntity<LikePostResponse> likePost(@RequestParam Long postId, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        LikePostRequest request = new LikePostRequest();
        request.setPostId(postId);
        request.setUsername(username);
        LikePostResponse response = likeService.likePost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/unlike-post")
    public ResponseEntity<UnlikePostResponse> unlikePost(@RequestParam Long postId, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        UnlikePostRequest request = new UnlikePostRequest();
        request.setPostId(postId);
        request.setUsername(username);
        UnlikePostResponse response = likeService.unlikePost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-liked-posts")
    public ResponseEntity<GetLikedPostsResponse> getLikedPosts(@RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        GetLikedPostsRequest request = new GetLikedPostsRequest();
        request.setUsername(username);
        GetLikedPostsResponse response = likeService.getLikedPosts(request);
        return ResponseEntity.ok(response);
    }
}
