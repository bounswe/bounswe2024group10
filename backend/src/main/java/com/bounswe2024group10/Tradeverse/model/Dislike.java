package com.bounswe2024group10.Tradeverse.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "dislikes")
public class Dislike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String dislikeUsername;

    @Column(nullable = false)
    private Long postID;

    public Dislike() {
    }

    public Dislike(String dislikeUsername, Long postID) {
        this.dislikeUsername = dislikeUsername;
        this.postID = postID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDislikeUsername() {
        return dislikeUsername;
    }

    public void setDislikeUsername(String likeUsername) {
        this.dislikeUsername = likeUsername;
    }

    public Long getPostID() {
        return postID;
    }

    public void setPostID(Long postID) {
        this.postID = postID;
    }
}
