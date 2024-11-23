package com.bounswe2024group10.Tradeverse.model;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

import com.bounswe2024group10.Tradeverse.extra.ListHashMapConverter;
import com.bounswe2024group10.Tradeverse.extra.PostType;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "forums")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    @Column(nullable = true, columnDefinition = "TEXT")
    private String title;

    @Column(nullable = true)
    private Long parentID;

    @Convert(converter = ListHashMapConverter.class)
    @Column(nullable = true, columnDefinition = "TEXT")
    private List<HashMap<String, String>> content;

    @Column(nullable = false)
    private Long nofLikes;

    @Column(nullable = false)
    private Long nofDislikes;

    @Column(nullable = false)
    private Boolean likable;

    @Column(nullable = false)
    private LocalDateTime creationDate;

    @Column(nullable = false)
    private LocalDateTime lastEditDate;

    @Column(nullable = false)
    private LocalDateTime lastUpdateDate;

    @Column(nullable = false)
    private PostType postType;

    public Post() {
    }

    public Post(String username, String title, Long parentID, List<HashMap<String, String>> content, LocalDateTime creationDate, PostType postType) {
        this.username = username;
        this.title = title;
        this.parentID = parentID;
        this.content = content;
        this.likable = postType == PostType.COMMENT || postType == PostType.POST;
        this.creationDate = creationDate;
        this.lastEditDate = creationDate;
        this.lastUpdateDate = creationDate;
        this.postType = postType;
        this.nofLikes = 0L;
        this.nofDislikes = 0L;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public Long getParentID() {
        return parentID;
    }

    public void setParentID(Long parentID) {
        this.parentID = parentID;
    }

    public List<HashMap<String, String>> getContent() {
        return content;
    }

    public void setContent(List<HashMap<String, String>> content) {
        this.content = content;
    }

    public Boolean getLikable() {
        return likable;
    }

    public void setLikable(Boolean likable) {
        this.likable = likable;
    }

    public Long getNofLikes() {
        return nofLikes;
    }

    public void setNofLikes(Long nofLikes) {
        this.nofLikes = nofLikes;
    }

    public Long getNofDislikes() {
        return nofDislikes;
    }

    public void setNofDislikes(Long nofDislikes) {
        this.nofDislikes = nofDislikes;
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

    public LocalDateTime getLastUpdateDate() {
        return lastUpdateDate;
    }

    public void setLastUpdateDate(LocalDateTime lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
    }

    public PostType getPostType() {
        return postType;
    }

    public void setPostType(PostType postType) {
        this.postType = postType;
    }
}
