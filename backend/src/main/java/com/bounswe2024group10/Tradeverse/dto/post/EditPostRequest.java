package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.HashMap;
import java.util.List;

public class EditPostRequest {
    private String username;
    private Long postID;
    private String title;
    private List<HashMap<String, String>> content;

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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<HashMap<String, String>> getContent() {
        return content;
    }

    public void setContent(List<HashMap<String, String>> content) {
        this.content = content;
    }

}
