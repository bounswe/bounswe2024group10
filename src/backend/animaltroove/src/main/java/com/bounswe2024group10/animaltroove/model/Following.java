package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Following")
public class Following {

    @Id
    @JoinColumn(name = "followingUserID")
    private int followingUserID;

    @Id
    @JoinColumn(name = "followedUserID")
    private int followedUserID;

    public Following() {
        // Default constructor
    }

    public Following (int followingUserID, int followedUserID) {
        this.followingUserID = followingUserID;
        this.followedUserID = followedUserID;
    }

    public int getFollowingUserID() {
        return followingUserID;
    }

    public void setFollowingUserID (int followingUserID) {
        this.followingUserID = followingUserID;
    }

    public int getFollowedUserID() {
        return followedUserID;
    }

    public void setFollowedUserID (int followedUserID) {
        this.followedUserID = followedUserID;
    }
}

