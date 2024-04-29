package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "postID")
    private Long postID;

    @Lob
    @Column(name = "media", nullable = false)
    private byte[] media;

    @Column(name = "caption", length = 256)
    private String caption;

    @Temporal(TemporalType.DATE)
    @Column(name = "photoDate")
    private Date photoDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "postDate", nullable = false)
    private Date postDate;

    @Column(name = "location")
    private String location;

    @ManyToOne
    @JoinColumn(name = "userID", nullable = false)
    private RegisteredUser user;

    public Post() {
        // Default constructor
    }

    public Long getPostID() {
        return postID;
    }

    public void setPostID(Long postID) {
        this.postID = postID;
    }

    public byte[] getMedia() {
        return media;
    }

    public void setMedia(byte[] media) {
        this.media = media;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public Date getPhotoDate() {
        return photoDate;
    }

    public void setPhotoDate(Date photoDate) {
        this.photoDate = photoDate;
    }

    public Date getPostDate() {
        return postDate;
    }

    public void setPostDate(Date postDate) {
        this.postDate = postDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public RegisteredUser getUser() {
        return user;
    }

    public void setUser(RegisteredUser user) {
        this.user = user;
    }
}

