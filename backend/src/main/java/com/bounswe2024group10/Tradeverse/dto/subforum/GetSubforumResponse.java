package com.bounswe2024group10.Tradeverse.dto.subforum;

import java.util.List;

import com.bounswe2024group10.Tradeverse.dto.post.GetPostResponse;

public class GetSubforumResponse {

    private Long id;
    private String name;
    private String description;
    private String tagColor;
    private boolean isFollowed;
    private int followerCount;
    private int postCount;
    private List<GetPostResponse> posts;

    public GetSubforumResponse(Long id, String name, String description, String tagColor, boolean isFollowed, int followerCount, int postCount, List<GetPostResponse> posts) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tagColor = tagColor;
        this.isFollowed = isFollowed;
        this.followerCount = followerCount;
        this.postCount = postCount;
        this.posts = posts;
    }

    public GetSubforumResponse() {
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

    public boolean isFollowed() {
        return isFollowed;
    }

    public void setFollowed(boolean isFollowed) {
        this.isFollowed = isFollowed;
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

    public List<GetPostResponse> getPosts() {
        return posts;
    }

    public void setPosts(List<GetPostResponse> posts) {
        this.posts = posts;
    }

}
