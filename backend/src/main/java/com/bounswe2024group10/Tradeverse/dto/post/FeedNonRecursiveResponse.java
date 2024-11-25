package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.HashMap;
import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.SuperPost;

public class FeedNonRecursiveResponse {

    private List<SuperPost> forYou;
    private HashMap<String, List<SuperPost>> followedSubforumPosts;
    private HashMap<String, List<SuperPost>> followedUserPosts;
    private boolean isSuccessful;
    private String message;

    public FeedNonRecursiveResponse(List<SuperPost> forYou, HashMap<String, List<SuperPost>> followedSubforumPosts, HashMap<String, List<SuperPost>> followedUserPosts, boolean isSuccessful, String message) {
        this.forYou = forYou;
        this.followedSubforumPosts = followedSubforumPosts;
        this.followedUserPosts = followedUserPosts;
        this.isSuccessful = isSuccessful;
        this.message = message;
    }

    public List<SuperPost> getForYou() {
        return forYou;
    }

    public void setForYou(List<SuperPost> forYou) {
        this.forYou = forYou;
    }

    public HashMap<String, List<SuperPost>> getFollowedSubforumPosts() {
        return followedSubforumPosts;
    }

    public void setFollowedSubforumPosts(HashMap<String, List<SuperPost>> followedSubforumPosts) {
        this.followedSubforumPosts = followedSubforumPosts;
    }

    public HashMap<String, List<SuperPost>> getFollowedUserPosts() {
        return followedUserPosts;
    }

    public void setFollowedUserPosts(HashMap<String, List<SuperPost>> followedUserPosts) {
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
