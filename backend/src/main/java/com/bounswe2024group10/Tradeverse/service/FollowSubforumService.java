package com.bounswe2024group10.Tradeverse.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.followSubforum.GeneralFollowSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GeneralFollowSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GetFollowingsRequest;
import com.bounswe2024group10.Tradeverse.dto.followSubforum.GetFollowingsResponse;
import com.bounswe2024group10.Tradeverse.extra.PostType;
import com.bounswe2024group10.Tradeverse.extra.PostWSpecs;
import com.bounswe2024group10.Tradeverse.extra.SubforumWSpecs;
import com.bounswe2024group10.Tradeverse.model.FollowSubforum;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowSubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
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

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private DislikeRepository dislikeRepository;

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
                .map(follow -> subforum2SubforumWSpecs(
                follow.getFollowedSubforumID(), request.getUsername())).collect(Collectors.toList());

        return new GetFollowingsResponse(true, "Followings retrieved successfully", followedSubforums);
    }

    public PostWSpecs post2PostWSpecs(Post post, String username) {
        PostWSpecs postWSpecs = new PostWSpecs();
        postWSpecs.setId(post.getId());
        postWSpecs.setTitle(post.getTitle());
        postWSpecs.setParentID(post.getParentID());
        postWSpecs.setContent(post.getContent());
        postWSpecs.setNofLikes(post.getNofLikes());
        postWSpecs.setNofDislikes(post.getNofDislikes());
        postWSpecs.setLikable(post.getLikable());
        postWSpecs.setCreationDate(post.getCreationDate());
        postWSpecs.setLastEditDate(post.getLastEditDate());
        postWSpecs.setLastUpdateDate(post.getLastUpdateDate());
        postWSpecs.setPostType(post.getPostType());
        postWSpecs.setNofComments(postRepository.countByParentID(post.getId()));
        postWSpecs.setIsLiked(likeRepository.existsByUsernameAndPostID(username, post.getId()));
        postWSpecs.setIsDisliked(dislikeRepository.existsByUsernameAndPostID(username, post.getId()));
        switch (post.getPostType()) {
            case SUBFORUM ->
                postWSpecs.setParentSubforum(post);
            case FORUM ->
                postWSpecs.setParentSubforum(null);
            default -> {
                Post parent = postRepository.findById(post.getParentID()).get();
                while (parent.getPostType() != PostType.SUBFORUM) {
                    parent = postRepository.findById(parent.getParentID()).get();
                }
                postWSpecs.setParentSubforum(parent);
            }
        }
        postWSpecs.setAuthor(userRepository.findByUsername(post.getUsername()));
        postWSpecs.setComments(postRepository.findByParentID(post.getId()).stream().map(p -> post2PostWSpecs(p, username)).toList());
        return postWSpecs;
    }

    public SubforumWSpecs subforum2SubforumWSpecs(Long subforumID, String username) {
        Post subforum = postRepository.findById(subforumID).get();
        SubforumWSpecs subforumWSpecs = new SubforumWSpecs();
        subforumWSpecs.setId(subforumID);
        subforumWSpecs.setTitle(subforum.getTitle());
        subforumWSpecs.setNum_of_posts(postRepository.countByParentID(subforumID));
        subforumWSpecs.setNum_of_followers(followSubforumRepository.countByFollowedSubforumID(subforumID));
        subforumWSpecs.setIs_followed(followSubforumRepository.findByFollowerUsernameAndFollowedSubforumID(username, subforumID) != null);
        subforumWSpecs.setPosts(postRepository.findByParentID(subforumID).stream().map(p -> post2PostWSpecs(p, username)).collect(Collectors.toList()));
        return subforumWSpecs;
    }
}
