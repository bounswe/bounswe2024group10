package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByUsername(String username);
    List<Post> findByParentID(Long parentID);
    @Query("SELECT p FROM Post p WHERE p.title LIKE %:keyword% ORDER BY p.lastEditDate DESC")
    List<Post> findByTitleContaining(@Param("keyword") String keyword, Pageable pageable);
}
    
