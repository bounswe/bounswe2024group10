package com.bounswe2024group10.Tradeverse.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "follows-subforum")
public class FollowSubforum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String followerUsername;

    @Column(nullable = false)
    private Long followedSubforumID;

    public FollowSubforum() {}

    public FollowSubforum(String followerUsername, Long followedSubforumID) {
        this.followerUsername = followerUsername;
        this.followedSubforumID = followedSubforumID;
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

    public Long getFollowedSubforumID() {
        return followedSubforumID;
    }

    public void setFollowedSubforumID(Long followedSubforum) {
        this.followedSubforumID = followedSubforum;
    }
}
