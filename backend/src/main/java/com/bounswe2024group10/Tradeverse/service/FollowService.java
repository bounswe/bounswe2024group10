package com.bounswe2024group10.Tradeverse.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.follow.FollowUserRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.FollowUserResponse;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowersRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowersResponse;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowingsRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowingsResponse;
import com.bounswe2024group10.Tradeverse.dto.follow.UnfollowUserRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.UnfollowUserResponse;
import com.bounswe2024group10.Tradeverse.dto.user.GetUserResponse;
import com.bounswe2024group10.Tradeverse.model.Follow;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.FollowRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Service
public class FollowService {

    @Autowired
    private FollowRepository followRepository;

    @Autowired
    private UserRepository userRepository;

    public FollowUserResponse followUser(FollowUserRequest request) {
        User follower = userRepository.findByUsername(request.getFollowerUsername());
        User followed = userRepository.findByUsername(request.getFollowedUsername());

        if (follower == null || followed == null) {
            return new FollowUserResponse(false, "User does not exist");
        }

        Follow follow = new Follow(follower.getUsername(), followed.getUsername());
        followRepository.save(follow);
        return new FollowUserResponse(true, "Followed successfully");
    }

    public UnfollowUserResponse unfollowUser(UnfollowUserRequest request) {
        User follower = userRepository.findByUsername(request.getFollowerUsername());
        User followed = userRepository.findByUsername(request.getFollowedUsername());

        if (follower == null || followed == null) {
            return new UnfollowUserResponse(false, "User does not exist");
        }

        Follow follow = followRepository.findByFollowerUsernameAndFollowedUsername(follower.getUsername(), followed.getUsername());
        if (follow != null) {
            followRepository.delete(follow);
            return new UnfollowUserResponse(true, "Unfollowed successfully");
        } else {
            return new UnfollowUserResponse(false, "You are not following this user");
        }
    }

    public GetFollowingsResponse getFollowings(GetFollowingsRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return new GetFollowingsResponse(false, "User does not exist", null);
        }

        List<Follow> followings = followRepository.findByFollowerUsername(user.getUsername());
        List<User> followedUsers = followings.stream()
                .map(follow -> userRepository.findByUsername(follow.getFollowedUsername()))
                .collect(Collectors.toList());
        List<GetUserResponse> followedUserResponses = followedUsers.stream()
                .map(user1 -> new GetUserResponse(user1.getUsername(), user1.getName(), user1.getProfilePhoto()))
                .collect(Collectors.toList());

        return new GetFollowingsResponse(true, "Followings retrieved successfully", followedUserResponses);
    }

    public GetFollowersResponse getFollowers(GetFollowersRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return new GetFollowersResponse(false, "User does not exist", null);
        }

        List<Follow> followers = followRepository.findByFollowedUsername(user.getUsername());
        List<User> followerUsers = followers.stream()
                .map(follow -> userRepository.findByUsername(follow.getFollowerUsername()))
                .collect(Collectors.toList());
        List<GetUserResponse> followerUserResponces = followerUsers.stream()
                .map(user1 -> new GetUserResponse(user1.getUsername(), user1.getName(), user1.getProfilePhoto()))
                .collect(Collectors.toList());

        return new GetFollowersResponse(true, "Followers retrieved successfully", followerUserResponces);
    }
}
