package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.post.CreatePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreatePostResponse;

import org.springframework.stereotype.Service;

@Service
public class PostService {
    public CreatePostResponse createPost(CreatePostRequest request) {
        return new CreatePostResponse();
    }
}