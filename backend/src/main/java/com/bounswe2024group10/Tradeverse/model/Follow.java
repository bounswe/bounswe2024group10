package com.bounswe2024group10.Tradeverse.model;

import jakarta.persistence.*;

@Entity
@Table(name = "follows")
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String followerUsername;

    @Column(nullable = false)
    private String followedUsername;

    public Follow() {}

    public Follow(String followerUsername, String followedUsername) {
        this.followerUsername = followerUsername;
        this.followedUsername = followedUsername;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFollowerUsername() {
        return followerUsername;
    }

    public void setFollowerUsername(String followerUsername) {
        this.followerUsername = followerUsername;
    }

    public String getFollowedUsername() {
        return followedUsername;
    }

    public void setFollowedUsername(String followedUsername) {
        this.followedUsername = followedUsername;
    }
}
