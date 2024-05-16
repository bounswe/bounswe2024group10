package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.Bookmarked;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookmarkedRepository extends CrudRepository<Bookmarked, Integer> {
    Bookmarked findByUsernameAndPostID(String username, int postID);
    Bookmarked findByUsername(String username);
    boolean existsByUsernameAndPostID(String username, int postID);
}