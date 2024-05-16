package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.Post;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PostRepository extends CrudRepository<Post, Integer> {
    Post findByPostID(Integer postID);
    List<Post> findByUsername(String username);
    List<Post> findByLocation(String location);
    List<Post> findTop10ByOrderByPostIDDesc();
}
