package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.model.Dislike;

@Repository
public interface DislikeRepository extends JpaRepository<Dislike, Long> {
    List<Dislike> findByUsernameAndPostIDIn(String username, List<Long> postIDs);
    Dislike findByUsernameAndPostID(String username, Long postID);
    Boolean existsByUsernameAndPostID(String username, Long postID);
    List<Dislike> findByUsername(String username);
    List<Dislike> findByPostID(Long postID);
    int countByPostID(Long postID);
}