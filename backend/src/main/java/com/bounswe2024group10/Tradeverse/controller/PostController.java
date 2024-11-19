package com.bounswe2024group10.Tradeverse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.post.GetCommentsRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GetCommentsResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GetCommentsWLikesResponse;
import com.bounswe2024group10.Tradeverse.service.PostService;


@RestController
@RequestMapping("/api/post")
public class PostController {
    @Autowired
    private PostService postService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-forums")
    public ResponseEntity<GetCommentsResponse> getForums() {
        GetCommentsResponse response = postService.getForums();
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-subforums")
    public ResponseEntity<GetCommentsResponse> getSubForums(@RequestBody GetCommentsRequest request) {
        GetCommentsResponse response = postService.getSubForums(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-subforum-posts")
    public ResponseEntity<GetCommentsResponse> getSubForumPosts(@RequestBody GetCommentsRequest request) {
        GetCommentsResponse response = postService.getSubForumPosts(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-comments")
    public ResponseEntity<GetCommentsWLikesResponse> getComments(@RequestBody GetCommentsRequest request) {
        GetCommentsWLikesResponse response = postService.getCommentsWLikes(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-post")
    public ResponseEntity<GetPostResponse> getPost(@RequestBody GetPostRequest request) {
        GetPostResponse response = postService.getPost(request);
        return ResponseEntity.ok(response);
    }
}
