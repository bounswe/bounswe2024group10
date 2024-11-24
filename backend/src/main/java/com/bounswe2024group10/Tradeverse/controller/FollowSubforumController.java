package com.bounswe2024group10.Tradeverse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.followSubforum.GeneralFollowSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GeneralFollowSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GetFollowingsRequest;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GetFollowingsResponse;
import com.bounswe2024group10.Tradeverse.service.FollowSubforumService;

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
}
