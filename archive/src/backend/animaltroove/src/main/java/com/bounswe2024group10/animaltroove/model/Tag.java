package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Tag")
public class Tag {

    @Id
    @ManyToOne
    @JoinColumn(name = "postID", nullable = false)
    private Post post;

    @Id
    @Column(name = "tag", length = 20)
    private String tag;

    public Tag() {
        // Default constructor
    }

    public Tag(Post post, String tag) {
        this.post = post;
        this.tag = tag;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}

