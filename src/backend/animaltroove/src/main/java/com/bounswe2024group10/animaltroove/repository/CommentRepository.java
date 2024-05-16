package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.Comment;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {
    List<Comment> findByPostID(int postID);
    List<Comment> findByUsername(String username);
    Comment findByCommentID(int commentID);
}