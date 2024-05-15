package com.bounswe2024group10.animaltroove.dto;

public class UnlikeRequest {
    
    private int registeredUserID;
    private Long postID;

    public UnlikeRequest(int registeredUserID, Long postID) {
        this.registeredUserID = registeredUserID;
        this.postID = postID;
    }

    public int getRegisteredUserID() {
        return registeredUserID;
    }

    public Long getPostID() {
        return postID;
    }

}