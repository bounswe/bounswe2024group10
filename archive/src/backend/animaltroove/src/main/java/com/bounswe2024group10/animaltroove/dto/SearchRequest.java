package com.bounswe2024group10.animaltroove.dto;

public class SearchRequest {
    private String searchTerm;

    public SearchRequest() {
        // Default constructor
    }

    public SearchRequest(String searchTerm) {
        this.searchTerm = searchTerm;
    }

    public String getSearchTerm() {
        return searchTerm;
    }

    public void setSearchTerm(String searchTerm) {
        this.searchTerm = searchTerm;
    }
}