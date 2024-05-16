package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "commentID")
    private int commentID;

    @Column(name = "username")
    private String username;

    @Column(name = "postID")
    private int postID;

    @Column(name = "description", nullable = false, length = 1000)
    private String description;

    public Comment() {
        // Default constructor
    }

    public Comment(String username, int postID, String description) {
        this.username = username;
        this.postID = postID;
        this.description = description;
    }

    public int getCommentID() {
        return commentID;
    }

    public void setCommentID(int commentID) {
        this.commentID = commentID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getPostID() {
        return postID;
    }

    public void setPostID(int postID) {
        this.postID = postID;
    }
}
