package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.model.Like;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {
    Like findByUsernameAndPostID(String username, Long postID);
    List<Like> findByUsername(String username);
    List<Like> findByPostID(Long postID);
}
 