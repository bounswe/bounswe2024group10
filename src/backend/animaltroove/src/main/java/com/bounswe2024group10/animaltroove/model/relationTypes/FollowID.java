package com.bounswe2024group10.animaltroove.model;

import java.io.Serializable;

public class FollowID implements Serializable {
  private Long followingUserID;
  private Long followedUserID;

  public FollowID(Long followingUserID, Long followedUserID) {
    this.followingUserID = followingUserID;
    this.followedUserID = followedUserID;
  }
} 
