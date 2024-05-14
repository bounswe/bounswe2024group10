package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;
import com.bounswe2024group10.animaltroove.model.relationTypes.BookmarkedID;

@Entity
@Table(name = "Bookmarked")
@IdClass(BookmarkedID.class)
public class Bookmarked {

    @Id
    @JoinColumn(name = "userID")
    private int userID;

    @Id
    @JoinColumn(name = "postID")
    private Long postID;

    public Bookmarked() {
        // Default constructor
    }

    public Bookmarked(int userID, Long postID) {
        this.userID = userID;
        this.postID = postID;
    }

    public int getUser() {
        return userID;
    }

    public void setUser(int userID) {
        this.userID = userID;
    }

    public Long getPost() {
        return postID;
    }

    public void setPost(Long postID) {
        this.postID = postID;
    }
}
