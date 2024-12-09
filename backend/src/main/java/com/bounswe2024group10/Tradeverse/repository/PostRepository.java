package com.bounswe2024group10.Tradeverse.repository;

import com.bounswe2024group10.Tradeverse.model.Post;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    Post findBySubforumID(Long subforumID);
    List<Post> findByCreatedBy(String createdBy);
    List<Post> findAllBySubforumIDOrderByCreationDateDesc(Long subforumID);
    List<Post> findTop100ByOrderByCreationDateDesc();
}
