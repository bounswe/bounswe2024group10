package com.bounswe2024group10.Tradeverse.dto.post;

import com.bounswe2024group10.Tradeverse.model.Content;
import java.util.List;

public class CreatePostRequest {
    private String username;
    private String title;
    private List<Content> content;
    private Long subforumID;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Content> getContent() {
        return content;
    }

    public void setContent(List<Content> content) {
        this.content = content;
    }

    public Long getSubforumID() {
        return subforumID;
    }

    public void setSubforumID(Long subforumID) {
        this.subforumID = subforumID;
    }
}
