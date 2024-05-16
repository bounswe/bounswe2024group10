package com.bounswe2024group10.animaltroove.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bounswe2024group10.animaltroove.dto.FollowRequest;
import com.bounswe2024group10.animaltroove.dto.FollowResponse;
import com.bounswe2024group10.animaltroove.dto.UnfollowRequest;
import com.bounswe2024group10.animaltroove.dto.UnfollowResponse;
import com.bounswe2024group10.animaltroove.service.FollowService;
import com.bounswe2024group10.animaltroove.service.UnfollowService;

@RestController
@RequestMapping("/api/users")
public class FollowingController {

    @Autowired
    private FollowService followService;

    @Autowired
    private UnfollowService unfollowService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/follow")
    public ResponseEntity<FollowResponse> followUser(@RequestBody FollowRequest request) {
        FollowResponse response = followService.followUser(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/unfollow")
    public ResponseEntity<UnfollowResponse> unfollowUser(@RequestBody UnfollowRequest request) {
        UnfollowResponse response = unfollowService.unfollowUser(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
