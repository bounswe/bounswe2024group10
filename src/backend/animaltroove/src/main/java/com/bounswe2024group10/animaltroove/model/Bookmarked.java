package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Bookmarked")
public class Bookmarked {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookmarkID;
    
    @Column(name = "username")
    private String username;

    @Column(name = "postID")
    private int postID;

    public Bookmarked() {
        // Default constructor
    }

    public Bookmarked(String username, int postID) {
        this.username = username;
        this.postID = postID;
    }

    public String getUsername() {
        return username;
    }

    public int getPostID() {
        return postID;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPostID(int postID) {
        this.postID = postID;
    }
}