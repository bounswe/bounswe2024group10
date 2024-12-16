package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.model.Content;
import com.bounswe2024group10.Tradeverse.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByCreatedBy(String createdBy);

    List<Post> findBySubforumID(Long subforumID);

    List<Post> findAllBySubforumIDOrderByCreationDateDesc(Long subforumID);

    List<Post> findTop100ByOrderByCreationDateDesc();

    List<Post> findTop100ByCreatedByOrderByCreationDateDesc(String createdBy);

    int countByCreatedBy(String createdBy);

    int countBySubforumID(Long subforumID);

    List<Post> findByTitleContaining(String keyword);

    @Query("SELECT DISTINCT c FROM Post p JOIN p.content c WHERE c.type = 'tag' AND c.value LIKE %:keyword%")
    List<Content> findTagsByValueContaining(@Param("keyword") String keyword);

    @Query("SELECT DISTINCT p FROM Post p JOIN p.content c WHERE (c.type = 'text' OR c.type = 'tag') AND c.value LIKE %:keyword% OR p.title LIKE %:keyword%")
    List<Post> findByTextContaining(@Param("keyword") String keyword);

    @Query("SELECT DISTINCT p FROM Post p JOIN p.content c WHERE c.type = 'tag' AND c.value = :tag")
    List<Post> findByTag(@Param("tag") String tag);
}
