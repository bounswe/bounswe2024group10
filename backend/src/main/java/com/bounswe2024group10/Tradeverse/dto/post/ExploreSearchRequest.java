package com.bounswe2024group10.Tradeverse.dto.post;

public class ExploreSearchRequest {
    private String username;
    private String keyword;

    public ExploreSearchRequest(String username, String keyword) {
        this.username = username;
        this.keyword = keyword;
    }

    public String getUsername() {
        return username;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }
}
