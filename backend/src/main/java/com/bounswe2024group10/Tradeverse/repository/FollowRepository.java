package com.bounswe2024group10.Tradeverse.repository;

import com.bounswe2024group10.Tradeverse.model.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowRepository extends JpaRepository<Follow, Long> {
    Follow findByFollowerUsernameAndFollowedUsername(String followerUsername, String followedUsername);
    List<Follow> findByFollowerUsername(String followerUsername);
    List<Follow> findByFollowedUsername(String followedUsername);
    int countByFollowedUsername(String followedUsername);
    int countByFollowerUsername(String followerUsername);
}
