package com.bounswe2024group10.Tradeverse.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.post.GetPostResponse;
import com.bounswe2024group10.Tradeverse.dto.user.GetProfileResponse;
import com.bounswe2024group10.Tradeverse.dto.user.GetUserDetailsResponse;
import com.bounswe2024group10.Tradeverse.dto.user.SetUserDetailsRequest;
import com.bounswe2024group10.Tradeverse.dto.user.SetUserDetailsResponse;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.CommentRepository;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private FollowRepository followRepository;

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private DislikeRepository dislikeRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostService postService;

    public GetUserDetailsResponse getUserDetails(String username) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            return new GetUserDetailsResponse(user.getEmail(), user.getUsername(), user.getName(), user.getProfilePhoto(), user.getTag(), user.getBio(), user.getIsAdmin());
        }
        return null;
    }

    public SetUserDetailsResponse setUserDetails(SetUserDetailsRequest userDetailsRequest, String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new SetUserDetailsResponse(false, "User not found");
        }
        if (userDetailsRequest.getEmail() != null) {
            user.setEmail(userDetailsRequest.getEmail());
        }
        if (userDetailsRequest.getProfilePhoto() != null) {
            try {
                File file = new File("/images/" + UUID.randomUUID() + ".jpg");
                file.createNewFile();
                FileOutputStream fos = new FileOutputStream(file);
                fos.write(Base64.getDecoder().decode(userDetailsRequest.getProfilePhoto()));
                fos.close();
                user.setProfilePhoto(file.getAbsolutePath());
            } catch (IOException e) {
                e.printStackTrace();
                return new SetUserDetailsResponse(false, "Error while saving profile photo");
            }
        }
        if (userDetailsRequest.getBio() != null) {
            user.setBio(userDetailsRequest.getBio());
        }
        if (userDetailsRequest.getTag() != null) {
            user.setTag(userDetailsRequest.getTag());
        }
        userRepository.save(user);
        return new SetUserDetailsResponse(true, "User details updated successfully");
    }

    public GetProfileResponse getProfile(String username, String requesterUsername) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new GetProfileResponse(false, "User not found");
        }
        int postCount = postRepository.countByCreatedBy(username);
        int followerCount = followRepository.countByFollowedUsername(username);
        boolean isFollowing = followRepository.findByFollowerUsernameAndFollowedUsername(requesterUsername, username) != null;
        List<GetPostResponse> recentPostResponses = new ArrayList<>();
        List<Post> recentPosts = postRepository.findTop100ByCreatedByOrderByCreationDateDesc(username);
        for (Post post : recentPosts) {
            recentPostResponses.add(postService.convertToGetPostResponse(post, requesterUsername));
        }
        Map<Long, Integer> postScoreMap = new HashMap<>();
        for (Post post : recentPosts) {
            int score = 0;
            score += likeRepository.countByPostID(post.getId());
            score += dislikeRepository.countByPostID(post.getId());
            score += commentRepository.countByPostID(post.getId());
            postScoreMap.put(post.getId(), score);
        }
        List<Post> sortedPosts = recentPosts.stream()
                .sorted((p1, p2) -> postScoreMap.get(p2.getId()) - postScoreMap.get(p1.getId()))
                .collect(Collectors.toList());
        List<GetPostResponse> popularPostResponses = new ArrayList<>();
        for (Post post : sortedPosts) {
            popularPostResponses.add(postService.convertToGetPostResponse(post, requesterUsername));
        }
        return new GetProfileResponse(user.getUsername(), user.getName(), user.getProfilePhoto(), postCount, followerCount, isFollowing, popularPostResponses, recentPostResponses);
    }
}
