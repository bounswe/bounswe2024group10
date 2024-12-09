package com.bounswe2024group10.Tradeverse.dto.comment;

import com.bounswe2024group10.Tradeverse.model.Content;
import java.util.List;

public class CreateCommentRequest {
    private List<Content> content;
    private Long postID;
    private Long parentCommentID;

    public CreateCommentRequest() {
    }

    public CreateCommentRequest(List<Content> content, Long postID, Long parentCommentID) {
        this.content = content;
        this.postID = postID;
        this.parentCommentID = parentCommentID;
    }

    public List<Content> getContent() {
        return content;
    }

    public void setContent(List<Content> content) {
        this.content = content;
    }

    public Long getPostID() {
        return postID;
    }

    public void setPostID(Long postID) {
        this.postID = postID;
    }

    public Long getParentCommentID() {
        return parentCommentID;
    }

    public void setParentCommentID(Long parentCommentID) {
        this.parentCommentID = parentCommentID;
    }
} 