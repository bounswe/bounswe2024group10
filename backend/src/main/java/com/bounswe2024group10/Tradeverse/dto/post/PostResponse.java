package com.bounswe2024group10.Tradeverse.dto.post;

import java.time.LocalDateTime;
import java.util.List;

import com.bounswe2024group10.Tradeverse.dto.user.UserResponse;
import com.bounswe2024group10.Tradeverse.model.Content;
import com.bounswe2024group10.Tradeverse.model.Subforum;

public class PostResponse {

    private Long id;
    private String title;
    private List<Content> content;
    private String createdBy;
    private LocalDateTime creationDate;
    private int likeCount;
    private int dislikeCount;
    private int commentCount;
    private UserResponse author;
    private Subforum subforum;

    public PostResponse(Long id, String title, List<Content> content, String createdBy,
            LocalDateTime creationDate, int likeCount, int dislikeCount,
            int commentCount, UserResponse author, Subforum subforum) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
        this.creationDate = creationDate;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.commentCount = commentCount;
        this.author = author;
        this.subforum = subforum;
    }

    public PostResponse(Long id, String title, List<Content> content, String createdBy,
            LocalDateTime creationDate, int likeCount, int dislikeCount,
            int commentCount, String userPhoto, String authorUserName, Subforum subforum) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
        this.creationDate = creationDate;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.commentCount = commentCount;
        this.author = new UserResponse();
        this.author.setUserPhoto(userPhoto);
        this.author.setName(authorUserName);
        this.subforum = subforum;
    }

    public PostResponse() {
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

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(int likeCount) {
        this.likeCount = likeCount;
    }

    public int getDislikeCount() {
        return dislikeCount;
    }

    public void setDislikeCount(int dislikeCount) {
        this.dislikeCount = dislikeCount;
    }

    public int getCommentCount() {
        return commentCount;
    }

    public void setCommentCount(int commentCount) {
        this.commentCount = commentCount;
    }

    public UserResponse getAuthor() {
        return author;
    }

    public void setAuthor(UserResponse author) {
        this.author = author;
    }

    public Subforum getSubforum() {
        return subforum;
    }

    public void setSubforum(Subforum subforum) {
        this.subforum = subforum;
    }
}
