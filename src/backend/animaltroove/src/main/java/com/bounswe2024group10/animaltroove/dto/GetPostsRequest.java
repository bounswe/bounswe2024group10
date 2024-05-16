package com.bounswe2024group10.animaltroove.dto;

public class GetPostsRequest {

    private String username;
    private String animalName;

    public GetPostsRequest() {
        // Default constructor
    }

    public GetPostsRequest(String username, String animalName) {
        this.username = username;
        this.animalName = animalName;
    }

    public String getUsername() {
        return username;
    }

    public String getAnimalName() {
        return animalName;
    }
}
