package com.bounswe2024group10.Tradeverse.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
import com.bounswe2024group10.Tradeverse.service.PostService;


@RestController
@RequestMapping(value = "/api/post")
public class PostController {
    @Autowired
    private PostService postService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-forums")
    public ResponseEntity<GetForumsResponse> getForums() {
        GetForumsResponse response = postService.getForums();
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-subforums")
    public ResponseEntity<GeneralGetResponse> getSubForums(@RequestParam Long forumId, @RequestParam(required = false) String username){
        GeneralGetRequest request = new GeneralGetRequest();
        request.setParentId(forumId);
        GeneralGetResponse response = postService.getSubForums(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-posts")
    public ResponseEntity<GeneralGetResponse> getPosts(@RequestParam Long postId) {
        GeneralGetRequest request = new GeneralGetRequest();
        request.setParentId(postId);
        GeneralGetResponse response = postService.getPosts(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-comments")
    public ResponseEntity<GeneralGetResponse> getComments(@RequestParam Long postId) {
        GeneralGetRequest request = new GeneralGetRequest();
        request.setParentId(postId);
        GeneralGetResponse response = postService.getComments(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-post")
    public ResponseEntity<GetPostResponse> getPost(@RequestParam Long postId) {
        GetPostRequest request = new GetPostRequest();
        request.setPostId(postId);
        GetPostResponse response = postService.getPost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-comment")
    public ResponseEntity<GetPostResponse> getComment(@RequestParam Long postId) {
        GetPostRequest request = new GetPostRequest();
        request.setPostId(postId);
        GetPostResponse response = postService.getComment(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/search-posts")
    public ResponseEntity<SearchAndListPostsResponse> searchPosts(
            @RequestParam(required = false) String queryType,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer offset,
            @RequestParam(required = false) Integer limit) {
        SearchAndListPostsRequest request = new SearchAndListPostsRequest();
        if (queryType == null) {
            queryType = "date";
        }
        if (keyword == null) {
            keyword = "";
        }
        if (offset == null) {
            offset = 0;
        }
        if (limit == null) {
            limit = 10;
        }
        request.setQueryType(queryType);
        request.setKeyword(keyword);
        request.setOffset(offset);
        request.setLimit(limit);
        SearchAndListPostsResponse response = postService.searchAndListPosts(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/create-post")
    public ResponseEntity<CreatePostResponse> createPost(@RequestBody CreatePostRequest request) {
        CreatePostResponse response = postService.createPost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/create-forum")
    public ResponseEntity<CreateForumResponse> createForum(@RequestBody CreateForumRequest request) {
        CreateForumResponse response = postService.createForum(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/create-subforum")
    public ResponseEntity<CreateSubforumResponse> createSubforum(@RequestBody CreateSubforumRequest request) {
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
    @PostMapping("/edit-subforum")
    public ResponseEntity<EditForumResponse> editSubforum(@RequestBody EditForumRequest request) {
        EditForumResponse response = postService.editSubforum(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/edit-forum")
    public ResponseEntity<EditForumResponse> editForum(@RequestBody EditForumRequest request) {
        EditForumResponse response = postService.editForum(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/delete-post")
    public ResponseEntity<GeneralDeleteResponse> deletePost(@RequestBody GeneralDeleteRequest request) {
        GeneralDeleteResponse response = postService.deletePost(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/delete-subforum")
    public ResponseEntity<GeneralDeleteResponse> deleteSubforum(@RequestBody GeneralDeleteRequest request) {
        GeneralDeleteResponse response = postService.deleteSubforum(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/delete-forum")
    public ResponseEntity<GeneralDeleteResponse> deleteForum(@RequestBody GeneralDeleteRequest request) {
        GeneralDeleteResponse response = postService.deleteForum(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/delete-comment")
    public ResponseEntity<GeneralDeleteResponse> deleteComment(@RequestBody GeneralDeleteRequest request) {
        GeneralDeleteResponse response = postService.deleteComment(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/general-get-post")
    public ResponseEntity<GetPostResponse> generalGetPost(@RequestParam Long postId, @RequestBody(required=false) String username) {
        GetPostRequest request = new GetPostRequest();
        request.setPostId(postId);
        request.setUsername(username);
        GetPostResponse response = postService.generalGetPost(request);
        return ResponseEntity.ok(response);
    }
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/general-get-childeren")
    public ResponseEntity<GeneralGetResponse> generalGetChilderen(@RequestParam Long parentId, @RequestBody(required=false) String username) {
        GeneralGetRequest request = new GeneralGetRequest();
        request.setParentId(parentId);
        request.setUsername(username);
        GeneralGetResponse response = postService.generalGetChilderen(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/general-search")
    public String generalSearch(@RequestBody GeneralSearchRequest request) {
        String response = postService.generalSearch(request);
        return response;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/explore")
    public ResponseEntity<ExploreResponse> explore(@RequestParam String username) {
        ExploreRequest request = new ExploreRequest(username);
        ExploreResponse response = postService.explore(request);
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
    
}
