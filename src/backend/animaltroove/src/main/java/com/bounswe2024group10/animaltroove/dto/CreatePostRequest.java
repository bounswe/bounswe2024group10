package com.bounswe2024group10.animaltroove.dto;

public class CreatePostRequest {
    private byte[] media;
    private String caption;
    private String location;

    public CreatePostRequest(byte[] media, String caption, String location) {
        this.media = media;
        this.caption = caption;
        this.location = location;
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
}
