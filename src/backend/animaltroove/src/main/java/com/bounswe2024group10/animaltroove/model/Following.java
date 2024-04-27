package com.bounswe2024group10.animaltroove.model;

import javax.persistence.*;

@Entity
@Table(name = "following", uniqueConstraints = @UniqueConstraint(columnNames = {"followingUserID", "followedUserID"}))
public class Following {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "followID")
    private Long followID;

    @ManyToOne(optional = false)
    @JoinColumn(name = "followingUserID", referencedColumnName = "followingUserID")
    private RegisteredUser followingUser;

    @ManyToOne(optional = false)
    @JoinColumn(name = "followedUserID", referencedColumnName = "followedUserID")
    private RegisteredUser followedUser;

    public Following() {
        // Default constructor
    }

    public Following(RegisteredUser followingUser, RegisteredUser followedUser) {
        this.followingUser = followingUser;
        this.followedUser = followedUser;
    }

    public Long getFollowID() {
        return followID;
    }

    public void setFollowID(Long followID) {
        this.followID = followID;
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

