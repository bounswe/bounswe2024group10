package com.bounswe2024group10.Tradeverse.dto.post;
import com.bounswe2024group10.Tradeverse.model.Post;


public class GetPostResponse {
    private boolean isSuccessful;
    private String message;
    private Post post;

    public GetPostResponse(boolean isSuccessful, String message, Post post) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.post = post;
    }

    public boolean getIsSuccessful() {
        return isSuccessful;
    }

    public void setIsSuccessful(boolean successful) {
        isSuccessful = successful;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
}
