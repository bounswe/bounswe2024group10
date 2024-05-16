package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.Liked;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LikedRepository extends CrudRepository<Liked, Integer> {
    List<Liked> findByUsername(String username);
    List<Liked> findByPostID(Integer postID);
    Liked findByUsernameAndPostID(String username, Integer postID);
    boolean existsByUsernameAndPostID(String username, Integer postID);
}
