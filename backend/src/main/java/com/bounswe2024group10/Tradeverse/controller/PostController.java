package com.bounswe2024group10.Tradeverse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
import com.bounswe2024group10.Tradeverse.dto.post.GeneralDeleteRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GeneralDeleteResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GeneralGetRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GeneralGetResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GeneralGetWLikesResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GetForumsResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GetPostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.GetPostWLikesResponse;
import com.bounswe2024group10.Tradeverse.dto.post.SearchAndListPostsRequest;
import com.bounswe2024group10.Tradeverse.dto.post.SearchAndListPostsResponse;
import com.bounswe2024group10.Tradeverse.service.PostService;


@RestController
@RequestMapping("/api/post")
public class PostController {
    @Autowired
    private PostService postService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-forums")
    public ResponseEntity<GetForumsResponse> getForums() {
        GetForumsResponse response = postService.getForums();
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-subforums")
    public ResponseEntity<GeneralGetResponse> getSubForums(@RequestBody GeneralGetRequest request) {
        GeneralGetResponse response = postService.getSubForums(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-posts")
    public ResponseEntity<GeneralGetWLikesResponse> getPosts(@RequestBody GeneralGetRequest request) {
        GeneralGetWLikesResponse response = postService.getPostsWLikes(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-comments")
    public ResponseEntity<GeneralGetWLikesResponse> getComments(@RequestBody GeneralGetRequest request) {
        GeneralGetWLikesResponse response = postService.getCommentsWLikes(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-post")
    public ResponseEntity<GetPostWLikesResponse> getPost(@RequestBody GetPostRequest request) {
        GetPostWLikesResponse response = postService.getPostWLikes(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-comment")
    public ResponseEntity<GetPostWLikesResponse> getComment(@RequestBody GetPostRequest request) {
        GetPostWLikesResponse response = postService.getCommentWLikes(request);
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
    @PostMapping("/search-posts")
    public ResponseEntity<SearchAndListPostsResponse> searchPosts(@RequestBody SearchAndListPostsRequest request) {
        SearchAndListPostsResponse response = postService.searchAndListPosts(request);
        return ResponseEntity.ok(response);
    }
}
