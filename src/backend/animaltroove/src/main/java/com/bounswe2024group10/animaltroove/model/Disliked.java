package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Disliked")
public class Disliked {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dislikeID")
    private Integer dislikeID;

    @Column(name = "username")
    private String username;

    @Column(name = "postID")
    private Integer postID;

    public Disliked() {
        // Default constructor
    }

    public Disliked(String username, Integer postID) {
        this.username = username;
        this.postID = postID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getPostID() {
        return postID;
    }

    public void setPostID(Integer postID) {
        this.postID = postID;
    }
}
