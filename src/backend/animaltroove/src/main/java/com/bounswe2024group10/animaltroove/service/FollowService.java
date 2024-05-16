package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.FollowRequest;
import com.bounswe2024group10.animaltroove.dto.FollowResponse;
import com.bounswe2024group10.animaltroove.model.Following;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import com.bounswe2024group10.animaltroove.repository.FollowRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FollowService {

    @Autowired
    private FollowRepository followRepository;

    @Autowired
    private RegisteredUserRepository registeredUserRepository;

    public FollowResponse followUser(FollowRequest request) {
        if (registeredUserRepository.findByUserName(request.getFollowerUsername()) == null) {
            return new FollowResponse(false, "Follower user not found.");
        }
        if (registeredUserRepository.findByUserName(request.getFollowedUsername()) == null) {
            return new FollowResponse(false, "Followed user not found.");
        }
        if (FollowRepository.existsByFollwerUsernameAndFollowedUsername(request.getFollowerUsername(), request.getFollowedUsername())) {
            return new FollowResponse(false, "This follow already exists.");
        }
        try {
            FollowRepository.save(new Following(request.getFollowerUsername(), request.getFollowedUsername()));
        } catch (IllegalArgumentException e) {
            return new FollowResponse(false, "Invalid user data.");
        }
        return new FollowResponse(true, "Follow complete.");
    }
}
