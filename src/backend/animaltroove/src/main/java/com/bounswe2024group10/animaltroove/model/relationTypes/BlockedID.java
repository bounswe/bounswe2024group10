package com.bounswe2024group10.animaltroove.model;

import java.io.Serializable;

public class BlockedID implements Serializable {
  private Long blockingUserID;
  private Long blockedUserID;

  public BlockedID(Long blockingUserID, Long blockedUserID) {
    this.blockingUserID = blockingUserID;
    this.blockedUserID = blockedUserID;
  }
} 
