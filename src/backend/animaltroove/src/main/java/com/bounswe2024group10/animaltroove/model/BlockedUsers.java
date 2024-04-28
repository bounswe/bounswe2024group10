package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.*;

@Entity
@Table(name = "BlockedUsers")
public class BlockedUsers {

    @Id
    @ManyToOne
    @JoinColumn(name = "blockingUserID")
    private RegisteredUser blockingUser;

    @Id
    @ManyToOne
    @JoinColumn(name = "blockedUserID")
    private RegisteredUser blockedUser;

    public BlockedUsers() {
        // Default constructor
    }

    public BlockedUsers(RegisteredUser blockingUser, RegisteredUser blockedUser) {
        this.blockingUser = blockingUser;
        this.blockedUser = blockedUser;
    }

    public RegisteredUser getBlockingUser() {
        return blockingUser;
    }

    public void setBlockingUser(RegisteredUser blockingUser) {
        this.blockingUser = blockingUser;
    }

    public RegisteredUser getBlockedUser() {
        return blockedUser;
    }

    public void setBlockedUser(RegisteredUser blockedUser) {
        this.blockedUser = blockedUser;
    }
}

