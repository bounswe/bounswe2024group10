package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.Disliked;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DislikedRepository extends CrudRepository<Disliked, Integer> {
    List<Disliked> findByUsername(String username);
    List<Disliked> findByPostID(Integer postID);
    Disliked findByUsernameAndPostID(String username, Integer postID);
    boolean existsByUsernameAndPostID(String username, Integer postID);
}
