package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Dislike")
public class Dislike {

    @Id
    @ManyToOne
    @JoinColumn(name = "userID")
    private RegisteredUser user;

    @Id
    @ManyToOne
    @JoinColumn(name = "postID")
    private Post post;

    public Dislike() {
        // Default constructor
    }

    public Dislike(RegisteredUser user, Post post) {
        this.user = user;
        this.post = post;
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
}
