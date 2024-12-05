package com.bounswe2024group10.Tradeverse.dto.post.other;
import java.util.List;

public class SubforumDetailsDTO {
    private String subforumName;
    private Boolean isFollowedByGivenUsername;
    private List<PostSummaryDTO> posts;
    private Long numberOfPosts;
    private Long numberOfFollowers;

    public SubforumDetailsDTO(String subforumName, Boolean isFollowedByGivenUsername, List<PostSummaryDTO> posts, Long numberOfPosts, Long numberOfFollowers) {
        this.subforumName = subforumName;
        this.isFollowedByGivenUsername = isFollowedByGivenUsername;
        this.posts = posts;
        this.numberOfPosts = numberOfPosts;
        this.numberOfFollowers = numberOfFollowers;
    }

    // Getters and setters
    public String getSubforumName() {
        return subforumName;
    }

    public void setSubforumName(String subforumName) {
        this.subforumName = subforumName;
    }

    public Boolean getIsFollowedByGivenUsername() {
        return isFollowedByGivenUsername;
    }

    public void setIsFollowedByGivenUsername(Boolean followedByGivenUsername) {
        isFollowedByGivenUsername = followedByGivenUsername;
    }

    public List<PostSummaryDTO> getPosts() {
        return posts;
    }

    public void setPosts(List<PostSummaryDTO> posts) {
        this.posts = posts;
    }

    public Long getNumberOfPosts() {
        return numberOfPosts;
    }

    public void setNumberOfPosts(Long numberOfPosts) {
        this.numberOfPosts = numberOfPosts;
    }

    public Long getNumberOfFollowers() {
        return numberOfFollowers;
    }

    public void setNumberOfFollowers(Long numberOfFollowers) {
        this.numberOfFollowers = numberOfFollowers;
    }
}
