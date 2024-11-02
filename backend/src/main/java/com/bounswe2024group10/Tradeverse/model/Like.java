package com.bounswe2024group10.Tradeverse.model;

import jakarta.persistence.*;

@Entity
@Table(name = "likes")
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String likeUsername;

    @Column(nullable = false)
    private Long postID;

    public Like() {
    }

    public Like(String likeUsername, Long postID) {
        this.likeUsername = likeUsername;
        this.postID = postID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLikeUsername() {
        return likeUsername;
    }

    public void setLikeUsername(String likeUsername) {
        this.likeUsername = likeUsername;
    }

    public Long getPostID() {
        return postID;
    }

    public void setPostID(Long postID) {
        this.postID = postID;
    }
}
