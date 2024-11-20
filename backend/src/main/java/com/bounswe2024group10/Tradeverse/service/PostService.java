package com.bounswe2024group10.Tradeverse.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
import com.bounswe2024group10.Tradeverse.dto.post.GetPostWLikesResponse;
import com.bounswe2024group10.Tradeverse.dto.post.SearchAndListPostsRequest;
import com.bounswe2024group10.Tradeverse.dto.post.SearchAndListPostsResponse;
import com.bounswe2024group10.Tradeverse.extra.PostType;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Service
public class PostService {

    private static final PostType FORUM = PostType.FORUM;
    private static final PostType SUBFORUM = PostType.SUBFORUM;
    private static final PostType POST = PostType.POST;
    private static final PostType COMMENT = PostType.COMMENT;
    
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
        List<Post> forums = postRepository.findByPostType(FORUM);
        return new GetCommentsResponse(true, "Forums fetched successfully", forums);
    }

    public GetCommentsResponse getSubForums(GetCommentsRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetCommentsResponse(false, "Forum does not exist", null);
        }
        if (post.getPostType() != FORUM) {
            return new GetCommentsResponse(false, "Given post is not a forum", null);
        }
        List<Post> subForums = postRepository.findByParentID(request.getPostId());
        return new GetCommentsResponse(true, "Subforums fetched successfully", subForums);
    }

    public GetCommentsResponse getPosts(GetCommentsRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetCommentsResponse(false, "Subforum does not exist", null);
        }
        if (post.getPostType() != SUBFORUM) {
            return new GetCommentsResponse(false, "Given post is not a subforum", null);
        }
        List<Post> subForumPosts = postRepository.findByParentID(request.getPostId());
        return new GetCommentsResponse(true, "Subforum posts fetched successfully", subForumPosts);
    }

    public GetCommentsWLikesResponse getCommentsWLikes(GetCommentsRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetCommentsWLikesResponse(false, "Post does not exist", null, null, null);
        }
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

    public GetPostWLikesResponse getPostWLikes(GetPostRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetPostWLikesResponse(false, "Post does not exist", null, null, null);
        }
        Long nofLikes = likeRepository.countByPostID(post.getId());
        Long nofDislikes = dislikeRepository.countByPostID(post.getId());
        return new GetPostWLikesResponse(true, "Post fetched successfully", post, nofLikes, nofDislikes);
    }

    public CreatePostResponse createPost(CreatePostRequest request) {
        Post post = new Post(request.getUsername(), request.getTitle(), request.getParentID(), request.getContent(), true, LocalDateTime.now(), POST);
        postRepository.save(post);
        return new CreatePostResponse(true, "Post created successfully");
    }

    public CreateForumResponse createForum(CreateForumRequest request) {
        // TO DO: Check if the user is admin
        Post post = new Post(request.getUsername(), request.getTitle(), null, null, false, LocalDateTime.now(), FORUM);
        postRepository.save(post);
        return new CreateForumResponse(true, "Forum created successfully");
    }
    
    // TO DO: Check if the user is admin if necessary? and if admin delete username check
    public CreateSubforumResponse createSubforum(CreateSubforumRequest request) {
        Post post = new Post(request.getUsername(), request.getTitle(), request.getParentID(), null, false, LocalDateTime.now(), SUBFORUM);
        Post parentPost = postRepository.findById(request.getParentID()).orElse(null);
        if (parentPost == null) {
            return new CreateSubforumResponse(false, "Parent post does not exist");
        }

        if(parentPost.getPostType() != FORUM) {
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
        if (post.getPostType() != POST) {
            return new EditPostResponse(false, "Post is not a post");
        }
        post.setTitle(request.getTitle());
        post.setContent(request.getContent());
        post.setLastEditDate(LocalDateTime.now());
        post.setLastUpdateDate(LocalDateTime.now());
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
        if(post.getPostType() != SUBFORUM) {
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
        if(post.getPostType() != FORUM) {
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
        if(post.getPostType() != POST) {
            return new DeletePostResponse(false, "Post is not a post");
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
        if(post.getPostType() != FORUM) {
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
        if(post.getPostType() != SUBFORUM) {
            return new DeletePostResponse(false, "Post is not a subforum");
        }
        postRepository.delete(post);
        return new DeletePostResponse(true, "Subforum deleted successfully");
    }

    public SearchAndListPostsResponse searchAndListPosts(SearchAndListPostsRequest request) {
        Pageable pageable = PageRequest.of(request.getOffset(), request.getLimit());
        if (request.getQueryType().equals("date")) {
            List<Post> posts = postRepository.findByTitleContaining(request.getKeyword(), pageable);
            return new SearchAndListPostsResponse(true, "Posts fetched successfully", posts);
        }
        return new SearchAndListPostsResponse(false, "Invalid query type", null);
        
    }

}
