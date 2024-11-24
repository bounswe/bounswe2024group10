package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.follow.*;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GeneralFollowSubforumRequest;
import com.bounswe2024group10.Tradeverse.model.Follow;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.FollowRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowSubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FollowSubforumService {
    @Autowired
    private FollowSubforumRepository followRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    public FollowUserResponse followUser(GeneralFollowSubforumRequest request) {
        User follower = userRepository.findByUsername(request.getFollowerUsername());
        User followedSubforum = postRepository.findByPostID(request.getFollowedUsername());

        if (follower == null) {
            return new FollowUserResponse(false, "User does not exist");
        }

        Follow follow = new Follow(follower.getUsername(), followed.getUsername());
        followRepository.save(follow);
        return new FollowUserResponse(true, "Followed successfully");
    }

    public UnfollowUserResponse unfollowUser(GeneralFollowSubforumRequest request) {
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
        List<String> followedUsernames = followings.stream()
                .map(Follow::getFollowedUsername)
                .collect(Collectors.toList());

        return new GetFollowingsResponse(true, "Followings retrieved successfully", followedUsernames);
    }

    public GetFollowersResponse getFollowers(GetFollowersRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return new GetFollowersResponse(false, "User does not exist", null);
        }

        List<Follow> followers = followRepository.findByFollowedUsername(user.getUsername());
        List<String> followerUsernames = followers.stream()
                .map(Follow::getFollowerUsername)
                .collect(Collectors.toList());

        return new GetFollowersResponse(true, "Followers retrieved successfully", followerUsernames);
    }
}
