package com.bounswe2024group10.animaltroove.model;

import java.io.Serializable;

public class UserPost implements Serializable {
  
  private Long userID;
  private Long postID;

  public UserPost(Long userID, Long postID) {
    this.userID = userID;
    this.postID = postID;
  }
}
