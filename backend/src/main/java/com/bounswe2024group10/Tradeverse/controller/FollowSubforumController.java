package com.bounswe2024group10.Tradeverse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.followSubforum.GeneralFollowSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GeneralFollowSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GetFollowingsNonRecursiveResponse;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GetFollowingsRequest;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GetFollowingsResponse;
import com.bounswe2024group10.Tradeverse.service.FollowSubforumService;

@RestController
@RequestMapping("/api/follow-subforum")
public class FollowSubforumController {

    @Autowired
    private FollowSubforumService followSubforumService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/follow-subforum")
    public ResponseEntity<GeneralFollowSubforumResponse> followUser(@RequestParam Long followedSubforumID, @RequestParam String followerUsername) {
        GeneralFollowSubforumRequest request = new GeneralFollowSubforumRequest();
        request.setFollowedSubforumID(followedSubforumID);
        request.setFollowerUsername(followerUsername);
        GeneralFollowSubforumResponse response = followSubforumService.followSubforum(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/unfollow-subforum")
    public ResponseEntity<GeneralFollowSubforumResponse> unfollowUser(@RequestParam Long followedSubforumID, @RequestParam String followerUsername) {
        GeneralFollowSubforumRequest request = new GeneralFollowSubforumRequest();
        request.setFollowedSubforumID(followedSubforumID);
        request.setFollowerUsername(followerUsername);
        GeneralFollowSubforumResponse response = followSubforumService.unfollowSubforum(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-followings")
    public ResponseEntity<GetFollowingsResponse> getFollowings(@RequestParam String username) {
        GetFollowingsRequest request = new GetFollowingsRequest();
        request.setUsername(username);
        GetFollowingsResponse response = followSubforumService.getFollowings(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-followings/non-recursive")
    public ResponseEntity<GetFollowingsNonRecursiveResponse> getFollowingsNonRecursive(@RequestParam String username) {
        GetFollowingsRequest request = new GetFollowingsRequest();
        request.setUsername(username);
        GetFollowingsNonRecursiveResponse response = followSubforumService.getFollowingsNonRecursive(request);
        return ResponseEntity.ok(response);
    }
}
