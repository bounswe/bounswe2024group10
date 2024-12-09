package com.bounswe2024group10.Tradeverse.model;

import jakarta.persistence.*;

@Entity
@Table(name = "follow_subforums")
public class FollowSubforum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String followerUsername;

    @Column(nullable = false)
    private Long subforumID;

    public FollowSubforum() {}

    public FollowSubforum(String followerUsername, Long subforumID) {
        this.followerUsername = followerUsername;
        this.subforumID = subforumID;
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

    public Long getSubforumID() {
        return subforumID;
    }

    public void setSubforumID(Long subforumID) {
        this.subforumID = subforumID;
    }
}
