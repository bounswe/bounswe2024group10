package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "postID")
    private Integer postID;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "media", nullable = false, length = 200000)
    private byte[] media;

    @Column(name = "caption", length = 256)
    private String caption;

    @Column(name = "photoDate")
    private Date photoDate;

    @Column(name = "postDate", nullable = false)
    private Date postDate;

    @Column(name = "location")
    private String location;

    public Post() {
        // Default constructor
    }

    public Post(String username, byte[] media, String caption, Date photoDate, Date postDate, String location) {
        this.username = username;
        this.media = media;
        this.caption = caption;
        this.photoDate = photoDate;
        this.postDate = postDate;
        this.location = location;
    }

    public Integer getPostID() {
        return postID;
    }

    public void setPostID(Integer postID) {
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
}

