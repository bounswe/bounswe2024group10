package com.bounswe2024group10.animaltroove.repository;

import org.springframework.data.jpa.repository.Query;
import com.bounswe2024group10.animaltroove.model.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {
    Comment findByCommentID(long commentID);
}
