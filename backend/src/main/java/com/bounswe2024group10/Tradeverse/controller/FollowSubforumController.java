package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.followSubforum.*;
import com.bounswe2024group10.Tradeverse.service.FollowSubforumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/follow-subforum")
public class FollowSubforumController {
    @Autowired
    private FollowSubforumService followSubforumService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/follow-subforum")
    public ResponseEntity<GeneralFollowSubforumResponse> followUser(@RequestBody GeneralFollowSubforumRequest request) {
        GeneralFollowSubforumResponse response = followSubforumService.followSubforum(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/unfollow-user")
    public ResponseEntity<GeneralFollowSubforumResponse> unfollowUser(@RequestBody GeneralFollowSubforumRequest request) {
        GeneralFollowSubforumResponse response = followSubforumService.unfollowSubforum(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-followings")
    public ResponseEntity<GetFollowingsResponse> getFollowings(@RequestBody GetFollowingsRequest request) {
        GetFollowingsResponse response = followSubforumService.getFollowings(request);
        return ResponseEntity.ok(response);
    }

    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @GetMapping("/get-followers")
    // public ResponseEntity<GetFollowersResponse> getFollowers(@RequestBody GetFollowersRequest request) {
    //     GetFollowersResponse response = followSubforumService.getFollowers(request);
    //     return ResponseEntity.ok(response);
    // }
}
