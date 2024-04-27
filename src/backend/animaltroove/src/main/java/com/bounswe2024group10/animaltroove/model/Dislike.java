package com.bounswe2024group10.animaltroove.model;

import javax.persistence.*;

@Entity
@Table(name = "dislike", uniqueConstraints = @UniqueConstraint(columnNames = {"userID", "postID"}))
public class Dislike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dislikeID")
    private Long dislikeID;

    @ManyToOne(optional = false)
    @JoinColumn(name = "userID", referencedColumnName = "userID")
    private RegisteredUser user;

    @ManyToOne(optional = false)
    @JoinColumn(name = "postID", referencedColumnName = "postID")
    private Post post;

    public Dislike() {
        // Default constructor
    }

    public Dislike(RegisteredUser user, Post post) {
        this.user = user;
        this.post = post;
    }

    public Long getDislikeID() {
        return dislikeID;
    }

    public void setDislikeID(Long dislikeID) {
        this.dislikeID = dislikeID;
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

