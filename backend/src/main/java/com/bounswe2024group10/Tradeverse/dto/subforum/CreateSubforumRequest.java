package com.bounswe2024group10.Tradeverse.dto.subforum;

public class CreateSubforumRequest {
    private String name;
    private String description;
    private String tagColor;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTagColor() {
        return tagColor;
    }

    public void setTagColor(String tagColor) {
        this.tagColor = tagColor;
    }
} 