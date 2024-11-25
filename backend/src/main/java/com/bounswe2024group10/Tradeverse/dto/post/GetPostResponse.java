package com.bounswe2024group10.Tradeverse.dto.post;
import com.bounswe2024group10.Tradeverse.model.Post;
 

public class GetPostResponse {
    private boolean isSuccessful;
    private String message;
    private Post post;
    private boolean isLiked = false;
    private boolean isDisliked = false;

    public GetPostResponse(boolean isSuccessful, String message, Post post) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.post = post;
    }

    public GetPostResponse(boolean isSuccessful, String message, Post post, boolean isLiked, boolean isDisliked) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.post = post;
        this.isLiked = isLiked;
        this.isDisliked = isDisliked;
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

    public boolean getIsLiked() {
        return isLiked;
    }

    public void setIsLiked(boolean liked) {
        isLiked = liked;
    }

    public boolean getIsDisliked() {
        return isDisliked;
    }

    public void setIsDisliked(boolean disliked) {
        isDisliked = disliked;
    }
}
