package com.bounswe2024group10.Tradeverse.repository;

import com.bounswe2024group10.Tradeverse.model.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {
    Follow findByFollowerUsernameAndFollowedUsername(String followerUsername, String followedUsername);
    Follow findByFollowerUsername(String followerUsername);
    Follow findByFollowedUsername(String followedUsername);
}
