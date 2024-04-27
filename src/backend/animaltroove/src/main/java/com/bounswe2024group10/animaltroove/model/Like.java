package com.bounswe2024group10.animaltroove.model;

import javax.persistence.*;

@Entity
@Table(name = "liked", uniqueConstraints = @UniqueConstraint(columnNames = {"userID", "postID"}))
public class Liked {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "likeID")
    private Long likeID;

    @ManyToOne(optional = false)
    @JoinColumn(name = "userID", referencedColumnName = "userID")
    private RegisteredUser user;

    @ManyToOne(optional = false)
    @JoinColumn(name = "postID", referencedColumnName = "postID")
    private Post post;

    public Liked() {
        // Default constructor
    }

    public Liked(RegisteredUser user, Post post) {
        this.user = user;
        this.post = post;
    }

    public Long getLikeID() {
        return likeID;
    }

    public void setLikeID(Long likeID) {
        this.likeID = likeID;
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

