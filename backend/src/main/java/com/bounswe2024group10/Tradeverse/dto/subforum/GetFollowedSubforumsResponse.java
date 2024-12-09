package com.bounswe2024group10.Tradeverse.dto.subforum;

public class GetFollowedSubforumsResponse {
    private Long id;
    private String name;
    private String description;
    private String tagColor;
    private int followerCount;
    private int postCount;

    public GetFollowedSubforumsResponse(Long id, String name, String description, String tagColor, int followerCount, int postCount) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tagColor = tagColor;
        this.followerCount = followerCount;
        this.postCount = postCount;
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

    public int getFollowerCount() {
        return followerCount;
    }

    public void setFollowerCount(int followerCount) {
        this.followerCount = followerCount;
    }

    public int getPostCount() {
        return postCount;
    }

    public void setPostCount(int postCount) {
        this.postCount = postCount;
    }
} 