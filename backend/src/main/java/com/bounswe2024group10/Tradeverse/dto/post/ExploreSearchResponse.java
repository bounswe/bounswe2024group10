package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.PostWSpecs;
import com.bounswe2024group10.Tradeverse.extra.SubforumWSpecs;

public class ExploreSearchResponse {

    private List<PostWSpecs> popular;
    private List<PostWSpecs> posts;
    private List<Long> assets;
    private List<Long> tags;
    private List<SubforumWSpecs> subforums;
    private List<Long> people;
    private boolean isSuccessful;
    private String message;

    public ExploreSearchResponse(List<PostWSpecs> popular, List<PostWSpecs> posts, List<Long> assets, List<Long> tags, List<SubforumWSpecs> subforums, List<Long> people, boolean isSuccessful, String message) {
        this.popular = popular;
        this.posts = posts;
        this.assets = assets;
        this.tags = tags;
        this.subforums = subforums;
        this.people = people;
        this.isSuccessful = isSuccessful;
        this.message = message;
    }

    public List<PostWSpecs> getPopular() {
        return popular;
    }

    public void setPopular(List<PostWSpecs> popular) {
        this.popular = popular;
    }

    public List<PostWSpecs> getPosts() {
        return posts;
    }

    public void setPosts(List<PostWSpecs> posts) {
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

    public List<SubforumWSpecs> getSubforums() {
        return subforums;
    }

    public void setSubforums(List<SubforumWSpecs> subforums) {
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
