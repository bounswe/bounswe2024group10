package com.bounswe2024group10.animaltroove.dto;

public class GetDislikeCountRequest {
    private int postID;

    public GetDislikeCountRequest(int postID) {
        this.postID = postID;
    }

    public int getPostID() {
        return postID;
    }
}