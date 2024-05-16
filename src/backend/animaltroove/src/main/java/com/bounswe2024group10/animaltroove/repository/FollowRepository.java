package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.Following;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowRepository extends CrudRepository<String, String> {
    List<Following> findByFollowerUsername(String followerUsername);
    List<Following> findByFollowedUsername(String followedUsername);
    Following findByFollowerUsernameAndFollowedUsername(String followerUsername, String followedUsername);
    boolean existsByFollwerUsernameAndFollowedUsername(String followerUsername, String followedUsername);
}
