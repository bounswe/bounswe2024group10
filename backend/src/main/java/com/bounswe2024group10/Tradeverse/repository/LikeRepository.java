package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.model.Like;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {
    List<Like> findByUsernameAndPostIDIn(String username, List<Long> postIDs);
    Like findByUsernameAndPostID(String username, Long postID);
    Boolean existsByUsernameAndPostID(String username, Long postID);
    List<Like> findByUsername(String username);
    List<Like> findByPostID(Long postID);
    int countByPostID(Long postID);
}
 