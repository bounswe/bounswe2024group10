package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.CreatePostRequest;
import com.bounswe2024group10.animaltroove.dto.CreatePostResponse;
import com.bounswe2024group10.animaltroove.dto.GetPostsRequest;
import com.bounswe2024group10.animaltroove.dto.GetPostsResponse;
import com.bounswe2024group10.animaltroove.dto.GetUserPostInteractionsRequest;
import com.bounswe2024group10.animaltroove.dto.GetUserPostInteractionsResponse;
import com.bounswe2024group10.animaltroove.model.Post;
import com.bounswe2024group10.animaltroove.repository.PostRepository;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import com.bounswe2024group10.animaltroove.repository.BookmarkedRepository;
import com.bounswe2024group10.animaltroove.repository.DislikedRepository;
import com.bounswe2024group10.animaltroove.repository.LikedRepository;

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

    @Autowired
    private BookmarkedRepository bookmarkedRepository;

    @Autowired
    private DislikedRepository dislikedRepository;

    @Autowired
    private LikedRepository likedRepository;
    
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
    public GetPostsResponse getPostsByFamily(GetPostsRequest request) {
        if (request.getFamily() == null || request.getFamily().isEmpty()) {
            return new GetPostsResponse(false, "Family is required", null);
        }
        try {
            List<Post> posts = postRepository.findByFamilyContaining(request.getFamily());
            return new GetPostsResponse(true, "Posts retrieved successfully", posts);
        } catch (IllegalArgumentException e) {
            return new GetPostsResponse(false, "Invalid family name", null);
        }
    }

    public GetUserPostInteractionsResponse getUserPostInteractions(GetUserPostInteractionsRequest request) {
        if (request.getUsername() == null || request.getUsername().isEmpty()) {
            return new GetUserPostInteractionsResponse(false, "Username is required", false, false, false);
        }
        if (registeredUserRepository.findByUserName(request.getUsername()) == null) {
            return new GetUserPostInteractionsResponse(false, "User not found", false, false, false);
        }
        if (postRepository.findByPostID(request.getPostID()) == null) {
            return new GetUserPostInteractionsResponse(false, "Post not found", false, false, false);
        }
        try {
            boolean isBookmarked = bookmarkedRepository.existsByUsernameAndPostID(request.getUsername(), request.getPostID());
            boolean isDisliked = dislikedRepository.existsByUsernameAndPostID(request.getUsername(), request.getPostID());
            boolean isLiked = likedRepository.existsByUsernameAndPostID(request.getUsername(), request.getPostID());
            return new GetUserPostInteractionsResponse(true, "Interactions retrieved successfully", isLiked, isDisliked, isBookmarked);
        } catch (IllegalArgumentException e) {
            return new GetUserPostInteractionsResponse(false, "Invalid post data", false, false, false);
        }
    }
}
