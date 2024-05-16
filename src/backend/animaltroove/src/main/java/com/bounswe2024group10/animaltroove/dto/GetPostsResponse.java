package com.bounswe2024group10.animaltroove.dto;

import com.bounswe2024group10.animaltroove.model.Post;

public class GetPostsResponse {

    private boolean success;
    private String message;
    private Iterable<Post> posts;

    public GetPostsResponse(boolean success, String message, Iterable<Post> posts) {
        this.success = success;
        this.message = message;
        this.posts = posts;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public Iterable<Post> getPosts() {
        return posts;
    }
}
