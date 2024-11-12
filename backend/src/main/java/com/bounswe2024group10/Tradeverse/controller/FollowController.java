package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.follow.*;
import com.bounswe2024group10.Tradeverse.service.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/follow")
public class FollowController {
    @Autowired
    private FollowService followService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/follow-user")
    public ResponseEntity<FollowUserResponse> followUser(@RequestBody FollowUserRequest request) {
        FollowUserResponse response = followService.followUser(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/unfollow-user")
    public ResponseEntity<UnfollowUserResponse> unfollowUser(@RequestBody UnfollowUserRequest request) {
        UnfollowUserResponse response = followService.unfollowUser(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-followings")
    public ResponseEntity<GetFollowingsResponse> getFollowings(@RequestBody GetFollowingsRequest request) {
        GetFollowingsResponse response = followService.getFollowings(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-followers")
    public ResponseEntity<GetFollowersResponse> getFollowers(@RequestBody GetFollowersRequest request) {
        GetFollowersResponse response = followService.getFollowers(request);
        return ResponseEntity.ok(response);
    }
}
