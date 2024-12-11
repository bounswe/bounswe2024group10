package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.model.FollowSubforum;

@Repository
public interface FollowSubforumRepository extends JpaRepository<FollowSubforum, Long> {

    FollowSubforum findByFollowerUsernameAndSubforumID(String followerUsername, Long subforumID);

    boolean existsByFollowerUsernameAndSubforumID(String followerUsername, Long subforumID);

    List<FollowSubforum> findByFollowerUsername(String followerUsername);

    List<FollowSubforum> findBySubforumID(Long subforumID);

    int countBySubforumID(Long subforumID);

    int countByFollowerUsername(String followerUsername);
}
