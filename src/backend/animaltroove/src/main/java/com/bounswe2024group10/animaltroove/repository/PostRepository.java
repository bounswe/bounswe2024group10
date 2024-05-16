package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PostRepository extends CrudRepository<Post, Integer> {
    Post findByPostID(Integer postID);
    Post findByUsername(String username);
    Post findByLocation(String location);
    Iterable<Post> findTop10ByOrderByPostIDDesc();
}
