package com.bounswe2024group10.Tradeverse.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.post.CreateForumRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreateForumResponse;
import com.bounswe2024group10.Tradeverse.dto.post.CreatePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreatePostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.CreateSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreateSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.post.DeletePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.DeletePostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.EditForumRequest;
import com.bounswe2024group10.Tradeverse.dto.post.EditForumResponse;
import com.bounswe2024group10.Tradeverse.dto.post.EditPostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.EditPostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GetCommentsRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GetCommentsResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GetCommentsWLikesResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GetPostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GetPostResponse;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

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

    public CreatePostResponse createPost(CreatePostRequest request) {
        Post post = new Post(request.getUsername(), request.getTitle(), request.getParentID(), request.getContent(), true, LocalDateTime.now());
        postRepository.save(post);
        return new CreatePostResponse(true, "Post created successfully");
    }

    public CreateForumResponse createForum(CreateForumRequest request) {
        // TO DO: Check if the user is admin
        Post post = new Post(request.getUsername(), request.getTitle(), null, null, false, LocalDateTime.now());
        postRepository.save(post);
        return new CreateForumResponse(true, "Forum created successfully");
    }
    
    // TO DO: Check if the user is admin if necessary? and if admin delete username check
    public CreateSubforumResponse createSubforum(CreateSubforumRequest request) {
        Post post = new Post(request.getUsername(), request.getTitle(), request.getParentID(), null, false, LocalDateTime.now());
        if(!isPostSubForum(post)) {
            return new CreateSubforumResponse(false, "Parent post is not a forum");
        }
        postRepository.save(post);
        return new CreateSubforumResponse(true, "Subforum created successfully");
    }

    public EditPostResponse editPost(EditPostRequest request) {
        Post post = postRepository.findById(request.getPostID()).orElse(null);
        if (post == null) {
            return new EditPostResponse(false, "Post does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new EditPostResponse(false, "You are not authorized to edit this post");
        }
        post.setTitle(request.getTitle());
        post.setContent(request.getContent());
        post.setLastEditDate(LocalDateTime.now());
        postRepository.save(post);
        return new EditPostResponse(true, "Post edited successfully");
    }

        // TO DO: Check if the user is admin if necessary? and if admin delete username check
    public EditForumResponse editSubforum(EditForumRequest request) {
        Post post = postRepository.findById(request.getPostID()).orElse(null);
        if (post == null) {
            return new EditForumResponse(false, "Subforum does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new EditForumResponse(false, "You are not authorized to edit this subforum");
        }
        if(!isPostSubForum(post)) {
            return new EditForumResponse(false, "Post is not a subforum");
        }
        post.setTitle(request.getTitle());
        post.setLastEditDate(LocalDateTime.now());
        postRepository.save(post);
        return new EditForumResponse(true, "Subforum edited successfully");
    }

    // TO DO: Check if the user is admin
    public EditForumResponse editForum(EditForumRequest request) {
        Post post = postRepository.findById(request.getPostID()).orElse(null);
        if (post == null) {
            return new EditForumResponse(false, "Forum does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new EditForumResponse(false, "You are not authorized to edit this forum");
        }
        if(!isPostForum(post)) {
            return new EditForumResponse(false, "Post is not a forum");
        }
        post.setTitle(request.getTitle());
        post.setLastEditDate(LocalDateTime.now());
        postRepository.save(post);
        return new EditForumResponse(true, "Forum edited successfully");
    }

    public DeletePostResponse deletePost(DeletePostRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new DeletePostResponse(false, "Post does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new DeletePostResponse(false, "You are not authorized to delete this post");
        }
        postRepository.delete(post);
        return new DeletePostResponse(true, "Post deleted successfully");
    }

    // TO DO: Check if the user is admin
    public DeletePostResponse deleteForum(DeletePostRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new DeletePostResponse(false, "Forum does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new DeletePostResponse(false, "You are not authorized to delete this forum");
        }
        if(!isPostForum(post)) {
            return new DeletePostResponse(false, "Post is not a forum");
        }
        postRepository.delete(post);
        return new DeletePostResponse(true, "Forum deleted successfully");
    }

    // TO DO: Check if the user is admin if necessary? and if admin delete username check
    public DeletePostResponse deleteSubforum(DeletePostRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new DeletePostResponse(false, "Subforum does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new DeletePostResponse(false, "You are not authorized to delete this subforum");
        }
        if(!isPostSubForum(post)) {
            return new DeletePostResponse(false, "Post is not a subforum");
        }
        postRepository.delete(post);
        return new DeletePostResponse(true, "Subforum deleted successfully");
    }




    private boolean isPostForum(Post post) {
        return post.getParentID() == null;
    }

    private boolean isPostSubForum(Post post) {
        if(post.getParentID() == null) {
            return false;
        } else {
            Post parent = postRepository.findById(post.getParentID()).orElse(null);
            return parent != null && parent.getParentID() == null;
        }
    }

}
