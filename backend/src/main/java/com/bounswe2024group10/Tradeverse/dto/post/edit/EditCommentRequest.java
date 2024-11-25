package com.bounswe2024group10.Tradeverse.dto.post.edit;

import java.util.HashMap;
import java.util.List;

public class EditCommentRequest {

    private String username;
    private Long postID;
    private List<HashMap<String, String>> content;

    public EditCommentRequest(String username, List<HashMap<String, String>> content, Long postID) {
        this.username = username;
        this.content = content;
        this.postID = postID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getPostID() {
        return postID;
    }

    public void setPostID(Long postID) {
        this.postID = postID;
    }

    public List<HashMap<String, String>> getContent() {
        return content;
    }

    public void setContent(List<HashMap<String, String>> content) {
        this.content = content;
    }
}
