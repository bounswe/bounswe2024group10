package com.bounswe2024group10.Tradeverse.dto.post;
import com.bounswe2024group10.Tradeverse.extra.PostWSpecs;


public class GetPostResponse {
    private boolean isSuccessful;
    private String message;
    private PostWSpecs post;

    public GetPostResponse(boolean isSuccessful, String message, PostWSpecs post) {
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

    public PostWSpecs getPost() {
        return post;
    }

    public void setPost(PostWSpecs post) {
        this.post = post;
    }
}
