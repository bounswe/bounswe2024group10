package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.model.Dislike;

@Repository
public interface DislikeRepository extends JpaRepository<Dislike, Long> {
    Dislike findByUsernameAndPostId(String username, Long postId);
    List<Dislike> findByUsername(String username);
    List<Dislike> findByPostId(Long postId);
}