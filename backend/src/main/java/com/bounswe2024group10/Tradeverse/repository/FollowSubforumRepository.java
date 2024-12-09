package com.bounswe2024group10.Tradeverse.repository;

import com.bounswe2024group10.Tradeverse.model.FollowSubforum;
import com.bounswe2024group10.Tradeverse.model.Subforum;
import com.bounswe2024group10.Tradeverse.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowSubforumRepository extends JpaRepository<FollowSubforum, Long> {
    FollowSubforum findByFollowerUsernameAndSubforumID(String followerUsername, Long subforumID);
    List<FollowSubforum> findByFollowerUsername(String followerUsername);
    List<FollowSubforum> findBySubforumID(Long subforumID);
    int countBySubforumID(Long subforumID);
    int countByFollowerUsername(String followerUsername);
}
