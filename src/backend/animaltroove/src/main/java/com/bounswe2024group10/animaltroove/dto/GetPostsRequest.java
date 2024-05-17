package com.bounswe2024group10.animaltroove.dto;
import com.bounswe2024group10.animaltroove.service.SearchService;


public class GetPostsRequest {

    private String username;
    private String animalName;
    private String family;

    public GetPostsRequest() {
        // Default constructor
    }

    public GetPostsRequest(String username, String animalName) {
        this.username = username;
        this.animalName = animalName;
        this.family = SearchService.findFamily(SearchService.getEntityURI(animalName));

    }

    public String getUsername() {
        return username;
    }

    public String getAnimalName() {
        return animalName;
    }
    public String getFamily() {
        return family;
    }
}
