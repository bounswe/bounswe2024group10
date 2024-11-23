package com.bounswe2024group10.Tradeverse.dto.portfolio;

public class CreatePortfolioResponse {
    private boolean isSuccessful;
    private Long id;
    private String username;
    private String name;
    private String message;

    public CreatePortfolioResponse(boolean isSuccessful, Long id, String username, String name, String message) {
        this.isSuccessful = isSuccessful;
        this.id = id;
        this.username = username;
        this.name = name;
        this.message = message;
    }
    public boolean isSuccessful() {
        return isSuccessful;
    }

    public void setSuccessful(boolean successful) {
        isSuccessful = successful;
    }


    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }
    public String getName() {
        return name;
    }

    public String getMessage() {
        return message;
    }
}
