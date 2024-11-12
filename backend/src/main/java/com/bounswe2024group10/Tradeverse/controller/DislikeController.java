package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.dislike.*;
import com.bounswe2024group10.Tradeverse.service.DislikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dislike")
public class DislikeController {
    @Autowired
    private DislikeService dislikeService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/dislike-post")
    public ResponseEntity<DislikePostResponse> dislikePost(@RequestBody DislikePostRequest request) {
        DislikePostResponse response = dislikeService.dislikePost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/undislike-post")
    public ResponseEntity<UndislikePostResponse> undislikePost(@RequestBody UndislikePostRequest request) {
        UndislikePostResponse response = dislikeService.undislikePost(request);
        return ResponseEntity.ok(response);
    }

} 