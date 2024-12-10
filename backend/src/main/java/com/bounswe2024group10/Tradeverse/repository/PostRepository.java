package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByCreatedBy(String createdBy);

    List<Post> findBySubforumID(Long subforumID);

    List<Post> findAllBySubforumIDOrderByCreationDateDesc(Long subforumID);

    List<Post> findTop100ByOrderByCreationDateDesc();

    int countByCreatedBy(String createdBy);

    int countBySubforumID(Long subforumID);
}
