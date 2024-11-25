package com.bounswe2024group10.Tradeverse.extra;

import java.util.List;

public class SubforumWSpecs {

    private Long id;
    private String title;
    private Long num_of_posts;
    private Long num_of_followers;
    private boolean is_followed;
    private List<PostWSpecs> posts;

    // public SubforumWSpecs(Long id, String username) {
    //     this.id = id;
    //     Post post = postRepository.findById(id).get();
    //     this.title = post.getTitle();
    //     this.num_of_posts = postRepository.countByParentID(id);
    //     this.num_of_followers = followSubforumRepository.countByFollowedSubforumID(id);
    //     this.is_followed = followSubforumRepository.findByFollowerUsernameAndFollowedSubforumID(username, id) != null;
    //     this.posts = postRepository.findByParentID(id).stream().map(p -> new PostWSpecs(p, username)).collect(Collectors.toList());
    // }
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

    public Long getNum_of_posts() {
        return num_of_posts;
    }

    public void setNum_of_posts(Long num_of_posts) {
        this.num_of_posts = num_of_posts;
    }

    public Long getNum_of_followers() {
        return num_of_followers;
    }

    public void setNum_of_followers(Long num_of_followers) {
        this.num_of_followers = num_of_followers;
    }

    public boolean isIs_followed() {
        return is_followed;
    }

    public void setIs_followed(boolean is_followed) {
        this.is_followed = is_followed;
    }

    public List<PostWSpecs> getPosts() {
        return posts;
    }

    public void setPosts(List<PostWSpecs> posts) {
        this.posts = posts;
    }
}
