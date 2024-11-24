package com.bounswe2024group10.Tradeverse.extra;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Service
public class PostWSpecs {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private DislikeRepository dislikeRepository;

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

    private PostWSpecs parentSubforum;

    private User author;
    List<PostWSpecs> comments;

    public PostWSpecs(Post post, String username) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.parentID = post.getParentID();
        this.content = post.getContent();
        this.nofLikes = post.getNofLikes();
        this.nofDislikes = post.getNofDislikes();
        this.likable = post.getLikable();
        this.creationDate = post.getCreationDate();
        this.lastEditDate = post.getLastEditDate();
        this.lastUpdateDate = post.getLastUpdateDate();
        this.postType = post.getPostType();

        this.nofComments = postRepository.countByParentID(post.getId());
        this.isLiked = likeRepository.existsByUsernameAndPostID(username, post.getId());
        this.isDisliked = dislikeRepository.existsByUsernameAndPostID(username, post.getId());
        switch (postType) {
            case SUBFORUM:
                this.parentSubforum = this;
                break;
            case FORUM:
                this.parentSubforum = null;
                break;
            default:
                Post parent = postRepository.findById(post.getParentID()).get();
                while (parent.getPostType() != PostType.SUBFORUM) {
                    parent = postRepository.findById(parent.getParentID()).get();
                }
                this.parentSubforum = new PostWSpecs(parent, username);
        }
        this.author = userRepository.findByUsername(post.getUsername());
        this.comments = postRepository.findByParentID(post.getId()).stream().map(p -> new PostWSpecs(p, username)).toList();
    }

    public PostWSpecs(Long postID, String username) {
        Post post = postRepository.findById(postID).get();
        this.id = post.getId();
        this.title = post.getTitle();
        this.parentID = post.getParentID();
        this.content = post.getContent();
        this.nofLikes = post.getNofLikes();
        this.nofDislikes = post.getNofDislikes();
        this.likable = post.getLikable();
        this.creationDate = post.getCreationDate();
        this.lastEditDate = post.getLastEditDate();
        this.lastUpdateDate = post.getLastUpdateDate();
        this.postType = post.getPostType();

        this.nofComments = postRepository.countByParentID(post.getId());
        this.isLiked = likeRepository.existsByUsernameAndPostID(username, post.getId());
        this.isDisliked = dislikeRepository.existsByUsernameAndPostID(username, post.getId());
        switch (postType) {
            case SUBFORUM:
                this.parentSubforum = this;
                break;
            case FORUM:
                this.parentSubforum = null;
                break;
            default:
                Post parent = postRepository.findById(post.getParentID()).get();
                while (parent.getPostType() != PostType.SUBFORUM) {
                    parent = postRepository.findById(parent.getParentID()).get();
                }
                this.parentSubforum = new PostWSpecs(parent, username);
        }
        this.author = userRepository.findByUsername(post.getUsername());
        this.comments = postRepository.findByParentID(post.getId()).stream().map(p -> new PostWSpecs(p, username)).toList();
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

    public PostWSpecs getParentSubforum() {
        return parentSubforum;
    }

    public void setParentSubforum(PostWSpecs parentSubforum) {
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
