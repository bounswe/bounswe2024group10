package com.bounswe2024group10.animaltroove.model;

import javax.persistence.*;

@Entity
@Table(name = "following")
@IdClass(UserUser.class)
public class Following {

    @Id
    @ManyToOne
    @JoinColumn(name = "followingUserID")
    private RegisteredUser followingUser;

    @Id
    @ManyToOne
    @JoinColumn(name = "followedUserID")
    private RegisteredUser followedUser;

    public Following() {
        // Default constructor
    }

    public Following(RegisteredUser followingUser, RegisteredUser followedUser) {
        this.followingUser = followingUser;
        this.followedUser = followedUser;
    }

    public RegisteredUser getFollowingUser() {
        return followingUser;
    }

    public void setFollowingUser(RegisteredUser followingUser) {
        this.followingUser = followingUser;
    }

    public RegisteredUser getFollowedUser() {
        return followedUser;
    }

    public void setFollowedUser(RegisteredUser followedUser) {
        this.followedUser = followedUser;
    }
}

