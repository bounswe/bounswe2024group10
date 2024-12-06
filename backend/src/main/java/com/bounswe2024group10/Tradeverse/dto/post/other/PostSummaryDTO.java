package com.bounswe2024group10.Tradeverse.dto.post.other;
import java.time.LocalDateTime;
public class PostSummaryDTO
{
    private Long postID;
    private String title;
    private String content;
    private String creatorUsername;
    private String creatorProfilePhoto;
    private Long nofLikes;
    private Long nofDislikes;
    private LocalDateTime creationDate;
    private Long nofComments;

    public PostSummaryDTO(Long postID, String title, String content, String creatorUsername, String creatorProfilePhoto, Long nofLikes,Long nofDislikes, LocalDateTime creationDate, Long nofComments) {
        this.postID = postID;
        this.title = title;
        this.content = content;
        this.creatorUsername = creatorUsername;
        this.creatorProfilePhoto = creatorProfilePhoto;
        this.nofLikes = nofLikes;
        this.nofDislikes = nofDislikes;
        this.creationDate = creationDate; // Ensure this is LocalDateTime
        this.nofComments = nofComments;
    }

    // Getters and setters
    public Long getPostID() {
        return postID;
    }

    public void setPostID(Long postID) {
        this.postID = postID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCreatorUsername() {
        return creatorUsername;
    }

    public void setCreatorUsername(String creatorUsername) {
        this.creatorUsername = creatorUsername;
    }

    public String getCreatorProfilePhoto() {
        return creatorProfilePhoto;
    }

    public void setCreatorProfilePhoto(String creatorProfilePhoto) {
        this.creatorProfilePhoto = creatorProfilePhoto;
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

    public Long getNofComments() {
        return nofComments;
    }

    public void setNofComments(Long nofComments) {
        this.nofComments = nofComments;
    }
}
