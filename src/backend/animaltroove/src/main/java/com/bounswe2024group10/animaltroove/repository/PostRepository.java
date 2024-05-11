package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.Post;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Long> {
    List<Post> findByUserID(Integer userID);
    List<Post> findTop10ByOrderByPostDate();
}