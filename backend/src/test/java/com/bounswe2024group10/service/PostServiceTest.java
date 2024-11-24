// package com.bounswe2024group10.service;

// import static org.junit.jupiter.api.Assertions.*;
// import static org.mockito.Mockito.*;
// import java.time.LocalDateTime;
// import java.util.Arrays;
// import java.util.Optional;
// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;
// import org.mockito.MockitoAnnotations;
// import com.bounswe2024group10.Tradeverse.dto.post.*;
// import com.bounswe2024group10.Tradeverse.extra.PostType;
// import com.bounswe2024group10.Tradeverse.model.Post;
// import com.bounswe2024group10.Tradeverse.model.User;
// import com.bounswe2024group10.Tradeverse.repository.*;
// import com.bounswe2024group10.Tradeverse.service.PostService;







// public class PostServiceTest {

//     @InjectMocks
//     private PostService postService;

//     @Mock
//     private LikeRepository likeRepository;

//     @Mock
//     private DislikeRepository dislikeRepository;

//     @Mock
//     private PostRepository postRepository;

//     @Mock
//     private UserRepository userRepository;

//     @Mock
//     private FollowSubforumRepository followSubforumRepository;

//     @Mock
//     private FollowRepository followUserRepository;

//     @BeforeEach
//     public void setUp() {
//         MockitoAnnotations.openMocks(this);
//     }

//     @Test
//     public void testGetPost_Success() {
//         Post post = new Post("user1", "Title", null, null, LocalDateTime.now(), PostType.POST);
//         when(postRepository.findById(1L)).thenReturn(Optional.of(post));

//         GetPostRequest request = new GetPostRequest(1L, "user1");
//         GetPostResponse response = postService.getPost(request);

//         assertTrue(response.getIsSuccessful());
//         assertEquals("Post fetched successfully", response.getMessage());
//         assertNotNull(response.getPost());
//     }

//     @Test
//     public void testGetPost_PostDoesNotExist() {
//         when(postRepository.findById(1L)).thenReturn(Optional.empty());

//         GetPostRequest request = new GetPostRequest(1L, "user1");
//         GetPostResponse response = postService.getPost(request);

//         assertFalse(response.isSuccess());
//         assertEquals("Post does not exist", response.getMessage());
//         assertNull(response.getPost());
//     }

//     @Test
//     public void testCreatePost_Success() {
//         Post parentSubforum = new Post("user1", "Subforum", null, null, LocalDateTime.now(), PostType.SUBFORUM);
//         User user = new User();
//         user.setUsername("user1");

//         when(postRepository.findById(1L)).thenReturn(Optional.of(parentSubforum));
//         when(userRepository.findByUsername("user1")).thenReturn(user);

//         CreatePostRequest request = new CreatePostRequest("user1", "Title", "Content", 1L);
//         CreatePostResponse response = postService.createPost(request);

//         assertTrue(response.isSuccess());
//         assertEquals("Post created successfully", response.getMessage());
//     }

//     @Test
//     public void testCreatePost_UserDoesNotExist() {
//         when(userRepository.findByUsername("user1")).thenReturn(null);

//         CreatePostRequest request = new CreatePostRequest("user1", "Title", "Content", 1L);
//         CreatePostResponse response = postService.createPost(request);

//         assertFalse(response.isSuccess());
//         assertEquals("User does not exist", response.getMessage());
//     }

//     @Test
//     public void testCreatePost_ParentPostDoesNotExist() {
//         User user = new User();
//         user.setUsername("user1");

//         when(userRepository.findByUsername("user1")).thenReturn(user);
//         when(postRepository.findById(1L)).thenReturn(Optional.empty());

//         CreatePostRequest request = new CreatePostRequest("user1", "Title", "Content", 1L);
//         CreatePostResponse response = postService.createPost(request);

//         assertFalse(response.isSuccess());
//         assertEquals("Parent post does not exist", response.getMessage());
//     }

//     @Test
//     public void testCreatePost_ParentPostIsNotSubforum() {
//         Post parentPost = new Post("user1", "Post", null, null, LocalDateTime.now(), PostType.POST);
//         User user = new User();
//         user.setUsername("user1");

//         when(postRepository.findById(1L)).thenReturn(Optional.of(parentPost));
//         when(userRepository.findByUsername("user1")).thenReturn(user);

//         CreatePostRequest request = new CreatePostRequest("user1", "Title", "Content", 1L);
//         CreatePostResponse response = postService.createPost(request);

//         assertFalse(response.isSuccess());
//         assertEquals("Parent post is not a subforum", response.getMessage());
//     }

//     @Test
//     public void testDeletePost_Success() {
//         Post post = new Post("user1", "Title", null, "Content", LocalDateTime.now(), PostType.POST);

//         when(postRepository.findById(1L)).thenReturn(Optional.of(post));

//         GeneralDeleteRequest request = new GeneralDeleteRequest(1L, "user1");
//         GeneralDeleteResponse response = postService.deletePost(request);

//         assertTrue(response.isSuccess());
//         assertEquals("Post deleted successfully", response.getMessage());
//     }

//     @Test
//     public void testDeletePost_PostDoesNotExist() {
//         when(postRepository.findById(1L)).thenReturn(Optional.empty());

//         GeneralDeleteRequest request = new GeneralDeleteRequest(1L, "user1");
//         GeneralDeleteResponse response = postService.deletePost(request);

//         assertFalse(response.isSuccess());
//         assertEquals("Post does not exist", response.getMessage());
//     }

//     @Test
//     public void testDeletePost_NotAuthorized() {
//         Post post = new Post("user2", "Title", null, "Content", LocalDateTime.now(), PostType.POST);

//         when(postRepository.findById(1L)).thenReturn(Optional.of(post));

//         GeneralDeleteRequest request = new GeneralDeleteRequest(1L, "user1");
//         GeneralDeleteResponse response = postService.deletePost(request);

//         assertFalse(response.isSuccess());
//         assertEquals("You are not authorized to delete this post", response.getMessage());
//     }

//     @Test
//     public void testEditPost_Success() {
//         Post post = new Post("user1", "Title", null, "Content", LocalDateTime.now(), PostType.POST);

//         when(postRepository.findById(1L)).thenReturn(Optional.of(post));

//         EditPostRequest request = new EditPostRequest(1L, "user1", "New Title", "New Content");
//         EditPostResponse response = postService.editPost(request);

//         assertTrue(response.isSuccess());
//         assertEquals("Post edited successfully", response.getMessage());
//     }

//     @Test
//     public void testEditPost_PostDoesNotExist() {
//         when(postRepository.findById(1L)).thenReturn(Optional.empty());

//         EditPostRequest request = new EditPostRequest(1L, "user1", "New Title", "New Content");
//         EditPostResponse response = postService.editPost(request);

//         assertFalse(response.isSuccess());
//         assertEquals("Post does not exist", response.getMessage());
//     }

//     @Test
//     public void testEditPost_NotAuthorized() {
//         Post post = new Post("user2", "Title", null, "Content", LocalDateTime.now(), PostType.POST);

//         when(postRepository.findById(1L)).thenReturn(Optional.of(post));

//         EditPostRequest request = new EditPostRequest(1L, "user1", "New Title", "New Content");
//         EditPostResponse response = postService.editPost(request);

//         assertFalse(response.isSuccess());
//         assertEquals("You are not authorized to edit this post", response.getMessage());
//     }

//     @Test
//     public void testEditPost_PostIsNotPost() {
//         Post post = new Post("user1", "Title", null, "Content", LocalDateTime.now(), PostType.COMMENT);

//         when(postRepository.findById(1L)).thenReturn(Optional.of(post));

//         EditPostRequest request = new EditPostRequest(1L, "user1", "New Title", "New Content");
//         EditPostResponse response = postService.editPost(request);

//         assertFalse(response.isSuccess());
//         assertEquals("Post is not a post", response.getMessage());
//     }
// }