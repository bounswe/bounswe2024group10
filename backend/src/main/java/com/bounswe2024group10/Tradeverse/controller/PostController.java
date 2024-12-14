package com.bounswe2024group10.Tradeverse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.post.CreatePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreatePostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.DeletePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.DeletePostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GetPostResponse;
import com.bounswe2024group10.Tradeverse.service.PostService;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;

@RestController
@RequestMapping(value = "/api/post")
public class PostController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PostService postService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/create")
    public ResponseEntity<CreatePostResponse> createPost(@RequestBody CreatePostRequest request, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        CreatePostResponse response = postService.createPost(request, username);
        if (response == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/delete")
    public ResponseEntity<DeletePostResponse> deletePost(@RequestBody DeletePostRequest request, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        DeletePostResponse response = postService.deletePost(request, username);
        if (response.getMessage().equals("Post not found")) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-posts-by-subforum")
    public ResponseEntity<List<GetPostResponse>> getPostsBySubforum(
            @RequestParam Long subforumId,
            @RequestHeader("Authorization") String token
    ) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        List<GetPostResponse> posts = postService.getPostsBySubforum(subforumId, username);
        return ResponseEntity.ok(posts);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/for-you")
    public ResponseEntity<List<GetPostResponse>> getForYouPosts(@RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        List<GetPostResponse> posts = postService.getForYouPosts(username);
        return ResponseEntity.ok(posts);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/recent")
    public ResponseEntity<List<GetPostResponse>> getRecentPosts(@RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        List<GetPostResponse> posts = postService.getRecentPosts(username);
        return ResponseEntity.ok(posts);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/popular")
    public ResponseEntity<List<GetPostResponse>> getPopularPosts(@RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        List<GetPostResponse> posts = postService.getPopularPosts(username);
        return ResponseEntity.ok(posts);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/followed-topics")
    public ResponseEntity<List<GetPostResponse>> getFollowedTopicsPosts(@RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        List<GetPostResponse> posts = postService.getFollowedTopicsPosts(username);
        return ResponseEntity.ok(posts);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/followed-people")
    public ResponseEntity<List<GetPostResponse>> getFollowedPeoplePosts(@RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        List<GetPostResponse> posts = postService.getFollowedPeoplePosts(username);
        return ResponseEntity.ok(posts);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ResponseEntity<GetPostResponse> getPostById(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        GetPostResponse response = postService.getPost(id, username);
        if (response == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-posts-by-user")
    public ResponseEntity<List<GetPostResponse>> getPostsByUser(
            @RequestParam String username,
            @RequestHeader("Authorization") String token
    ) {
        String auth_username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            auth_username = jwtUtil.extractUsername(token);
        }
        List<GetPostResponse> posts = postService.getPostsByUsername(username, auth_username);
        return ResponseEntity.ok(posts);
    }
}
