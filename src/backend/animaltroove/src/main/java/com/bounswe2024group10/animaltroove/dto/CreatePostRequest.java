package com.bounswe2024group10.animaltroove.dto;

import java.util.Date;

public class CreatePostRequest {

    private String username;
    private byte[] media;
    private String caption;
    private String location;
    private Date photoDate;

    public CreatePostRequest(String username, byte[] media, String caption, String location, Date photoDate) {
        this.username = username;
        this.media = media;
        this.caption = caption;
        this.location = location;
        this.photoDate = photoDate;
    }

    public String getUsername() {
        return username;
    }

    public byte[] getMedia() {
        return media;
    }

    public String getCaption() {
        return caption;
    }

    public String getLocation() {
        return location;
    }

    public Date getPhotoDate() {
        return photoDate;
    }
}
