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
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @ElementCollection
    @Column(nullable = true)
    private List<Content> content;

    @Column(nullable = false)
    private String createdBy;

    @Column(nullable = false)
    private Long subforumID;

    @Column(nullable = false)
    private int viewCount;

    @Column(nullable = false)
    private LocalDateTime creationDate;

    @Column(nullable = true)
    private LocalDateTime lastEditDate;

    public Post() {
    }

    public Post(String title, List<Content> content, String createdBy, Long subforumID, int viewCount, LocalDateTime creationDate, LocalDateTime lastEditDate) {
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
        this.subforumID = subforumID;
        this.viewCount = viewCount;
        this.creationDate = creationDate;
        this.lastEditDate = lastEditDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Long getSubforumID() {
        return subforumID;
    }

    public void setSubforumID(Long subforumID) {
        this.subforumID = subforumID;
    }

    public int getViewCount() {
        return viewCount;
    }

    public void setViewCount(int viewCount) {
        this.viewCount = viewCount;
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
