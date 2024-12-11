package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.post.GetPostResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.*;
import com.bounswe2024group10.Tradeverse.model.Subforum;
import com.bounswe2024group10.Tradeverse.model.FollowSubforum;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.SubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowSubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.bounswe2024group10.Tradeverse.model.Post;

@Service
public class SubforumService {

    @Autowired
    private SubforumRepository subforumRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;
    @Autowired
    private FollowSubforumRepository followSubforumRepository;

    @Autowired
    private PostService postService;

    public List<AllSubforumResponse> getAllSubforums() {
        List<AllSubforumResponse> response = new ArrayList<>();
        List<Subforum> subforums = subforumRepository.findAll();
        for (Subforum subforum : subforums) {
            response.add(convertToAllSubforumResponse(subforum));
        }
        return response;
    }

    protected AllSubforumResponse convertToAllSubforumResponse(Subforum subforum) {
        int followerCount = followSubforumRepository.countBySubforumID(subforum.getId());
        int postCount = postRepository.countBySubforumID(subforum.getId());
        return new AllSubforumResponse(subforum.getId(), subforum.getName(), subforum.getDescription(), subforum.getTagColor(), followerCount, postCount);
    }

    public CreateSubforumResponse createSubforum(CreateSubforumRequest request, String username) {
        if (username == null) {
            return new CreateSubforumResponse(false, "User not found", null);
        }
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new CreateSubforumResponse(false, "User not found", null);
        }
        if (!user.getIsAdmin()) {
            return new CreateSubforumResponse(false, "User does not have permission to create a subforum", null);
        }
        Subforum subforum = new Subforum(
                request.getName(),
                request.getDescription(),
                request.getTagColor()
        );
        subforumRepository.save(subforum);
        return new CreateSubforumResponse(true, "Subforum created successfully", subforum.getId());
    }

    public DeleteSubforumResponse deleteSubforum(DeleteSubforumRequest request, String username) {
        if (username == null) {
            return new DeleteSubforumResponse(false, "User not found");
        }
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new DeleteSubforumResponse(false, "User not found");
        }
        if (!user.getIsAdmin()) {
            return new DeleteSubforumResponse(false, "User does not have permission to delete a subforum");
        }
        Optional<Subforum> subforum = subforumRepository.findById(request.getId());
        if (subforum.isEmpty()) {
            return new DeleteSubforumResponse(false, "Subforum not found");
        }
        subforumRepository.delete(subforum.get());
        return new DeleteSubforumResponse(true, "Subforum deleted successfully");
    }

    public FollowSubforumResponse followSubforum(FollowSubforumRequest request, String username) {
        if (username == null) {
            return new FollowSubforumResponse(false, "User not found");
        }
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new FollowSubforumResponse(false, "User not found");
        }
        Optional<Subforum> subforum = subforumRepository.findById(request.getSubforumId());
        if (subforum.isEmpty()) {
            return new FollowSubforumResponse(false, "Subforum not found");
        }
        if (followSubforumRepository.findByFollowerUsernameAndSubforumID(user.getUsername(), subforum.get().getId()) != null) {
            return new FollowSubforumResponse(false, "Already following this subforum");
        }
        FollowSubforum followSubforum = new FollowSubforum(user.getUsername(), subforum.get().getId());
        followSubforumRepository.save(followSubforum);
        return new FollowSubforumResponse(true, "Successfully followed subforum");
    }

    public FollowSubforumResponse unfollowSubforum(FollowSubforumRequest request, String username) {
        if (username == null) {
            return new FollowSubforumResponse(false, "User not found");
        }
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new FollowSubforumResponse(false, "User not found");
        }
        Optional<Subforum> subforum = subforumRepository.findById(request.getSubforumId());
        if (subforum.isEmpty()) {
            return new FollowSubforumResponse(false, "Subforum not found");
        }
        FollowSubforum followSubforum = followSubforumRepository.findByFollowerUsernameAndSubforumID(user.getUsername(), subforum.get().getId());
        if (followSubforum == null) {
            return new FollowSubforumResponse(false, "Not following this subforum");
        }
        followSubforumRepository.delete(followSubforum);
        return new FollowSubforumResponse(true, "Successfully unfollowed subforum");
    }

    public List<GetFollowedSubforumsResponse> getFollowedSubforums(String username) {
        if (username == null) {
            return new ArrayList<GetFollowedSubforumsResponse>();
        }
        List<FollowSubforum> followedSubforums = followSubforumRepository.findByFollowerUsername(username);
        List<GetFollowedSubforumsResponse> response = new ArrayList<>();
        for (FollowSubforum followedSubforum : followedSubforums) {
            Subforum subforum = subforumRepository.findById(followedSubforum.getSubforumID()).orElse(null);
            if (subforum != null) {
                response.add(new GetFollowedSubforumsResponse(subforum.getId(), subforum.getName(), subforum.getDescription(), subforum.getTagColor(), followSubforumRepository.countBySubforumID(subforum.getId()), postRepository.countBySubforumID(subforum.getId())));
            }
        }
        return response;
    }

    public GetSubforumResponse getSubforum(String username, Long id) {
        Subforum subforum = subforumRepository.findById(id).orElse(null);
        if (subforum == null) {
            return new GetSubforumResponse();
        }
        boolean isFollowed = username != null && followSubforumRepository.existsByFollowerUsernameAndSubforumID(username, id);
        int followerCount = followSubforumRepository.countBySubforumID(id);
        int postCount = postRepository.countBySubforumID(id);
        List<Post> posts = postRepository.findBySubforumID(id);
        List<GetPostResponse> postResponses = new ArrayList<>();
        for (Post post : posts) {
            postResponses.add(postService.convertToGetPostResponse(post, username));
        }
        GetSubforumResponse response = new GetSubforumResponse(subforum.getId(), subforum.getName(), subforum.getDescription(), subforum.getTagColor(), isFollowed, followerCount, postCount, postResponses);
        return response;
    }
}
