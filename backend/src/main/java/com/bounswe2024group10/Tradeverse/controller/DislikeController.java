package com.bounswe2024group10.Tradeverse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.dislike.DislikePostRequest;
import com.bounswe2024group10.Tradeverse.dto.dislike.DislikePostResponse;
import com.bounswe2024group10.Tradeverse.dto.dislike.UndislikePostRequest;
import com.bounswe2024group10.Tradeverse.dto.dislike.UndislikePostResponse;
import com.bounswe2024group10.Tradeverse.service.DislikeService;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;

@RestController
@RequestMapping("/api/dislike")
public class DislikeController {

    @Autowired
    private DislikeService dislikeService;
    @Autowired
    private JwtUtil jwtUtil;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/dislike-post")
    public ResponseEntity<DislikePostResponse> dislikePost(@RequestParam Long postId, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        DislikePostRequest request = new DislikePostRequest();
        request.setPostId(postId);
        request.setUsername(username);
        DislikePostResponse response = dislikeService.dislikePost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/undislike-post")
    public ResponseEntity<UndislikePostResponse> undislikePost(@RequestParam Long postId, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        UndislikePostRequest request = new UndislikePostRequest();
        request.setPostId(postId);
        request.setUsername(username);
        UndislikePostResponse response = dislikeService.undislikePost(request);
        return ResponseEntity.ok(response);
    }

}
