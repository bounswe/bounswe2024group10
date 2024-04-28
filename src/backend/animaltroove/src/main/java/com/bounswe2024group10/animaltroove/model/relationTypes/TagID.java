package com.bounswe2024group10.animaltroove.model;

import java.io.Serializable;

public class TagID implements Serializable {
  private Long postID;
  private String tag;

  public Tag(Long postID, String tag) {
    this.postID = postID;
    this.tag = tag;
  }
} 
