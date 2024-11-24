package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.HashMap;
import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.PostWSpecs;

public class FeedResponse {

    private List<PostWSpecs> forYou;
    private HashMap<String, List<PostWSpecs>> followedSubforumPosts;
    private HashMap<String, List<PostWSpecs>> followedUserPosts;
    private boolean isSuccessful;
    private String message;

    public FeedResponse(List<PostWSpecs> forYou, HashMap<String, List<PostWSpecs>> followedSubforumPosts, HashMap<String, List<PostWSpecs>> followedUserPosts, boolean isSuccessful, String message) {
        this.forYou = forYou;
        this.followedSubforumPosts = followedSubforumPosts;
        this.followedUserPosts = followedUserPosts;
        this.isSuccessful = isSuccessful;
        this.message = message;
    }

    public List<PostWSpecs> getForYou() {
        return forYou;
    }

    public void setForYou(List<PostWSpecs> forYou) {
        this.forYou = forYou;
    }

    public HashMap<String, List<PostWSpecs>> getFollowedSubforumPosts() {
        return followedSubforumPosts;
    }

    public void setFollowedSubforumPosts(HashMap<String, List<PostWSpecs>> followedSubforumPosts) {
        this.followedSubforumPosts = followedSubforumPosts;
    }

    public HashMap<String, List<PostWSpecs>> getFollowedUserPosts() {
        return followedUserPosts;
    }

    public void setFollowedUserPosts(HashMap<String, List<PostWSpecs>> followedUserPosts) {
        this.followedUserPosts = followedUserPosts;
    }

    public boolean isSuccessful() {
        return isSuccessful;
    }

    public void setSuccessful(boolean successful) {
        isSuccessful = successful;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
