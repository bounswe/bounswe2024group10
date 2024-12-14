package com.annotation.annotation_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.annotation.annotation_service.model.dto.Annotation;

import java.util.List;

public interface AnnotationRepository extends JpaRepository<Annotation, Long> {
    @Query("SELECT a FROM Annotation a WHERE a.postId = :postId OR a.commentId IN :commentIds")
    List<Annotation> findByPostIdOrCommentIds(@Param("postId") Long postId, @Param("commentIds") List<Long> commentIds);
}