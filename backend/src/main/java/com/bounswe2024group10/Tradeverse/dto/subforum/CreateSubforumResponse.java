package com.bounswe2024group10.Tradeverse.dto.subforum;

public class CreateSubforumResponse {
    private Long id;
    private String name;
    private String description;
    private String tagColor;

    public CreateSubforumResponse(Long id, String name, String description, String tagColor) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tagColor = tagColor;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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