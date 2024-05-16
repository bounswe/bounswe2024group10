package com.bounswe2024group10.animaltroove.dto;

public class GetLikeCountRequest {
    private int postID;

    public GetLikeCountRequest(int postID) {
        this.postID = postID;
    }

    public int getPostID() {
        return postID;
    }
}