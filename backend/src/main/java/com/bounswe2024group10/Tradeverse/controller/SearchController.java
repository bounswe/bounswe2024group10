package com.bounswe2024group10.Tradeverse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.post.PostResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.AllSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.user.GetUserResponse;
import com.bounswe2024group10.Tradeverse.model.Asset;
import com.bounswe2024group10.Tradeverse.service.SearchService;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;

@RestController
@RequestMapping("/api/search")
public class SearchController {

    @Autowired
    private SearchService searchService;

    @Autowired
    private JwtUtil jwtUtil;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/subforum")
    public ResponseEntity<List<AllSubforumResponse>> searchSubforums(@RequestParam String keyword) {
        return ResponseEntity.ok(searchService.searchSubforums(keyword));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/tag")
    public ResponseEntity<List<String>> searchTags(@RequestParam String keyword) {
        return ResponseEntity.ok(searchService.searchTags(keyword));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/user")
    public ResponseEntity<List<GetUserResponse>> searchUsers(@RequestParam String keyword) {
        return ResponseEntity.ok(searchService.searchUsers(keyword));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/post")
    public ResponseEntity<List<PostResponse>> searchPosts(@RequestParam String keyword) {
        return ResponseEntity.ok(searchService.searchPosts(keyword));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/asset")
    public ResponseEntity<List<Asset>> searchAssets(@RequestParam String keyword) {
        return ResponseEntity.ok(searchService.searchAssets(keyword));
    }

}
