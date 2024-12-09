package com.bounswe2024group10.Tradeverse.dto.comment;

import com.bounswe2024group10.Tradeverse.model.Content;
import java.time.LocalDateTime;
import java.util.List;

public class GetCommentResponse {
    private Long id;
    private List<Content> content;
    private String createdBy;
    private Long postID;
    private Long parentCommentID;
    private LocalDateTime creationDate;
    private List<GetCommentResponse> replies;

    public GetCommentResponse(Long id, List<Content> content, String createdBy, 
                            Long postID, Long parentCommentID, LocalDateTime creationDate,
                            List<GetCommentResponse> replies) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.postID = postID;
        this.parentCommentID = parentCommentID;
        this.creationDate = creationDate;
        this.replies = replies;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Content> getContent() {
        return content;
    }

    public void setContent(List<Content> content) {
        this.content = content;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
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

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public List<GetCommentResponse> getReplies() {
        return replies;
    }

    public void setReplies(List<GetCommentResponse> replies) {
        this.replies = replies;
    }
} 