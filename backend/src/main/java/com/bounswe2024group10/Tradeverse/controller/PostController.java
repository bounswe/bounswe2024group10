package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.post.other.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
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
import com.bounswe2024group10.Tradeverse.service.PostService;

import java.util.List;

/**
 * PostController handles all HTTP requests related to posts, forums, subforums,
 * and comments. It provides endpoints for creating, editing, deleting, and
 * retrieving posts, forums, subforums, and comments. It also includes endpoints
 * for searching and exploring posts.
 *
 * Endpoints:
 *
 * - GET /api/post/get-subforums: Retrieves subforums for a given username. -
 * GET /api/post/get-posts-of-subforum: Retrieves posts of a specific subforum.
 * - GET /api/post/get-comments-of-post-or-comment: Retrieves comments of a
 * specific post or comment. - GET /api/post/get-post: Retrieves a specific
 * post. It can be a post or a comment or a subforum. - GET
 * /api/post/search-posts: Searches for posts based on query type, keyword,
 * offset, and limit. - POST /api/post/create-post: Creates a new post. - POST
 * /api/post/create-forum: Creates a new forum. - POST
 * /api/post/create-subforum: Creates a new subforum. - POST
 * /api/post/create-comment: Creates a new comment. - POST
 * /api/post/edit-comment: Edits an existing comment. - POST
 * /api/post/edit-post: Edits an existing post. - POST /api/post/edit-subforum:
 * Edits an existing subforum. - POST /api/post/edit-forum: Edits an existing
 * forum. - POST /api/post/delete-post: Deletes a specific post. - POST
 * /api/post/delete-subforum: Deletes a specific subforum. - POST
 * /api/post/delete-forum: Deletes a specific forum. - POST
 * /api/post/delete-comment: Deletes a specific comment. - GET
 * /api/post/general-get-post: Retrieves a post with optional username. - GET
 * /api/post/general-get-childeren: Retrieves children of a specific parent post
 * or comment. - POST /api/post/general-search: Performs a general search. - GET
 * /api/post/explore: Explores posts for a given username. - GET /api/post/feed:
 * Retrieves the feed for a given username.
 *
 * All endpoints support Cross-Origin Resource Sharing (CORS) with any origin
 * and allowed headers.
 */
@RestController
@RequestMapping(value = "/api/post")
public class PostController {

    @Autowired
    private PostService postService;

    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @GetMapping("/get-forums")
    // public ResponseEntity<GetForumsResponse> getForums() {
    //     GetForumsResponse response = postService.getForums();
    //     return ResponseEntity.ok(response);
    // }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-subforums")
    public ResponseEntity<GetSubforumsResponse> getSubForums(@RequestParam(required = false) String username) {
        GeneralGetRequest request = new GeneralGetRequest();
        if (username == null) {
            username = "reserved";
        }
        request.setUsername(username);
        GetSubforumsResponse response = postService.getSubForums(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-subforums/non-recursive")
    public ResponseEntity<GetSuperSubforumResponse> getSubForumsNonRecursive(@RequestParam(required = false) String username) {
        GeneralGetRequest request = new GeneralGetRequest();
        if (username == null) {
            username = "reserved";
        }
        request.setUsername(username);
        GetSuperSubforumResponse response = postService.getSubForumsNonRecursive(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-posts-of-subforum")
    public ResponseEntity<GeneralRecursiveGetResponse> getPosts(@RequestParam Long postId, @RequestParam(required = false) String username) {
        GeneralGetRequest request = new GeneralGetRequest();
        if (username == null) {
            username = "reserved";
        }
        request.setParentId(postId);
        request.setUsername(username);
        GeneralRecursiveGetResponse response = postService.getPosts(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-posts-of-subforum/non-recursive")
    public ResponseEntity<GeneralGetResponse> getPosts2(@RequestParam Long postId, @RequestParam(required = false) String username) {
        GeneralGetRequest request = new GeneralGetRequest();
        if (username == null) {
            username = "reserved";
        }
        request.setParentId(postId);
        request.setUsername(username);
        GeneralGetResponse response = postService.getPostsNonRecursive(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-comments-of-post-or-comment")
    public ResponseEntity<GeneralRecursiveGetResponse> getComments(@RequestParam Long postId, @RequestParam(required = false) String username) {
        GeneralGetRequest request = new GeneralGetRequest();
        request.setParentId(postId);
        if (username == null) {
            username = "reserved";
        }
        request.setUsername(username);
        GeneralRecursiveGetResponse response = postService.getComments(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-comments-of-post-or-comment/non-recursive")
    public ResponseEntity<GeneralGetResponse> getCommentsNonRecursive(@RequestParam Long postId, @RequestParam(required = false) String username) {
        GeneralGetRequest request = new GeneralGetRequest();
        request.setParentId(postId);
        if (username == null) {
            username = "reserved";
        }
        request.setUsername(username);
        GeneralGetResponse response = postService.getCommentsNonRecursive(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-post")
    public ResponseEntity<GetPostResponse> getPost(@RequestParam Long postId, @RequestParam(required = false) String username) {
        GetPostRequest request = new GetPostRequest();
        request.setPostId(postId);
        if (username == null) {
            username = "reserved";
        }
        request.setUsername(username);
        GetPostResponse response = postService.getPost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-post/non-recursive")
    public ResponseEntity<GetSuperPostResponse> getPostNonRecursive(@RequestParam Long postId, @RequestParam(required = false) String username) {
        GetPostRequest request = new GetPostRequest();
        request.setPostId(postId);
        if (username == null) {
            username = "reserved";
        }
        request.setUsername(username);
        GetSuperPostResponse response = postService.getPostNonRecursive(request);
        return ResponseEntity.ok(response);
    }

    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @GetMapping("/get-comment")
    // public ResponseEntity<GetPostResponse> getComment(@RequestParam Long postId) {
    //     GetPostRequest request = new GetPostRequest();
    //     request.setPostId(postId);
    //     GetPostResponse response = postService.getComment(request);
    //     return ResponseEntity.ok(response);
    // }
    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @GetMapping("/search-posts")
    // public ResponseEntity<SearchAndListPostsResponse> searchPosts(
    //         @RequestParam(required = false) String queryType,
    //         @RequestParam(required = false) String keyword,
    //         @RequestParam(required = false) Integer offset,
    //         @RequestParam(required = false) Integer limit) {
    //     SearchAndListPostsRequest request = new SearchAndListPostsRequest();
    //     if (queryType == null) {
    //         queryType = "date";
    //     }
    //     if (keyword == null) {
    //         keyword = "";
    //     }
    //     if (offset == null) {
    //         offset = 0;
    //     }
    //     if (limit == null) {
    //         limit = 10;
    //     }
    //     request.setQueryType(queryType);
    //     request.setKeyword(keyword);
    //     request.setOffset(offset);
    //     request.setLimit(limit);
    //     SearchAndListPostsResponse response = postService.searchAndListPosts(request);
    //     return ResponseEntity.ok(response);
    // }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/create-post")
    public ResponseEntity<CreatePostResponse> createPost(@RequestBody CreatePostRequest request) {
        CreatePostResponse response = postService.createPost(request);
        return ResponseEntity.ok(response);
    }

    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @PostMapping("/create-forum")
    // public ResponseEntity<CreateForumResponse> createForum(@RequestBody CreateForumRequest request) {
    //     CreateForumResponse response = postService.createForum(request);
    //     return ResponseEntity.ok(response);
    // }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/create-subforum")
    public ResponseEntity<CreateSubforumResponse> createSubforum(@RequestParam String username, @RequestParam String title) {
        CreateSubforumRequest request = new CreateSubforumRequest();
        request.setUsername(username);
        request.setTitle(title);
        CreateSubforumResponse response = postService.createSubforum(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/create-comment")
    public ResponseEntity<CreateCommentResponse> createComment(@RequestBody CreateCommentRequest request) {
        CreateCommentResponse response = postService.createComment(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/edit-comment")
    public ResponseEntity<EditCommentResponse> editComment(@RequestBody EditCommentRequest request) {
        EditCommentResponse response = postService.editComment(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/edit-post")
    public ResponseEntity<EditPostResponse> editPost(@RequestBody EditPostRequest request) {
        EditPostResponse response = postService.editPost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/edit-subforum")
    public ResponseEntity<EditForumResponse> editSubforum(@RequestParam String username, @RequestParam Long postID, @RequestParam String title) {
        EditForumRequest request = new EditForumRequest();
        request.setUsername(username);
        request.setPostID(postID);
        request.setTitle(title);
        EditForumResponse response = postService.editSubforum(request);
        return ResponseEntity.ok(response);
    }

    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @PostMapping("/edit-forum")
    // public ResponseEntity<EditForumResponse> editForum(@RequestBody EditForumRequest request) {
    //     EditForumResponse response = postService.editForum(request);
    //     return ResponseEntity.ok(response);
    // }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/delete-post")
    public ResponseEntity<GeneralDeleteResponse> deletePost(@RequestParam Long postId, @RequestParam String username) {
        GeneralDeleteRequest request = new GeneralDeleteRequest();
        request.setPostId(postId);
        request.setUsername(username);
        GeneralDeleteResponse response = postService.deletePost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/delete-subforum")
    public ResponseEntity<GeneralDeleteResponse> deleteSubforum(@RequestParam Long postId, @RequestParam String username) {
        GeneralDeleteRequest request = new GeneralDeleteRequest();
        request.setPostId(postId);
        request.setUsername(username);
        GeneralDeleteResponse response = postService.deleteSubforum(request);
        return ResponseEntity.ok(response);
    }

    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @PostMapping("/delete-forum")
    // public ResponseEntity<GeneralDeleteResponse> deleteForum(@RequestBody GeneralDeleteRequest request) {
    //     GeneralDeleteResponse response = postService.deleteForum(request);
    //     return ResponseEntity.ok(response);
    // }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/delete-comment")
    public ResponseEntity<GeneralDeleteResponse> deleteComment(@RequestParam Long postId, @RequestParam String username) {
        GeneralDeleteRequest request = new GeneralDeleteRequest();
        request.setPostId(postId);
        request.setUsername(username);
        GeneralDeleteResponse response = postService.deleteComment(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/general-get-post")
    public ResponseEntity<GetPostResponse> generalGetPost(@RequestParam Long postId, @RequestBody(required = false) String username) {
        GetPostRequest request = new GetPostRequest();
        if (username == null) {
            username = "reserved";
        }
        request.setPostId(postId);
        request.setUsername(username);
        GetPostResponse response = postService.generalGetPost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/general-get-post/non-recursive")
    public ResponseEntity<GetSuperPostResponse> generalGetPostNonRecursive(@RequestParam Long postId, @RequestBody(required = false) String username) {
        GetPostRequest request = new GetPostRequest();
        if (username == null) {
            username = "reserved";
        }
        request.setPostId(postId);
        request.setUsername(username);
        GetSuperPostResponse response = postService.generalGetPostNonRecursive(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/general-get-childeren")
    public ResponseEntity<GeneralRecursiveGetResponse> generalGetChilderen(@RequestParam Long parentId, @RequestBody(required = false) String username) {
        GeneralGetRequest request = new GeneralGetRequest();
        request.setParentId(parentId);
        request.setUsername(username);
        GeneralRecursiveGetResponse response = postService.generalGetChilderen(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/general-delete")
    public ResponseEntity<GeneralDeleteResponse> generalDelete(@RequestParam Long postId, @RequestParam String username) {
        GeneralDeleteRequest request = new GeneralDeleteRequest();
        request.setPostId(postId);
        request.setUsername(username);
        GeneralDeleteResponse response = postService.generalDelete(request);
        return ResponseEntity.ok(response);
    }

    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @PostMapping("/general-search")
    // public String generalSearch(@RequestBody GeneralSearchRequest request) {
    //     String response = postService.generalSearch(request);
    //     return response;
    // }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/explore")
    public ResponseEntity<ExploreResponse> explore(@RequestParam(required = false) String username) {
        if (username == null) {
            username = "reserved";
        }
        ExploreRequest request = new ExploreRequest(username);
        ExploreResponse response = postService.explore(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/explore/non-recursive")
    public ResponseEntity<ExploreNonRecursiveResponse> exploreNonRecursive(@RequestParam(required = false) String username) {
        if (username == null) {
            username = "reserved";
        }
        ExploreRequest request = new ExploreRequest(username);
        ExploreNonRecursiveResponse response = postService.exploreNonRecursive(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/feed")
    public ResponseEntity<FeedResponse> feed(@RequestParam String username) {
        if (username == null) {
            username = "reserved";
        }
        FeedRequest request = new FeedRequest();
        request.setUsername(username);
        FeedResponse response = postService.feed(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/feed/non-recursive")
    public ResponseEntity<FeedNonRecursiveResponse> feedNonRecursive(@RequestParam String username) {
        if (username == null) {
            username = "reserved";
        }
        FeedRequest request = new FeedRequest();
        request.setUsername(username);
        FeedNonRecursiveResponse response = postService.feedNonRecursive(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/explore/search")
    public ResponseEntity<ExploreSearchResponse> exploreSearch(@RequestParam(required = false) String username, @RequestParam String keyword) {
        if (username == null) {
            username = "reserved";
        }
        ExploreSearchRequest request = new ExploreSearchRequest(username, keyword);
        ExploreSearchResponse response = postService.exploreSearch(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/explore/search/non-recursive")
    public ResponseEntity<ExploreSearchNonRecursiveResponse> exploreSearchNonRecursive(@RequestParam(required = false) String username, @RequestParam String keyword) {
        if (username == null) {
            username = "reserved";
        }
        ExploreSearchRequest request = new ExploreSearchRequest(username, keyword);
        ExploreSearchNonRecursiveResponse response = postService.exploreSearchNonRecursive(request);
        return ResponseEntity.ok(response);
    }
  
    // @CrossOrigin(origins = "*", allowedHeaders = "*")
    // @GetMapping("/explore/search")
    // public ResponseEntity<SearchAndListPostsResponse> exploreSearch(@RequestParam String username, @RequestParam String keyword) {
    //     SearchAndListPostsRequest request = new SearchAndListPostsRequest();
    //     request.setKeyword(keyword);
    //     SearchAndListPostsResponse response = postService.exploreSearch(request);
    //     return ResponseEntity.ok(response);
    // }
    @GetMapping("/subforum/searchKeyword")
    public List<SubforumSummaryDTO> searchSubforumsByKeyword(@RequestParam("keyword") String keyword) {
        return postService.getSubforumsByKeyword(keyword);
    }
    @GetMapping("/subforum/{id}")
    public SubforumDetailsDTO getSubforumById(
            @PathVariable Long id,
            @RequestParam String username) {
        return postService.getSubforumDetails(id, username);
    }
}
