package com.bounswe2024group10.Tradeverse.service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.post.create.CreateCommentRequest;
import com.bounswe2024group10.Tradeverse.dto.post.create.CreateCommentResponse;
import com.bounswe2024group10.Tradeverse.dto.post.create.CreatePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.create.CreatePostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.create.CreateSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.post.create.CreateSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.post.delete.GeneralDeleteRequest;
import com.bounswe2024group10.Tradeverse.dto.post.delete.GeneralDeleteResponse;
import com.bounswe2024group10.Tradeverse.dto.post.edit.EditCommentRequest;
import com.bounswe2024group10.Tradeverse.dto.post.edit.EditCommentResponse;
import com.bounswe2024group10.Tradeverse.dto.post.edit.EditForumRequest;
import com.bounswe2024group10.Tradeverse.dto.post.edit.EditForumResponse;
import com.bounswe2024group10.Tradeverse.dto.post.edit.EditPostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.edit.EditPostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.explore.ExploreNonRecursiveResponse;
import com.bounswe2024group10.Tradeverse.dto.post.explore.ExploreRequest;
import com.bounswe2024group10.Tradeverse.dto.post.explore.ExploreResponse;
import com.bounswe2024group10.Tradeverse.dto.post.explore.ExploreSearchNonRecursiveResponse;
import com.bounswe2024group10.Tradeverse.dto.post.explore.ExploreSearchRequest;
import com.bounswe2024group10.Tradeverse.dto.post.explore.ExploreSearchResponse;
import com.bounswe2024group10.Tradeverse.dto.post.explore.GeneralSearchRequest;
import com.bounswe2024group10.Tradeverse.dto.post.feed.FeedNonRecursiveResponse;
import com.bounswe2024group10.Tradeverse.dto.post.feed.FeedRequest;
import com.bounswe2024group10.Tradeverse.dto.post.feed.FeedResponse;
import com.bounswe2024group10.Tradeverse.dto.post.other.GeneralGetRequest;
import com.bounswe2024group10.Tradeverse.dto.post.other.GeneralGetResponse;
import com.bounswe2024group10.Tradeverse.dto.post.other.GeneralRecursiveGetResponse;
import com.bounswe2024group10.Tradeverse.dto.post.other.GetPostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.other.GetPostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.other.GetSubforumsResponse;
import com.bounswe2024group10.Tradeverse.dto.post.other.GetSuperPostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.other.GetSuperSubforumResponse;
import com.bounswe2024group10.Tradeverse.extra.PostType;
import com.bounswe2024group10.Tradeverse.extra.PostWSpecs;
import com.bounswe2024group10.Tradeverse.extra.SubforumWSpecs;
import com.bounswe2024group10.Tradeverse.extra.SuperPost;
import com.bounswe2024group10.Tradeverse.extra.SuperSubforum;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowSubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Service
public class PostService {

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

    @Autowired
    private FollowSubforumRepository followSubforumRepository;

    @Autowired
    private FollowRepository followUserRepository;

    public GeneralRecursiveGetResponse getChilderen(GeneralGetRequest request) {
        List<PostWSpecs> childeren = postRepository.findByParentID(request.getParentId()).stream()
                .map(post -> post2PostWSpecs(post, request.getUsername())).collect(Collectors.toList());
        return new GeneralRecursiveGetResponse(true, "Comments fetched successfully", childeren);
    }

    // public GetForumsResponse getForums() {
    //     List<Post> forums = postRepository.findByPostType(FORUM);
    //     return new GetForumsResponse(true, "Forums fetched successfully", forums);
    // }
    public GetSubforumsResponse getSubForums(GeneralGetRequest request) {
        List<SubforumWSpecs> subForums = postRepository.findByPostType(SUBFORUM).stream()
                .map(subforum -> subforum2SubforumWSpecs(subforum.getId(), request.getUsername())).collect(Collectors.toList());
        return new GetSubforumsResponse(true, "Subforums fetched successfully", subForums);
    }

    public GetSuperSubforumResponse getSubForumsNonRecursive(GeneralGetRequest request) {
        List<SuperSubforum> subForums = postRepository.findByPostType(SUBFORUM).stream()
                .map(subforum -> subforum2SuperSubforum(subforum.getId(), request.getUsername())).collect(Collectors.toList());
        return new GetSuperSubforumResponse(true, "Subforums fetched successfully", subForums);
    }

    public GeneralRecursiveGetResponse getPosts(GeneralGetRequest request) {
        Post subforum = postRepository.findById(request.getParentId()).orElse(null);
        if (subforum == null) {
            return new GeneralRecursiveGetResponse(false, "Subforum does not exist", null);
        }
        if (subforum.getPostType() != SUBFORUM) {
            return new GeneralRecursiveGetResponse(false, "Given post is not a subforum", null);
        }
        List<PostWSpecs> posts = postRepository.findByParentID(request.getParentId()).stream()
                .map(post -> post2PostWSpecs(post, request.getUsername())).collect(Collectors.toList());
        return new GeneralRecursiveGetResponse(true, "Subforum posts fetched successfully", posts);
    }

    public GeneralGetResponse getPostsNonRecursive(GeneralGetRequest request) {
        Post subforum = postRepository.findById(request.getParentId()).orElse(null);
        if (subforum == null) {
            return new GeneralGetResponse(false, "Subforum does not exist", null);
        }
        if (subforum.getPostType() != SUBFORUM) {
            return new GeneralGetResponse(false, "Given post is not a subforum", null);
        }
        List<SuperPost> posts = postRepository.findByParentID(request.getParentId()).stream()
                .map(post -> post2SuperPost(post, request.getUsername())).collect(Collectors.toList());
        return new GeneralGetResponse(true, "Subforum posts fetched successfully", posts);
    }

    public GeneralRecursiveGetResponse getComments(GeneralGetRequest request) {
        Post post = postRepository.findById(request.getParentId()).orElse(null);
        if (post == null) {
            return new GeneralRecursiveGetResponse(false, "Post does not exist", null);
        }
        if (post.getPostType() != POST && post.getPostType() != COMMENT) {
            return new GeneralRecursiveGetResponse(false, "Post is not a post or comment", null);
        }
        // List<Post> commentIds = postRepository.findByParentID(request.getParentId());
        // ArrayList<PostWSpecs> comments = new ArrayList<>();
        // for (Post comment : commentIds) {
        //     comments.add(post2PostWSpecs(comment, request.getUsername()));
        // }
        List<PostWSpecs> comments = postRepository.findByParentID(request.getParentId()).stream()
                .map(comment -> post2PostWSpecs(comment, request.getUsername())).collect(Collectors.toList());
        return new GeneralRecursiveGetResponse(true, "Comments fetched successfully", comments);
    }

    public GeneralGetResponse getCommentsNonRecursive(GeneralGetRequest request) {
        Post post = postRepository.findById(request.getParentId()).orElse(null);
        if (post == null) {
            return new GeneralGetResponse(false, "Post does not exist", null);
        }
        if (post.getPostType() != POST && post.getPostType() != COMMENT) {
            return new GeneralGetResponse(false, "Post is not a post or comment", null);
        }
        // List<Post> commentIds = postRepository.findByParentID(request.getParentId());
        // ArrayList<PostWSpecs> comments = new ArrayList<>();
        // for (Post comment : commentIds) {
        //     comments.add(post2PostWSpecs(comment, request.getUsername()));
        // }
        List<SuperPost> comments = postRepository.findByParentID(request.getParentId()).stream()
                .map(comment -> post2SuperPost(comment, request.getUsername())).collect(Collectors.toList());
        return new GeneralGetResponse(true, "Comments fetched successfully", comments);
    }

    // public GetPostResponse getComment(GetPostRequest request) {
    //     Post comment = postRepository.findById(request.getPostId()).orElse(null);
    //     if (comment == null) {
    //         return new GetPostResponse(false, "Comment does not exist", null);
    //     }
    //     if (comment.getPostType() != COMMENT) {
    //         return new GetPostResponse(false, "Post is not a comment", null);
    //     }
    //     return new GetPostResponse(true, "Comment fetched successfully", comment);
    // }
    public GetPostResponse getPost(GetPostRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetPostResponse(false, "Post does not exist", null);
        }
        if (post.getPostType() != POST) {
            return new GetPostResponse(false, "Post is not a post", null);
        }
        PostWSpecs postWSpecs = post2PostWSpecs(post, request.getUsername());
        return new GetPostResponse(true, "Post fetched successfully", postWSpecs);
    }

    public GetSuperPostResponse getPostNonRecursive(GetPostRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetSuperPostResponse(false, "Post does not exist", null);
        }
        if (post.getPostType() != POST) {
            return new GetSuperPostResponse(false, "Post is not a post", null);
        }
        SuperPost superPost = post2SuperPost(post, request.getUsername());
        return new GetSuperPostResponse(true, "Post fetched successfully", superPost);
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
        if (parentSubforum.getPostType() != SUBFORUM) {
            return new CreatePostResponse(false, "Parent post is not a subforum");
        }
        Post post = new Post(request.getUsername(), request.getTitle(), request.getParentID(), request.getContent(), LocalDateTime.now(), POST);
        postRepository.save(post);
        parentSubforum.setLastUpdateDate(LocalDateTime.now());
        postRepository.save(parentSubforum);

        return new CreatePostResponse(true, "Post created successfully");
    }

    // public CreateForumResponse createForum(CreateForumRequest request) {
    //     // TO DO: Check if the user is admin
    //     Post post = new Post(request.getUsername(), request.getTitle(), null, null, LocalDateTime.now(), FORUM);
    //     postRepository.save(post);
    //     return new CreateForumResponse(true, "Forum created successfully");
    // }
    // TO DO: Check if the user is admin if necessary? and if admin delete username check
    public CreateSubforumResponse createSubforum(CreateSubforumRequest request) {
        Post post = new Post(request.getUsername(), request.getTitle(), null, null, LocalDateTime.now(), SUBFORUM);
        postRepository.save(post);
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
        if (parentPost.getPostType() != POST && parentPost.getPostType() != COMMENT) {
            return new CreateCommentResponse(false, "Parent post is not a post");
        }
        Post comment = new Post(request.getUsername(), null, request.getParentID(), null, LocalDateTime.now(), COMMENT);
        postRepository.save(comment);
        while (true) {
            parentPost.setLastUpdateDate(LocalDateTime.now());
            postRepository.save(parentPost);
            if (parentPost.getPostType() == SUBFORUM || parentPost.getParentID() == null) {
                break;
            }
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
        if (post.getPostType() != SUBFORUM) {
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
    // public EditForumResponse editForum(EditForumRequest request) {
    //     Post post = postRepository.findById(request.getPostID()).orElse(null);
    //     if (post == null) {
    //         return new EditForumResponse(false, "Forum does not exist");
    //     }
    //     if (!post.getUsername().equals(request.getUsername())) {
    //         return new EditForumResponse(false, "You are not authorized to edit this forum");
    //     }
    //     if(post.getPostType() != FORUM) {
    //         return new EditForumResponse(false, "Post is not a forum");
    //     }
    //     post.setTitle(request.getTitle());
    //     post.setLastEditDate(LocalDateTime.now());
    //     post.setLastUpdateDate(LocalDateTime.now());
    //     postRepository.save(post);
    //     return new EditForumResponse(true, "Forum edited successfully");
    // }
    public GeneralDeleteResponse deletePost(GeneralDeleteRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GeneralDeleteResponse(false, "Post does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new GeneralDeleteResponse(false, "You are not authorized to delete this post");
        }
        if (post.getPostType() != POST) {
            return new GeneralDeleteResponse(false, "Post is not a post");
        }
        postRepository.delete(post);
        return new GeneralDeleteResponse(true, "Post deleted successfully");
    }

    // // TO DO: Check if the user is admin
    // public GeneralDeleteResponse deleteForum(GeneralDeleteRequest request) {
    //     Post post = postRepository.findById(request.getPostId()).orElse(null);
    //     if (post == null) {
    //         return new GeneralDeleteResponse(false, "Forum does not exist");
    //     }
    //     if (!post.getUsername().equals(request.getUsername())) {
    //         return new GeneralDeleteResponse(false, "You are not authorized to delete this forum");
    //     }
    //     if(post.getPostType() != FORUM) {
    //         return new GeneralDeleteResponse(false, "Post is not a forum");
    //     }
    //     postRepository.delete(post);
    //     return new GeneralDeleteResponse(true, "Forum deleted successfully");
    // }
    // TO DO: Check if the user is admin if necessary? and if admin delete username check
    public GeneralDeleteResponse deleteSubforum(GeneralDeleteRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GeneralDeleteResponse(false, "Subforum does not exist");
        }
        if (post.getPostType() != SUBFORUM) {
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
        if (post.getPostType() != COMMENT) {
            return new GeneralDeleteResponse(false, "Post is not a comment");
        }
        postRepository.delete(post);
        return new GeneralDeleteResponse(true, "Comment deleted successfully");
    }

    // public SearchAndListPostsResponse searchAndListPosts(SearchAndListPostsRequest request) {
    //     Pageable pageable = PageRequest.of(request.getOffset(), request.getLimit());
    //     if (request.getQueryType().equals("date")) {
    //         List<Post> posts = postRepository.findByTitleContaining(request.getKeyword(), pageable);
    //         return new SearchAndListPostsResponse(true, "Posts fetched successfully", posts);
    //     }
    //     return new SearchAndListPostsResponse(false, "Invalid query type", null);
    // }
    public GetPostResponse generalGetPost(GetPostRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetPostResponse(false, "Post does not exist", null);
        }
        PostWSpecs postWSpecs = post2PostWSpecs(post, request.getUsername());
        return new GetPostResponse(true, "Post fetched successfully", postWSpecs);
    }

    public GetSuperPostResponse generalGetPostNonRecursive(GetPostRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GetSuperPostResponse(false, "Post does not exist", null);
        }
        SuperPost superPost = post2SuperPost(post, request.getUsername());
        return new GetSuperPostResponse(true, "Post fetched successfully", superPost);
    }

    public GeneralRecursiveGetResponse generalGetChilderen(GeneralGetRequest request) {
        Post post = postRepository.findById(request.getParentId()).orElse(null);
        if (post == null) {
            return new GeneralRecursiveGetResponse(false, "Post does not exist", null);
        }
        List<PostWSpecs> childeren = postRepository.findByParentID(request.getParentId()).stream()
                .map(p -> post2PostWSpecs(p, request.getUsername())).collect(Collectors.toList());
        return new GeneralRecursiveGetResponse(true, "Comments fetched successfully", childeren);
    }

    public GeneralDeleteResponse generalDelete(GeneralDeleteRequest request) {
        Post post = postRepository.findById(request.getPostId()).orElse(null);
        if (post == null) {
            return new GeneralDeleteResponse(false, "Post does not exist");
        }
        if (!post.getUsername().equals(request.getUsername())) {
            return new GeneralDeleteResponse(false, "You are not authorized to delete this comment");
        }
        postRepository.delete(post);
        return new GeneralDeleteResponse(true, "Post deleted successfully");
    }

    public String generalSearch(GeneralSearchRequest request) {
        return "Not implemented yet";
    }

    public ExploreResponse explore(ExploreRequest request) {
        String username = request.getUsername();
        List<PostWSpecs> recentPosts = postRepository.findRecentPosts().stream().map(post -> post2PostWSpecs(post, username)).collect(Collectors.toList());
        List<PostWSpecs> popularPosts = postRepository.findPopularPosts().stream().map(post -> post2PostWSpecs(post, username)).collect(Collectors.toList());
        return new ExploreResponse(true, "Posts fetched successfully", recentPosts, popularPosts);
    }

    public ExploreNonRecursiveResponse exploreNonRecursive(ExploreRequest request) {
        String username = request.getUsername();
        List<SuperPost> recentPosts = postRepository.findRecentPosts().stream().map(post -> post2SuperPost(post, username)).collect(Collectors.toList());
        List<SuperPost> popularPosts = postRepository.findPopularPosts().stream().map(post -> post2SuperPost(post, username)).collect(Collectors.toList());
        return new ExploreNonRecursiveResponse(true, "Posts fetched successfully", recentPosts, popularPosts);
    }

    public ExploreSearchResponse exploreSearch(ExploreSearchRequest request) {
        String username = request.getUsername();
        List<PostWSpecs> posts = postRepository.findByKeywordAndPostType(request.getKeyword(), POST).stream()
                .map(post -> post2PostWSpecs(post, username)).collect(Collectors.toList());
        List<SubforumWSpecs> subforums = postRepository.findByKeywordAndPostType(request.getKeyword(), SUBFORUM).stream()
                .map(subforum -> subforum2SubforumWSpecs(subforum.getId(), username)).collect(Collectors.toList());
        return new ExploreSearchResponse(null, posts, null, null, subforums, null, true, "Search results fetched successfully");
    }

    public ExploreSearchNonRecursiveResponse exploreSearchNonRecursive(ExploreSearchRequest request) {
        String username = request.getUsername();
        List<SuperPost> posts = postRepository.findByKeywordAndPostType(request.getKeyword(), POST).stream()
                .map(post -> post2SuperPost(post, username)).collect(Collectors.toList());
        List<SuperSubforum> subforums = postRepository.findByKeywordAndPostType(request.getKeyword(), SUBFORUM).stream()
                .map(subforum -> subforum2SuperSubforum(subforum.getId(), username)).collect(Collectors.toList());
        return new ExploreSearchNonRecursiveResponse(null, posts, null, null, subforums, null, true, "Search results fetched successfully");
    }

    public FeedResponse feed(FeedRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return new FeedResponse(null, null, null, false, "User does not exist");
        }
        List<Post> followedSubforums = followSubforumRepository.findByFollowerUsername(user.getUsername()).stream()
                .map(follow -> postRepository.findById(follow.getFollowedSubforumID()).orElse(null))
                .collect(Collectors.toList());
        HashMap<String, List<PostWSpecs>> followedSubforumPosts = new HashMap<>();
        for (Post subforum : followedSubforums) {
            List<PostWSpecs> posts = postRepository.findByParentID(subforum.getId()).stream()
                    .map(post -> post2PostWSpecs(post, user.getUsername())).collect(Collectors.toList());
            followedSubforumPosts.put(subforum.getTitle(), posts);
        }
        List<String> followedUsernames = followUserRepository.findByFollowerUsername(user.getUsername()).stream()
                .map(follow -> follow.getFollowedUsername()).collect(Collectors.toList());

        HashMap<String, List<PostWSpecs>> followedUserPosts = new HashMap<>();
        for (String username : followedUsernames) {
            List<PostWSpecs> posts = postRepository.findByUsername(username).stream()
                    .map(post -> post2PostWSpecs(post, user.getUsername())).collect(Collectors.toList());
            followedUserPosts.put(username, posts);
        }
        // TO DO: Implement forYou
        return new FeedResponse(null, followedSubforumPosts, followedUserPosts, true, "Feed fetched successfully");
    }

    public FeedNonRecursiveResponse feedNonRecursive(FeedRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        if (user == null) {
            return new FeedNonRecursiveResponse(null, null, null, false, "User does not exist");
        }
        List<Post> followedSubforums = followSubforumRepository.findByFollowerUsername(user.getUsername()).stream()
                .map(follow -> postRepository.findById(follow.getFollowedSubforumID()).orElse(null))
                .collect(Collectors.toList());
        HashMap<String, List<SuperPost>> followedSubforumPosts = new HashMap<>();
        for (Post subforum : followedSubforums) {
            List<SuperPost> posts = postRepository.findByParentID(subforum.getId()).stream()
                    .map(post -> post2SuperPost(post, user.getUsername())).collect(Collectors.toList());
            followedSubforumPosts.put(subforum.getTitle(), posts);
        }
        List<String> followedUsernames = followUserRepository.findByFollowerUsername(user.getUsername()).stream()
                .map(follow -> follow.getFollowedUsername()).collect(Collectors.toList());

        HashMap<String, List<SuperPost>> followedUserPosts = new HashMap<>();
        for (String username : followedUsernames) {
            List<SuperPost> posts = postRepository.findByUsername(username).stream()
                    .map(post -> post2SuperPost(post, user.getUsername())).collect(Collectors.toList());
            followedUserPosts.put(username, posts);
        }
        // TO DO: Implement forYou
        return new FeedNonRecursiveResponse(null, followedSubforumPosts, followedUserPosts, true, "Feed fetched successfully");
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

    public SuperPost post2SuperPost(Post post, String username) {
        SuperPost superPost = new SuperPost();
        superPost.setId(post.getId());
        superPost.setTitle(post.getTitle());
        superPost.setParentID(post.getParentID());
        superPost.setContent(post.getContent());
        superPost.setNofLikes(post.getNofLikes());
        superPost.setNofDislikes(post.getNofDislikes());
        superPost.setLikable(post.getLikable());
        superPost.setCreationDate(post.getCreationDate());
        superPost.setLastEditDate(post.getLastEditDate());
        superPost.setLastUpdateDate(post.getLastUpdateDate());
        superPost.setPostType(post.getPostType());
        superPost.setNofComments(postRepository.countByParentID(post.getId()));
        superPost.setIsLiked(likeRepository.existsByUsernameAndPostID(username, post.getId()));
        superPost.setIsDisliked(dislikeRepository.existsByUsernameAndPostID(username, post.getId()));
        switch (post.getPostType()) {
            case SUBFORUM ->
                superPost.setParentSubforum(post);
            case FORUM ->
                superPost.setParentSubforum(null);
            default -> {
                Post parent = postRepository.findById(post.getParentID()).get();
                while (parent.getPostType() != PostType.SUBFORUM) {
                    parent = postRepository.findById(parent.getParentID()).get();
                }
                superPost.setParentSubforum(parent);
            }
        }
        superPost.setAuthor(userRepository.findByUsername(post.getUsername()));
        superPost.setComments(postRepository.findByParentID(post.getId()).stream().map(p -> p.getId()).toList());
        return superPost;
    }

    public SubforumWSpecs subforum2SubforumWSpecs(Long subforumID, String username) {
        Post subforum = postRepository.findById(subforumID).get();
        if (subforum == null) {
            return null;
        }
        SubforumWSpecs subforumWSpecs = new SubforumWSpecs();
        subforumWSpecs.setId(subforumID);
        subforumWSpecs.setTitle(subforum.getTitle());
        subforumWSpecs.setNum_of_posts(postRepository.countByParentID(subforumID));
        subforumWSpecs.setNum_of_followers(followSubforumRepository.countByFollowedSubforumID(subforumID));
        subforumWSpecs.setIs_followed(followSubforumRepository.findByFollowerUsernameAndFollowedSubforumID(username, subforumID) != null);
        subforumWSpecs.setPosts(postRepository.findByParentID(subforumID).stream().map(p -> post2PostWSpecs(p, username)).collect(Collectors.toList()));
        return subforumWSpecs;
    }

    public SuperSubforum subforum2SuperSubforum(Long subforumID, String username) {
        Post subforum = postRepository.findById(subforumID).get();
        if (subforum == null) {
            return null;
        }
        SuperSubforum subforumWSpecs = new SuperSubforum();
        subforumWSpecs.setId(subforumID);
        subforumWSpecs.setTitle(subforum.getTitle());
        subforumWSpecs.setNum_of_posts(postRepository.countByParentID(subforumID));
        subforumWSpecs.setNum_of_followers(followSubforumRepository.countByFollowedSubforumID(subforumID));
        subforumWSpecs.setIs_followed(followSubforumRepository.findByFollowerUsernameAndFollowedSubforumID(username, subforumID) != null);
        subforumWSpecs.setPosts(postRepository.findByParentID(subforumID).stream().map(p -> p.getId()).collect(Collectors.toList()));
        return subforumWSpecs;
    }

}
