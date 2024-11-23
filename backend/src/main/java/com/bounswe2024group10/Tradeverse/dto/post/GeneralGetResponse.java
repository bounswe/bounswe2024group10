package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.List;

import com.bounswe2024group10.Tradeverse.model.Post;

public class GeneralGetResponse {

    private boolean isSuccessful;
    private String message;
    private List<Post> comments;
    private List<Boolean> isLiked;
    private List<Boolean> isDisliked;

    public GeneralGetResponse(boolean isSuccessful, String message, List<Post> comments) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.comments = comments;
    }

    public GeneralGetResponse(boolean isSuccessful, String message, List<Post> comments, List<Boolean> isLiked, List<Boolean> isDisliked) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.comments = comments;
        this.isLiked = isLiked;
        this.isDisliked = isDisliked;
    }

    public boolean isSuccessful() {
        return isSuccessful;
    }

    public void setSuccessful(boolean successful) {
        isSuccessful = successful;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<Post> getComments() {
        return comments;
    }

    public void setComments(List<Post> comments) {
        this.comments = comments;
    }

    public List<Boolean> getIsLiked() {
        return isLiked;
    }

    public void setIsLiked(List<Boolean> liked) {
        isLiked = liked;
    }

    public List<Boolean> getIsDisliked() {
        return isDisliked;
    }

    public void setIsDisliked(List<Boolean> disliked) {
        isDisliked = disliked;
    }
}
