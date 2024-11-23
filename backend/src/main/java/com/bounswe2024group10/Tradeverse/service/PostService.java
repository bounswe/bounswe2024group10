package com.bounswe2024group10.Tradeverse.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.post.CreateCommentRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreateCommentResponse;
import com.bounswe2024group10.Tradeverse.dto.post.CreateForumRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreateForumResponse;
import com.bounswe2024group10.Tradeverse.dto.post.CreatePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreatePostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.CreateSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreateSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.post.EditCommentRequest;
import com.bounswe2024group10.Tradeverse.dto.post.EditCommentResponse;
import com.bounswe2024group10.Tradeverse.dto.post.EditForumRequest;
import com.bounswe2024group10.Tradeverse.dto.post.EditForumResponse;
import com.bounswe2024group10.Tradeverse.dto.post.EditPostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.EditPostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.ExploreRequest;
import com.bounswe2024group10.Tradeverse.dto.post.ExploreResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GeneralDeleteRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GeneralDeleteResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GeneralGetRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GeneralGetResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GeneralSearchRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GetForumsResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GetPostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GetPostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.SearchAndListPostsRequest;
import com.bounswe2024group10.Tradeverse.dto.post.SearchAndListPostsResponse;
import com.bounswe2024group10.Tradeverse.extra.PostType;
import com.bounswe2024group10.Tradeverse.extra.PostWSpecs;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
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
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    public GeneralGetResponse getChilderen(GeneralGetRequest request) {
        List<Post> childeren = postRepository.findByParentID(request.getParentId());
        return new GeneralGetResponse(true, "Comments fetched successfully", childeren);
    }

    public GetForumsResponse getForums() {
        List<Post> forums = postRepository.findByPostType(FORUM);
        return new GetForumsResponse(true, "Forums fetched successfully", forums);
    }

    public GeneralGetResponse getSubForums(GeneralGetRequest request) {
        Post forum = postRepository.findById(request.getParentId()).orElse(null);
        if (forum == null) {
            return new GeneralGetResponse(false, "Forum does not exist", null);
        }
        if (forum.getPostType() != FORUM) {
            return new GeneralGetResponse(false, "Given post is not a forum", null);
        }
        List<Post> subForums = postRepository.findByParentID(request.getParentId());
        return new GeneralGetResponse(true, "Subforums fetched successfully", subForums);
    }

    public GeneralGetResponse getPosts(GeneralGetRequest request) {
        Post subforum = postRepository.findById(request.getParentId()).orElse(null);
        if (subforum == null) {
            return new GeneralGetResponse(false, "Subforum does not exist", null);
        }
        if (subforum.getPostType() != SUBFORUM) {
            return new GeneralGetResponse(false, "Given post is not a subforum", null);
        }
        List<Post> posts = postRepository.findByParentID(request.getParentId());
        return new GeneralGetResponse(true, "Subforum posts fetched successfully", posts);
    }

    public GeneralGetResponse getComments(GeneralGetRequest request) {
        Post post = postRepository.findById(request.getParentId()).orElse(null);
        if (post == null) {
            return new GeneralGetResponse(false, "Post does not exist", null);
        }
        if (post.getPostType() != POST) {
            return new GeneralGetResponse(false, "Post is not a post", null);
        }
        List<Post> comments = postRepository.findByParentID(request.getParentId());
        return new GeneralGetResponse(true, "Comments fetched successfully", comments);
    }

    public GetPostResponse getComment(GetPostRequest request) {
        Post comment = postRepository.findById(request.getPostId()).orElse(null);
        if (comment == null) {
            return new GetPostResponse(false, "Comment does not exist", null);
        }
        if (comment.getPostType() != COMMENT) {
            return new GetPostResponse(false, "Post is not a comment", null);
        }
        return new GetPostResponse(true, "Comment fetched successfully", comment);
    }

    public GetPostResponse getPost(GetPostRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetPostResponse(false, "Post does not exist", null);
        }
        if (post.getPostType() != POST) {
            return new GetPostResponse(false, "Post is not a post", null);
        }
        return new GetPostResponse(true, "Post fetched successfully", post);
    }

    public CreatePostResponse createPost(CreatePostRequest request) {
        Post parentSubforum = postRepository.findById(request.getParentID()).orElse(null);
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return new CreatePostResponse(false, "User does not exist");
        }
        if (parentSubforum == null) {
            return new CreatePostResponse(false, "Parent post does not exist");
        }
        if(parentSubforum.getPostType() != SUBFORUM) {
            return new CreatePostResponse(false, "Parent post is not a subforum");
        }
        Post post = new Post(request.getUsername(), request.getTitle(), request.getParentID(), request.getContent(), LocalDateTime.now(), POST);
        postRepository.save(post);
        parentSubforum.setLastUpdateDate(LocalDateTime.now());
        Post parentForum = postRepository.findById(parentSubforum.getParentID()).orElse(null);
        parentForum.setLastUpdateDate(LocalDateTime.now());
        postRepository.save(parentForum);
        postRepository.save(parentSubforum);

        return new CreatePostResponse(true, "Post created successfully");
    }

    public CreateForumResponse createForum(CreateForumRequest request) {
        // TO DO: Check if the user is admin
        Post post = new Post(request.getUsername(), request.getTitle(), null, null, LocalDateTime.now(), FORUM);
        postRepository.save(post);
        return new CreateForumResponse(true, "Forum created successfully");
    }
    
    // TO DO: Check if the user is admin if necessary? and if admin delete username check
    public CreateSubforumResponse createSubforum(CreateSubforumRequest request) {
        Post post = new Post(request.getUsername(), request.getTitle(), request.getParentID(), null, LocalDateTime.now(), SUBFORUM);
        Post parentForum = postRepository.findById(request.getParentID()).orElse(null);
        if (parentForum == null) {
            return new CreateSubforumResponse(false, "Parent post does not exist");
        }
        if(parentForum.getPostType() != FORUM) {
            return new CreateSubforumResponse(false, "Parent post is not a forum");
        }
        postRepository.save(post);
        parentForum.setLastUpdateDate(LocalDateTime.now());
        postRepository.save(parentForum);
        return new CreateSubforumResponse(true, "Subforum created successfully");
    }

    public CreateCommentResponse createComment(CreateCommentRequest request) {
        Post parentPost = postRepository.findById(request.getParentID()).orElse(null);
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return new CreateCommentResponse(false, "User does not exist");
        }
        if (parentPost == null) {
            return new CreateCommentResponse(false, "Parent post does not exist");
        }
        if(parentPost.getPostType() != POST || parentPost.getPostType() != COMMENT) {
            return new CreateCommentResponse(false, "Parent post is not a post");
        }
        Post comment = new Post(request.getUsername(), null, request.getParentID(), null, LocalDateTime.now(), COMMENT);
        postRepository.save(comment);
        while (parentPost != null) {
            parentPost.setLastUpdateDate(LocalDateTime.now());
            postRepository.save(parentPost);
            parentPost = postRepository.findById(parentPost.getParentID()).orElse(null);
        }
        return new CreateCommentResponse(true, "Comment created successfully");
    }

    public EditCommentResponse editComment(EditCommentRequest request) {
        Post comment = postRepository.findById(request.getPostID()).orElse(null);

        if (comment == null) {
            return new EditCommentResponse(false, "Comment does not exist");
        }
        if (!comment.getUsername().equals(request.getUsername())) {
            return new EditCommentResponse(false, "You are not authorized to edit this comment");
        }
        if (comment.getPostType() != COMMENT) {
            return new EditCommentResponse(false, "Post is not a comment");
        }
        comment.setContent(request.getContent());
        comment.setLastEditDate(LocalDateTime.now());
        postRepository.save(comment);
        Post parentPost = postRepository.findById(comment.getParentID()).orElse(null);
        while (parentPost != null) {
            parentPost.setLastUpdateDate(LocalDateTime.now());
            postRepository.save(parentPost);
            parentPost = postRepository.findById(parentPost.getParentID()).orElse(null);
        }
        return new EditCommentResponse(true, "Comment edited successfully");
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
        Post parentSubforum = postRepository.findById(post.getParentID()).orElse(null);
        parentSubforum.setLastUpdateDate(LocalDateTime.now());
        postRepository.save(parentSubforum);
        Post parentForum = postRepository.findById(parentSubforum.getParentID()).orElse(null);
        parentForum.setLastUpdateDate(LocalDateTime.now());
        postRepository.save(parentForum);
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
        post.setLastUpdateDate(LocalDateTime.now());
        postRepository.save(post);
        Post parentForum = postRepository.findById(post.getParentID()).orElse(null);
        parentForum.setLastUpdateDate(LocalDateTime.now());
        postRepository.save(parentForum);
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
        post.setLastUpdateDate(LocalDateTime.now());
        postRepository.save(post);
        return new EditForumResponse(true, "Forum edited successfully");
    }

    public GeneralDeleteResponse deletePost(GeneralDeleteRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GeneralDeleteResponse(false, "Post does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new GeneralDeleteResponse(false, "You are not authorized to delete this post");
        }
        if(post.getPostType() != POST) {
            return new GeneralDeleteResponse(false, "Post is not a post");
        }
        postRepository.delete(post);
        return new GeneralDeleteResponse(true, "Post deleted successfully");
    }

    // TO DO: Check if the user is admin
    public GeneralDeleteResponse deleteForum(GeneralDeleteRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GeneralDeleteResponse(false, "Forum does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new GeneralDeleteResponse(false, "You are not authorized to delete this forum");
        }
        if(post.getPostType() != FORUM) {
            return new GeneralDeleteResponse(false, "Post is not a forum");
        }
        postRepository.delete(post);
        return new GeneralDeleteResponse(true, "Forum deleted successfully");
    }

    // TO DO: Check if the user is admin if necessary? and if admin delete username check
    public GeneralDeleteResponse deleteSubforum(GeneralDeleteRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GeneralDeleteResponse(false, "Subforum does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new GeneralDeleteResponse(false, "You are not authorized to delete this subforum");
        }
        if(post.getPostType() != SUBFORUM) {
            return new GeneralDeleteResponse(false, "Post is not a subforum");
        }
        postRepository.delete(post);
        return new GeneralDeleteResponse(true, "Subforum deleted successfully");
    }

    public GeneralDeleteResponse deleteComment(GeneralDeleteRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GeneralDeleteResponse(false, "Comment does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new GeneralDeleteResponse(false, "You are not authorized to delete this comment");
        }
        if(post.getPostType() != COMMENT) {
            return new GeneralDeleteResponse(false, "Post is not a comment");
        }
        postRepository.delete(post);
        return new GeneralDeleteResponse(true, "Comment deleted successfully");
    }


    public SearchAndListPostsResponse searchAndListPosts(SearchAndListPostsRequest request) {
        Pageable pageable = PageRequest.of(request.getOffset(), request.getLimit());
        if (request.getQueryType().equals("date")) {
            List<Post> posts = postRepository.findByTitleContaining(request.getKeyword(), pageable);
            return new SearchAndListPostsResponse(true, "Posts fetched successfully", posts);
        }
        return new SearchAndListPostsResponse(false, "Invalid query type", null);
    }

    public GetPostResponse generalGetPost(GetPostRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        boolean isLiked = false;
        boolean isDisliked = false;

        if (post == null) {
            return new GetPostResponse(false, "Post does not exist", null);
        }
        if (request.getUsername() != null) {
            User user = userRepository.findByUsername(request.getUsername());
            if (user == null) {
                return new GetPostResponse(false, "User does not exist", null);
            }
            isLiked = likeRepository.findByUsernameAndPostID(request.getUsername(),request.getPostId()) != null;
            isDisliked = dislikeRepository.findByUsernameAndPostID(request.getUsername(),request.getPostId()) != null;
        }
        return new GetPostResponse(true, "Post fetched successfully", post, isLiked, isDisliked);
    }

    public GeneralGetResponse generalGetChilderen(GeneralGetRequest request) {
        Post post = postRepository.findById(request.getParentId()).orElse(null);
        List<Boolean> isLiked;
        List<Boolean> isDisliked;
        if (post == null) {
            return new GeneralGetResponse(false, "Post does not exist", null);
        }
        List<Post> childeren = postRepository.findByParentID(request.getParentId());
        List<Long> childerenIds = 
        childeren.stream().map(Post::getId).collect(Collectors.toList());
        if(request.getUsername() != null) {
            User user = userRepository.findByUsername(request.getUsername());
            if (user == null) {
                return new GeneralGetResponse(false, "User does not exist", null);
            }
            isLiked = dislikeRepository.findByUsernameAndPostIDIn(request.getUsername(), childerenIds)
                            .stream().map(like -> true).collect(Collectors.toList());
            isDisliked = dislikeRepository.findByUsernameAndPostIDIn(request.getUsername(), childerenIds)
                            .stream().map(dislike -> true).collect(Collectors.toList());
        } else {
            isLiked = childeren.stream().map(post_ -> false).collect(Collectors.toList());
            isDisliked = childeren.stream().map(post_ -> false).collect(Collectors.toList());
        }
        return new GeneralGetResponse(true, "Comments fetched successfully", childeren, isLiked, isDisliked);
    }

    public String generalSearch(GeneralSearchRequest request) {
        return "Not implemented yet";
    }

    public ExploreResponse explore(ExploreRequest request) {
        String username = request.getUsername();
        List<PostWSpecs> recentPosts = postRepository.findRecentPosts().stream().map(post -> new PostWSpecs(post, username)).collect(Collectors.toList());
        List<PostWSpecs> popularPosts = postRepository.findPopularPosts().stream().map(post -> new PostWSpecs(post, username)).collect(Collectors.toList());
        return new ExploreResponse(true, "Posts fetched successfully", recentPosts, popularPosts);
    }

}
