package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.model.FollowSubforum;

@Repository
public interface FollowSubforumRepository extends JpaRepository<FollowSubforum, Long> {
    FollowSubforum findByFollowerUsernameAndFollowedSubforumID(String followerUsername, Long followedSubforumID);
    List<FollowSubforum> findByFollowerUsername(String followerUsername);
    List<FollowSubforum> findByFollowedSubforumID(Long followedSubforumID);
    Long countByFollowedSubforumID(Long followedSubforumID);
}
