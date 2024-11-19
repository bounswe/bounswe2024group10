package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.List;

import com.bounswe2024group10.Tradeverse.model.Post;

public class GetCommentsWLikesResponse {

    private boolean isSuccessful;
    private String message;
    private List<Post> comments;
    private List<Long> nofLikes;
    private List<Long> nofDislikes;

    public GetCommentsWLikesResponse(boolean isSuccessful, String message, List<Post> comments, List<Long> nofLikes, List<Long> nofDislikes) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.comments = comments;
        this.nofLikes = nofLikes;
        this.nofDislikes = nofDislikes;
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

    public List<Long> getNofLikes() {
        return nofLikes;
    }

    public void setNofLikes(List<Long> nofLikes) {
        this.nofLikes = nofLikes;
    }

    public List<Long> getNofDislikes() {
        return nofDislikes;
    }

    public void setNofDislikes(List<Long> nofDislikes) {
        this.nofDislikes = nofDislikes;
    }
}
