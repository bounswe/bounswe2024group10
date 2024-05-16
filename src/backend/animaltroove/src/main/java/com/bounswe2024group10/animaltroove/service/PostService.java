package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.CreatePostRequest;
import com.bounswe2024group10.animaltroove.dto.CreatePostResponse;
import com.bounswe2024group10.animaltroove.model.Post;
import com.bounswe2024group10.animaltroove.repository.PostRepository;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    
    @Autowired
    private PostRepository postRepository;
    
    public CreatePostResponse createPost(CreatePostRequest request) {
        if (request.getMedia() == null || request.getMedia().length == 0) {
            return new CreatePostResponse(false, "Media is required");
        }
        Date postDate = new Date(System.currentTimeMillis());
        Post newPost = new Post(request.getMedia(), request.getCaption(), request.getPhotoDate(), postDate, request.getLocation());
        try {
            postRepository.save(newPost);
        } catch (IllegalArgumentException e) {
            return new CreatePostResponse(false, "Invalid post data");
        }
        return new CreatePostResponse(true, "Post created successfully");
    }
}
