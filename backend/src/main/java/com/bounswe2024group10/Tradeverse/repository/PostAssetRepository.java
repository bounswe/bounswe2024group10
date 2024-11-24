package com.bounswe2024group10.Tradeverse.repository;

import com.bounswe2024group10.Tradeverse.model.PostAsset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostAssetRepository extends JpaRepository<PostAsset, Long> {
    List<PostAsset> findByPostId(Long postId);
    List<PostAsset> findByAssetId(Long assetId);
    void deleteByPostId(Long postId);
    void deleteByAssetId(Long assetId);
    boolean existsByPostIdAndAssetId(Long postId, Long assetId);
} 