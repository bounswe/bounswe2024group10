package com.bounswe2024group10.Tradeverse.model;

import jakarta.persistence.*;

@Entity
@Table(name = "post_assets")
public class PostAsset {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long postId;

    @Column(nullable = false)
    private Long assetId;

    public PostAsset() {}

    public PostAsset(Long postId, Long assetId) {
        this.postId = postId;
        this.assetId = assetId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public Long getAssetId() {
        return assetId;
    }

    public void setAssetId(Long assetId) {
        this.assetId = assetId;
    }
} 