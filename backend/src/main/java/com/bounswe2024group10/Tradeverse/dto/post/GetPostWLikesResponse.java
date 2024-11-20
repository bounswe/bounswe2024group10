package com.bounswe2024group10.Tradeverse.dto.post;

import com.bounswe2024group10.Tradeverse.model.Post;

public class GetPostWLikesResponse {
    private boolean isSuccessful;
    private String message;
    private Post post;
    private Long nofLikes;
    private Long nofDislikes;

    public GetPostWLikesResponse(boolean isSuccessful, String message, Post post, Long nofLikes, Long nofDislikes) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.post = post;
        this.nofLikes = nofLikes;
        this.nofDislikes = nofDislikes;
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

    public Long getNofLikes() {
        return nofLikes;
    }

    public void setNofLikes(Long nofLikes) {
        this.nofLikes = nofLikes;
    }

    public Long getNofDislikes() {
        return nofDislikes;
    }

    public void setNofDislikes(Long nofDislikes) {
        this.nofDislikes = nofDislikes;
    }
}
