package com.bounswe2024group10.Tradeverse.dto.user;

import java.util.List;
import com.bounswe2024group10.Tradeverse.dto.post.GetPostResponse;

public class GetProfileResponse {
    private boolean success;
    private String message;
    private String username;
    private String profilePhoto;
    private int postCount;
    private int followerCount;
    private boolean isFollowing;
    private List<GetPostResponse> popularPosts;
    private List<GetPostResponse> recentPosts;

    public GetProfileResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public GetProfileResponse(String username, String profilePhoto, int postCount, 
                            int followerCount, boolean isFollowing, 
                            List<GetPostResponse> popularPosts, List<GetPostResponse> recentPosts) {
        this.success = true;
        this.username = username;
        this.profilePhoto = profilePhoto;
        this.postCount = postCount;
        this.followerCount = followerCount;
        this.isFollowing = isFollowing;
        this.popularPosts = popularPosts;
        this.recentPosts = recentPosts;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(String profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    public int getPostCount() {
        return postCount;
    }

    public void setPostCount(int postCount) {
        this.postCount = postCount;
    }

    public int getFollowerCount() {
        return followerCount;
    }

    public void setFollowerCount(int followerCount) {
        this.followerCount = followerCount;
    }

    public boolean isFollowing() {
        return isFollowing;
    }

    public void setFollowing(boolean following) {
        isFollowing = following;
    }

    public List<GetPostResponse> getPopularPosts() {
        return popularPosts;
    }

    public void setPopularPosts(List<GetPostResponse> popularPosts) {
        this.popularPosts = popularPosts;
    }

    public List<GetPostResponse> getRecentPosts() {
        return recentPosts;
    }

    public void setRecentPosts(List<GetPostResponse> recentPosts) {
        this.recentPosts = recentPosts;
    }
}
