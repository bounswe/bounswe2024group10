package com.bounswe2024group10.Tradeverse.model;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.ElementCollection;

@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @Column(nullable = true)
    private List<Content> content;

    @Column(nullable = false)
    private String createdBy;

    @Column(nullable = false)
    private Long postID;

    @Column(nullable = true)
    private Long parentCommentID;

    @Column(nullable = false)
    private LocalDateTime creationDate;

    @Column(nullable = true)
    private LocalDateTime lastEditDate;

    public Comment() {
    }

    public Comment(String createdBy, Long postID, Long parentCommentID, List<Content> content, LocalDateTime creationDate, LocalDateTime lastEditDate) {
        this.createdBy = createdBy;
        this.postID = postID;
        this.parentCommentID = parentCommentID;
        this.content = content;
        this.creationDate = creationDate;
        this.lastEditDate = lastEditDate;
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

    public Long getCommentID() {
        return parentCommentID;
    }

    public void setCommentID(Long parentCommentID) {
        this.parentCommentID = parentCommentID;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDateTime getLastEditDate() {
        return lastEditDate;
    }

    public void setLastEditDate(LocalDateTime lastEditDate) {
        this.lastEditDate = lastEditDate;
    }
}
