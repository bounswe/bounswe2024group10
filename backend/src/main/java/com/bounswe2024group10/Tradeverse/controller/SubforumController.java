package com.bounswe2024group10.Tradeverse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.subforum.AllSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.CreateSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.subforum.CreateSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.DeleteSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.subforum.DeleteSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.FollowSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.subforum.FollowSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.GetFollowedSubforumsResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.GetSubforumResponse;
import com.bounswe2024group10.Tradeverse.service.SubforumService;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;

@RestController
@RequestMapping("/api/subforum")
public class SubforumController {

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private SubforumService subforumService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/all")
    public ResponseEntity<List<AllSubforumResponse>> getAllSubforums() {
        return ResponseEntity.ok(subforumService.getAllSubforums());
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/create")
    public ResponseEntity<CreateSubforumResponse> createSubforum(@RequestBody CreateSubforumRequest request, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        return ResponseEntity.ok(subforumService.createSubforum(request, username));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/delete")
    public ResponseEntity<DeleteSubforumResponse> deleteSubforum(@RequestBody DeleteSubforumRequest request, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        return ResponseEntity.ok(subforumService.deleteSubforum(request, username));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/follow")
    public ResponseEntity<FollowSubforumResponse> followSubforum(@RequestBody FollowSubforumRequest request, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        return ResponseEntity.ok(subforumService.followSubforum(request, username));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/unfollow")
    public ResponseEntity<FollowSubforumResponse> unfollowSubforum(@RequestBody FollowSubforumRequest request, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        return ResponseEntity.ok(subforumService.unfollowSubforum(request, username));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/followed")
    public ResponseEntity<List<GetFollowedSubforumsResponse>> getFollowedSubforums(@RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        return ResponseEntity.ok(subforumService.getFollowedSubforums(username));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ResponseEntity<GetSubforumResponse> getSubforum(@RequestHeader("Authorization") String token, @PathVariable Long id) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        return ResponseEntity.ok(subforumService.getSubforum(username, id));
    }
}
