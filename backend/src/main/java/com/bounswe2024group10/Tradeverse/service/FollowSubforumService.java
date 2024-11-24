package com.bounswe2024group10.Tradeverse.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.followSubforum.GeneralFollowSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GeneralFollowSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GetFollowingsRequest;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GetFollowingsResponse;
import com.bounswe2024group10.Tradeverse.extra.SubforumWSpecs;
import com.bounswe2024group10.Tradeverse.model.FollowSubforum;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.FollowSubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Service
public class FollowSubforumService {
    @Autowired
    private FollowSubforumRepository followSubforumRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    public GeneralFollowSubforumResponse followSubforum(GeneralFollowSubforumRequest request) {
        User follower = userRepository.findByUsername(request.getFollowerUsername());
        Post followedSubforum = postRepository.findById(request.getFollowedSubforumID()).orElse(null);

        if (follower == null) {
            return new GeneralFollowSubforumResponse(false, "User does not exist");
        }
        if (followedSubforum == null) {
            return new GeneralFollowSubforumResponse(false, "Subforum does not exist");
        }

        FollowSubforum follow = new FollowSubforum(request.getFollowerUsername(), request.getFollowedSubforumID());
        followSubforumRepository.save(follow);
        return new GeneralFollowSubforumResponse(true, "Followed successfully");
    }

    public GeneralFollowSubforumResponse unfollowSubforum(GeneralFollowSubforumRequest request) {
        User follower = userRepository.findByUsername(request.getFollowerUsername());
        Post followedSubforum = postRepository.findById(request.getFollowedSubforumID()).orElse(null);

        if (follower == null) {
            return new GeneralFollowSubforumResponse(false, "User does not exist");
        }
        if (followedSubforum == null) {
            return new GeneralFollowSubforumResponse(false, "Subforum does not exist");
        }
        FollowSubforum follow = followSubforumRepository.findByFollowerUsernameAndFollowedSubforumID(request.getFollowerUsername(), request.getFollowedSubforumID());
        if (follow == null) {
            return new GeneralFollowSubforumResponse(false, "User does not follow the subforum");
        }
        followSubforumRepository.delete(follow);
        return new GeneralFollowSubforumResponse(true, "Followed successfully");
    }

    public GetFollowingsResponse getFollowings(GetFollowingsRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return new GetFollowingsResponse(false, "User does not exist", null);
        }
        List<FollowSubforum> followings = followSubforumRepository.findByFollowerUsername(user.getUsername());
        List<SubforumWSpecs> followedSubforums = followings.stream()
                .map(follow -> new SubforumWSpecs(
                    follow.getFollowedSubforumID(), request.getUsername())).collect(Collectors.toList());


        return new GetFollowingsResponse(true, "Followings retrieved successfully", followedSubforums);
    }
}
