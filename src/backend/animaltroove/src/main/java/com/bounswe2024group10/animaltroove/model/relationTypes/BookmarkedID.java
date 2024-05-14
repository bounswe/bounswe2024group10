package com.bounswe2024group10.animaltroove.model.relationTypes;


import java.io.Serializable;

public class BookmarkedID implements Serializable {
    private int userID;
    private Long postID;


    public BookmarkedID() {
    }

    public BookmarkedID(int userID, Long postID) {
        this.userID = userID;
        this.postID = postID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public Long getPostId() {
        return postID;
    }

    public void setPostId(Long postId) {
        this.postID = postID;
    }

}