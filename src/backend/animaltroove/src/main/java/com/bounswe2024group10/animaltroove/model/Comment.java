package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "commentID")
    private Long commentID;

    @ManyToOne(optional = false)
    @JoinColumn(name = "userID")
    private RegisteredUser user;

    @ManyToOne(optional = false)
    @JoinColumn(name = "postID")
    private Post post;

    @Column(name = "description", nullable = false, length = 100)
    private String description;

    public Comment() {
        // Default constructor
    }

    public Comment(RegisteredUser user, Post post, String description) {
        this.user = user;
        this.post = post;
        this.description = description;
    }

    public Long getCommentID() {
        return commentID;
    }

    public void setCommentID(Long commentID) {
        this.commentID = commentID;
    }

    public RegisteredUser getUser() {
        return user;
    }

    public void setUser(RegisteredUser user) {
        this.user = user;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

