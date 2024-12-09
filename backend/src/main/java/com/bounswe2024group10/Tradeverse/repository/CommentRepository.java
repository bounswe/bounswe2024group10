package com.bounswe2024group10.Tradeverse.repository;

import com.bounswe2024group10.Tradeverse.model.Comment;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByParentCommentID(Long parentCommentID);
    List<Comment> findByPostID(Long postID);
    List<Comment> findByCreatedBy(String createdBy);
    int countByPostID(Long postID);
} 