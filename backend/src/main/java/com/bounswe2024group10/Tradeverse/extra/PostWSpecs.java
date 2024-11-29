package com.bounswe2024group10.Tradeverse.extra;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;

public class PostWSpecs {

    private Long id;
    private String title;
    private Long parentID;
    private List<HashMap<String, String>> content;
    private Long nofLikes;
    private Long nofDislikes;
    private Boolean likable;
    private LocalDateTime creationDate;
    private LocalDateTime lastEditDate;
    private LocalDateTime lastUpdateDate;
    private PostType postType;
    private Long nofComments;

    private Boolean isLiked;
    private Boolean isDisliked;

    private Post parentSubforum;

    private User author;
    List<PostWSpecs> comments;

    @Override
    public String toString() {
        return "PostWSpecs{"
                + "id=" + id
                + ", title='" + title + '\''
                + ", parentID=" + parentID
                + ", content=" + content
                + ", nofLikes=" + nofLikes
                + ", nofDislikes=" + nofDislikes
                + ", likable=" + likable
                + ", creationDate=" + creationDate
                + ", lastEditDate=" + lastEditDate
                + ", lastUpdateDate=" + lastUpdateDate
                + ", postType=" + postType
                + ", nofComments=" + nofComments
                + ", isLiked=" + isLiked
                + ", isDisliked=" + isDisliked
                + ", parentSubforum=" + (parentSubforum != null ? parentSubforum.getId() : null)
                + ", author=" + (author != null ? author.getUsername() : null)
                + ", comments=" + comments.stream().map(PostWSpecs::toString).collect(Collectors.joining(", "))
                + '}';
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

    public Boolean getLikable() {
        return likable;
    }

    public void setLikable(Boolean likable) {
        this.likable = likable;
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

    public Long getNofComments() {
        return nofComments;
    }

    public void setNofComments(Long nofComments) {
        this.nofComments = nofComments;
    }

    public Boolean getIsLiked() {
        return isLiked;
    }

    public void setIsLiked(Boolean isLiked) {
        this.isLiked = isLiked;
    }

    public Boolean getIsDisliked() {
        return isDisliked;
    }

    public void setIsDisliked(Boolean isDisliked) {
        this.isDisliked = isDisliked;
    }

    public Post getParentSubforum() {
        return parentSubforum;
    }

    public void setParentSubforum(Post parentSubforum) {
        this.parentSubforum = parentSubforum;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public List<PostWSpecs> getComments() {
        return comments;
    }

    public void setComments(List<PostWSpecs> comments) {
        this.comments = comments;
    }
}
