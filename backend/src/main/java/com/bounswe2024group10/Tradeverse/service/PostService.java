package com.bounswe2024group10.Tradeverse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.post.GetCommentsRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GetCommentsResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GetCommentsWLikesResponse;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

import java.util.stream.Collectors;

import com.bounswe2024group10.Tradeverse.dto.post.GetPostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GetPostResponse;

@Service
public class PostService {
    
    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private DislikeRepository dislikeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    public GetCommentsResponse getComments(GetCommentsRequest request) {
        List<Post> comments = postRepository.findByParentID(request.getPostId());
        return new GetCommentsResponse(true, "Comments fetched successfully", comments);
    }

    public GetCommentsResponse getForums() {
        List<Post> forums = postRepository.findByParentID(null);
        return new GetCommentsResponse(true, "Forums fetched successfully", forums);
    }

    public GetCommentsResponse getSubForums(GetCommentsRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetCommentsResponse(false, "Forum does not exist", null);
        }
        if (!isPostForum(post)) {
            return new GetCommentsResponse(false, "Post is not a forum", null);
        }
        List<Post> subForums = postRepository.findByParentID(request.getPostId());
        return new GetCommentsResponse(true, "Subforums fetched successfully", subForums);
    }

    public GetCommentsResponse getSubForumPosts(GetCommentsRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetCommentsResponse(false, "Subforum does not exist", null);
        }
        if (!isPostSubForum(post)) {
            return new GetCommentsResponse(false, "Post is not a subforum", null);
        }
        List<Post> subForumPosts = postRepository.findByParentID(request.getPostId());
        return new GetCommentsResponse(true, "Subforum posts fetched successfully", subForumPosts);
    }

    public GetCommentsWLikesResponse getCommentsWLikes(GetCommentsRequest request) {
        List<Post> comments = postRepository.findByParentID(request.getPostId());
        List<Long> nofLikes = comments.stream().map(comment -> likeRepository.countByPostID(comment.getId())).collect(Collectors.toList());
        List<Long> nofDislikes = comments.stream().map(comment -> dislikeRepository.countByPostID(comment.getId())).collect(Collectors.toList());
        return new GetCommentsWLikesResponse(true, "Comments fetched successfully", comments, nofLikes, nofDislikes);
    }

    public GetPostResponse getPost(GetPostRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetPostResponse(false, "Post does not exist", null);
        }
        return new GetPostResponse(true, "Post fetched successfully", post);
    }

    public boolean isPostForum(Post post) {
        return post.getParentID() == null;
    }

    public boolean isPostSubForum(Post post) {
        if(post.getParentID() == null) {
            return false;
        } else {
            Post parent = postRepository.findById(post.getParentID()).orElse(null);
            return parent != null && parent.getParentID() == null;
    }

}
