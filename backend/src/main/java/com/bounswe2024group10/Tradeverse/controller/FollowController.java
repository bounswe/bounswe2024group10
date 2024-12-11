package com.bounswe2024group10.Tradeverse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.follow.FollowUserRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.FollowUserResponse;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowersRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowersResponse;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowingsRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowingsResponse;
import com.bounswe2024group10.Tradeverse.dto.follow.UnfollowUserRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.UnfollowUserResponse;
import com.bounswe2024group10.Tradeverse.service.FollowService;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;

@RestController
@RequestMapping("/api/follow")
public class FollowController {

    @Autowired
    private FollowService followService;
    @Autowired
    private JwtUtil jwtUtil;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/follow-user")
    public ResponseEntity<FollowUserResponse> followUser(@RequestParam String followedUsername, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        FollowUserRequest request = new FollowUserRequest();
        request.setFollowedUsername(followedUsername);
        request.setFollowerUsername(username);
        FollowUserResponse response = followService.followUser(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/unfollow-user")
    public ResponseEntity<UnfollowUserResponse> unfollowUser(@RequestParam String unfollowedUsername, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        UnfollowUserRequest request = new UnfollowUserRequest();
        request.setFollowedUsername(unfollowedUsername);
        request.setFollowerUsername(username);
        UnfollowUserResponse response = followService.unfollowUser(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-followings")
    public ResponseEntity<GetFollowingsResponse> getFollowings(@RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        GetFollowingsRequest request = new GetFollowingsRequest();
        request.setUsername(username);
        GetFollowingsResponse response = followService.getFollowings(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-followers")
    public ResponseEntity<GetFollowersResponse> getFollowers(@RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        GetFollowersRequest request = new GetFollowersRequest();
        request.setUsername(username);
        GetFollowersResponse response = followService.getFollowers(request);
        return ResponseEntity.ok(response);
    }
}
