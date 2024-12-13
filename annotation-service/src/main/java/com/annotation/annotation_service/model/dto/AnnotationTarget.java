package com.annotation.annotation_service.model.dto;

public class AnnotationTarget {
    private String type = "SpecificResource"; // Always this value
    private TextPositionSelector selector;

    private Long postId;
    private Long commentId;

    // Constructor
    public AnnotationTarget(TextPositionSelector selector) {
        this.selector = selector;
    }

    // Getters and Setters
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public TextPositionSelector getSelector() {
        return selector;
    }

    public void setSelector(TextPositionSelector selector) {
        this.selector = selector;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }
}
