package com.bounswe2024group10.Tradeverse.dto.post;

import java.time.LocalDateTime;
import java.util.List;

import com.bounswe2024group10.Tradeverse.dto.user.UserResponse;
import com.bounswe2024group10.Tradeverse.model.Content;
import com.bounswe2024group10.Tradeverse.model.Subforum;

public class GetPostResponse {

    private Long id;
    private String title;
    private List<Content> content;
    private String createdBy;
    private LocalDateTime creationDate;
    private int likeCount;
    private int dislikeCount;
    private int commentCount;
    private boolean isLikedByUser;
    private boolean isDislikedByUser;
    private UserResponse author;
    private Subforum subforum;

    public GetPostResponse(Long id, String title, List<Content> content, String createdBy,
            LocalDateTime creationDate, int likeCount, int dislikeCount,
            int commentCount, boolean isLikedByUser, boolean isDislikedByUser) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
        this.creationDate = creationDate;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.commentCount = commentCount;
        this.isLikedByUser = isLikedByUser;
        this.isDislikedByUser = isDislikedByUser;
    }

    public GetPostResponse(Long id, String title, List<Content> content, String createdBy,
            LocalDateTime creationDate, int likeCount, int dislikeCount,
            int commentCount, boolean isLikedByUser, boolean isDislikedByUser, String userPhoto, String authorUserName, Subforum subforum) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
        this.creationDate = creationDate;
        this.likeCount = likeCount;
        this.dislikeCount = dislikeCount;
        this.commentCount = commentCount;
        this.isLikedByUser = isLikedByUser;
        this.isDislikedByUser = isDislikedByUser;
        this.author.setUserPhoto(userPhoto);
        this.author.setName(authorUserName);
        this.subforum = subforum;
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

    public boolean getIsLikedByUser() {
        return isLikedByUser;
    }

    public void setIsLikedByUser(boolean isLikedByUser) {
        this.isLikedByUser = isLikedByUser;
    }

    public boolean getIsDislikedByUser() {
        return isDislikedByUser;
    }

    public void setIsDislikedByUser(boolean isDislikedByUser) {
        this.isDislikedByUser = isDislikedByUser;
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
