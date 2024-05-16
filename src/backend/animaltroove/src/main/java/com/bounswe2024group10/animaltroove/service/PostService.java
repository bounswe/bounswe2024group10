package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.CreatePostRequest;
import com.bounswe2024group10.animaltroove.dto.CreatePostResponse;
import com.bounswe2024group10.animaltroove.dto.GetPostsRequest;
import com.bounswe2024group10.animaltroove.dto.GetPostsResponse;
import com.bounswe2024group10.animaltroove.model.Post;
import com.bounswe2024group10.animaltroove.repository.PostRepository;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private RegisteredUserRepository registeredUserRepository;
    
    public CreatePostResponse createPost(CreatePostRequest request) {
        if (request.getMedia() == null || request.getMedia().length == 0) {
            return new CreatePostResponse(false, "Media is required");
        }
        Date postDate = new Date(System.currentTimeMillis());
        Post newPost = new Post(request.getUsername(), request.getAnimalName(), request.getMedia(), request.getCaption(), request.getPhotoDate(), postDate, request.getLocation());
        try {
            postRepository.save(newPost);
        } catch (IllegalArgumentException e) {
            return new CreatePostResponse(false, "Invalid post data");
        }
        return new CreatePostResponse(true, "Post created successfully");
    }

    public GetPostsResponse getPosts() {
        List<Post> posts = postRepository.findTop10ByOrderByPostIDDesc();
        return new GetPostsResponse(true, "Posts retrieved successfully", posts);
    }

    public GetPostsResponse getPostsByUser(GetPostsRequest request) {
        if (request.getUsername() == null || request.getUsername().isEmpty()) {
            return new GetPostsResponse(false, "Username is required", null);
        }
        if (registeredUserRepository.findByUserName(request.getUsername()) == null) {
            return new GetPostsResponse(false, "User not found", null);
        }
        List<Post> posts = postRepository.findByUsername(request.getUsername());
        return new GetPostsResponse(true, "Posts retrieved successfully", posts);
    }

    public GetPostsResponse getPostsByAnimalName(GetPostsRequest request) {
        if (request.getAnimalName() == null || request.getAnimalName().isEmpty()) {
            return new GetPostsResponse(false, "Animal name is required", null);
        }
        try {
            List<Post> posts = postRepository.findByAnimalNameContaining(request.getAnimalName());
            return new GetPostsResponse(true, "Posts retrieved successfully", posts);
        } catch (IllegalArgumentException e) {
            return new GetPostsResponse(false, "Invalid animal name", null);
        }
    }
}
