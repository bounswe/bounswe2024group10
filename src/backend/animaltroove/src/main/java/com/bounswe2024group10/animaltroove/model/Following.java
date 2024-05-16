package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Following")
public class Following {

    @Id
    @ManyToOne
    @JoinColumn(name = "followingUserID")
    private String followingUser;

    @Id
    @ManyToOne
    @JoinColumn(name = "followedUserID")
    private String followedUser;

    public Following() {
        // Default constructor
    }

    public Following(String followingUser, String followedUser) {
        this.followingUser = followingUser;
        this.followedUser = followedUser;
    }

    public String getFollowingUser() {
        return followingUser;
    }

    public void setFollowingUser(String followingUser) {
        this.followingUser = followingUser;
    }

    public String getFollowedUser() {
        return followedUser;
    }

    public void setFollowedUser(String followedUser) {
        this.followedUser = followedUser;
    }
}

