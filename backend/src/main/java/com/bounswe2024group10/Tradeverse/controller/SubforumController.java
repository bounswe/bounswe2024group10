package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.subforum.*;
import com.bounswe2024group10.Tradeverse.model.Subforum;
import com.bounswe2024group10.Tradeverse.service.SubforumService;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subforum")
public class SubforumController {
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private SubforumService subforumService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/all")
    public ResponseEntity<List<Subforum>> getAllSubforums() {
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
} 