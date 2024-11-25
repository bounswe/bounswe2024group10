package com.bounswe2024group10.Tradeverse.dto.post.explore;

import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.SuperPost;
import com.bounswe2024group10.Tradeverse.extra.SuperSubforum;

public class ExploreSearchNonRecursiveResponse {

    private List<SuperPost> popular;
    private List<SuperPost> posts;
    private List<Long> assets;
    private List<Long> tags;
    private List<SuperSubforum> subforums;
    private List<Long> people;
    private boolean isSuccessful;
    private String message;

    public ExploreSearchNonRecursiveResponse(List<SuperPost> popular, List<SuperPost> posts, List<Long> assets, List<Long> tags, List<SuperSubforum> subforums, List<Long> people, boolean isSuccessful, String message) {
        this.popular = popular;
        this.posts = posts;
        this.assets = assets;
        this.tags = tags;
        this.subforums = subforums;
        this.people = people;
        this.isSuccessful = isSuccessful;
        this.message = message;
    }

    public List<SuperPost> getPopular() {
        return popular;
    }

    public void setPopular(List<SuperPost> popular) {
        this.popular = popular;
    }

    public List<SuperPost> getPosts() {
        return posts;
    }

    public void setPosts(List<SuperPost> posts) {
        this.posts = posts;
    }

    public List<Long> getAssets() {
        return assets;
    }

    public void setAssets(List<Long> assets) {
        this.assets = assets;
    }

    public List<Long> getTags() {
        return tags;
    }

    public void setTags(List<Long> tags) {
        this.tags = tags;
    }

    public List<SuperSubforum> getSubforums() {
        return subforums;
    }

    public void setSubforums(List<SuperSubforum> subforums) {
        this.subforums = subforums;
    }

    public List<Long> getPeople() {
        return people;
    }

    public void setPeople(List<Long> people) {
        this.people = people;
    }

    public boolean isSuccessful() {
        return isSuccessful;
    }

    public void setSuccessful(boolean isSuccessful) {
        this.isSuccessful = isSuccessful;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
