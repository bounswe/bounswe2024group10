package service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.springframework.web.client.RestTemplate;

import com.bounswe2024group10.Tradeverse.dto.post.CreatePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.CreatePostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.DeletePostRequest;
import com.bounswe2024group10.Tradeverse.dto.post.DeletePostResponse;
import com.bounswe2024group10.Tradeverse.dto.post.GetPostResponse;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.Subforum;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.AssetRepository;
import com.bounswe2024group10.Tradeverse.repository.CommentRepository;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.SubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.bounswe2024group10.Tradeverse.service.PostService;

public class PostServiceUnitTest {

    @InjectMocks
    private PostService postService;

    @Mock
    private PostRepository postRepository;

    @Mock
    private AssetRepository assetRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private SubforumRepository subforumRepository;

    @Mock
    private CommentRepository commentRepository;

    @Mock
    private LikeRepository likeRepository;

    @Mock
    private DislikeRepository dislikeRepository;

    @Mock
    private RestTemplate restTemplate;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreatePost_UserNotAuthenticated() {
        CreatePostRequest request = new CreatePostRequest();
        request.setTitle("Test Title");
        request.setContent(new ArrayList<>());
        request.setSubforumID(1L);

        CreatePostResponse result = postService.createPost(request, null);
        assertFalse(result.getIsSuccessful());
        assertEquals("User not authenticated", result.getMessage());
    }

    @Test
    public void testCreatePost_InvalidRequest() {
        CreatePostRequest request = new CreatePostRequest();
        request.setTitle(null);
        request.setContent(new ArrayList<>());
        request.setSubforumID(1L);

        CreatePostResponse result = postService.createPost(request, "testuser");
        assertFalse(result.getIsSuccessful());
        assertEquals("Invalid request", result.getMessage());
    }

    @Test
    public void testCreatePost_UserNotFound() {
        CreatePostRequest request = new CreatePostRequest();
        request.setTitle("Test Title");
        request.setContent(new ArrayList<>());
        request.setSubforumID(1L);

        when(userRepository.findByUsername("testuser")).thenReturn(null);

        CreatePostResponse result = postService.createPost(request, "testuser");
        assertFalse(result.getIsSuccessful());
        assertEquals("User not found", result.getMessage());
    }

    @Test
    public void testCreatePost_SubforumNotFound() {
        CreatePostRequest request = new CreatePostRequest();
        request.setTitle("Test Title");
        request.setContent(new ArrayList<>());
        request.setSubforumID(1L);

        when(userRepository.findByUsername("testuser")).thenReturn(new User());
        when(subforumRepository.findById(1L)).thenReturn(Optional.empty());

        CreatePostResponse result = postService.createPost(request, "testuser");
        assertFalse(result.getIsSuccessful());
        assertEquals("Subforum not found", result.getMessage());
    }

    @Test
    public void testCreatePost_Success() {
        CreatePostRequest request = new CreatePostRequest();
        request.setTitle("Test Title");
        request.setContent(new ArrayList<>());
        request.setSubforumID(1L);

        User user = new User();
        user.setUsername("testuser");

        Subforum subforum = new Subforum();
        subforum.setId(1L);

        when(userRepository.findByUsername("testuser")).thenReturn(user);
        when(subforumRepository.findById(1L)).thenReturn(Optional.of(subforum));

        CreatePostResponse result = postService.createPost(request, "testuser");
        assertTrue(result.getIsSuccessful());
        assertEquals("Post created successfully", result.getMessage());
    }

    @Test
    public void testDeletePost_PostNotFound() {
        DeletePostRequest request = new DeletePostRequest();
        request.setPostId(1L);

        when(postRepository.findById(1L)).thenReturn(Optional.empty());

        DeletePostResponse result = postService.deletePost(request, "testuser");
        assertFalse(result.getIsSuccessful());
        assertEquals("Post not found", result.getMessage());
    }

    @Test
    public void testDeletePost_UserNotAuthorized() {
        DeletePostRequest request = new DeletePostRequest();
        request.setPostId(1L);

        User user = new User();
        user.setUsername("testuser");
        user.setIsAdmin(false);

        Post post = new Post();
        post.setId(1L);
        post.setCreatedBy("anotheruser");

        when(postRepository.findById(1L)).thenReturn(Optional.of(post));
        when(userRepository.findByUsername("testuser")).thenReturn(user);

        DeletePostResponse result = postService.deletePost(request, "testuser");
        assertFalse(result.getIsSuccessful());
        assertEquals("User does not have permission to delete this post", result.getMessage());
    }

    @Test
    public void testDeletePost_Success() {
        DeletePostRequest request = new DeletePostRequest();
        request.setPostId(1L);

        User user = new User();
        user.setUsername("testuser");
        user.setIsAdmin(false);

        Post post = new Post();
        post.setId(1L);
        post.setCreatedBy("testuser");
        post.setContent(new ArrayList<>());

        when(postRepository.findById(1L)).thenReturn(Optional.of(post));
        when(userRepository.findByUsername("testuser")).thenReturn(user);

        DeletePostResponse result = postService.deletePost(request, "testuser");
        assertTrue(result.getIsSuccessful());
        assertEquals("Post deleted successfully", result.getMessage());
    }

    @Test
    public void testDeletePost_AdminSuccess() {
        DeletePostRequest request = new DeletePostRequest();
        request.setPostId(1L);

        User user = new User();
        user.setUsername("adminuser");
        user.setIsAdmin(true);

        Post post = new Post();
        post.setId(1L);
        post.setCreatedBy("anotheruser");
        post.setContent(new ArrayList<>());

        when(postRepository.findById(1L)).thenReturn(Optional.of(post));
        when(userRepository.findByUsername("adminuser")).thenReturn(user);

        DeletePostResponse result = postService.deletePost(request, "adminuser");
        assertTrue(result.getIsSuccessful());
        assertEquals("Post deleted successfully", result.getMessage());
    }

    @Test
    public void testConvertToGetPostResponse() {
        Post post = new Post();
        post.setId(1L);
        post.setTitle("Test Title");
        post.setContent(new ArrayList<>());
        post.setCreatedBy("testuser");
        post.setCreationDate(LocalDateTime.now());
        post.setViewCount(0);
        post.setSubforumID(1L);

        User creatorUser = new User();
        creatorUser.setUsername("testuser");
        creatorUser.setProfilePhoto("testphoto.jpg");
        creatorUser.setName("Test User");

        Subforum subforum = new Subforum();
        subforum.setId(1L);

        when(userRepository.findByUsername("testuser")).thenReturn(creatorUser);
        when(subforumRepository.findById(1L)).thenReturn(Optional.of(subforum));
        when(likeRepository.countByPostID(1L)).thenReturn(10);
        when(dislikeRepository.countByPostID(1L)).thenReturn(2);
        when(commentRepository.countByPostID(1L)).thenReturn(5);
        when(likeRepository.existsByUsernameAndPostID("testuser", 1L)).thenReturn(true);
        when(dislikeRepository.existsByUsernameAndPostID("testuser", 1L)).thenReturn(false);

        GetPostResponse response = postService.convertToGetPostResponse(post, "testuser");

        assertEquals(1L, response.getId());
        assertEquals("Test Title", response.getTitle());
        assertEquals("testuser", response.getCreatedBy());
        assertEquals(10, response.getLikeCount());
        assertEquals(2, response.getDislikeCount());
        assertEquals(5, response.getCommentCount());
        assertTrue(response.getIsLikedByUser());
        assertFalse(response.getIsDislikedByUser());
        assertEquals("testphoto.jpg", response.getAuthor().getUserPhoto());
        assertEquals("Test User", response.getAuthor().getName());
        assertEquals(subforum, response.getSubforum());
    }

    @Test
    public void testGetPostsBySubforum_NoPosts() {
        Long subforumID = 1L;
        String username = "testuser";

        when(postRepository.findAllBySubforumIDOrderByCreationDateDesc(subforumID)).thenReturn(new ArrayList<>());

        List<GetPostResponse> result = postService.getPostsBySubforum(subforumID, username);
        assertTrue(result.isEmpty());
    }

    @Test
    public void testGetPostsBySubforum_WithPosts() {
        Long subforumID = 1L;
        String username = "testuser";

        Post post1 = new Post();
        post1.setId(1L);
        post1.setTitle("Test Title 1");
        post1.setContent(new ArrayList<>());
        post1.setCreatedBy("testuser");
        post1.setCreationDate(LocalDateTime.now());
        post1.setViewCount(0);
        post1.setSubforumID(subforumID);

        Post post2 = new Post();
        post2.setId(2L);
        post2.setTitle("Test Title 2");
        post2.setContent(new ArrayList<>());
        post2.setCreatedBy("testuser");
        post2.setCreationDate(LocalDateTime.now());
        post2.setViewCount(0);
        post2.setSubforumID(subforumID);

        List<Post> posts = new ArrayList<>();
        posts.add(post1);
        posts.add(post2);

        User creatorUser = new User();
        creatorUser.setUsername("testuser");
        creatorUser.setProfilePhoto("testphoto.jpg");
        creatorUser.setName("Test User");

        Subforum subforum = new Subforum();
        subforum.setId(subforumID);

        when(postRepository.findAllBySubforumIDOrderByCreationDateDesc(subforumID)).thenReturn(posts);
        when(userRepository.findByUsername("testuser")).thenReturn(creatorUser);
        when(subforumRepository.findById(subforumID)).thenReturn(Optional.of(subforum));
        when(likeRepository.countByPostID(1L)).thenReturn(10);
        when(dislikeRepository.countByPostID(1L)).thenReturn(2);
        when(commentRepository.countByPostID(1L)).thenReturn(5);
        when(likeRepository.existsByUsernameAndPostID("testuser", 1L)).thenReturn(true);
        when(dislikeRepository.existsByUsernameAndPostID("testuser", 1L)).thenReturn(false);
        when(likeRepository.countByPostID(2L)).thenReturn(8);
        when(dislikeRepository.countByPostID(2L)).thenReturn(1);
        when(commentRepository.countByPostID(2L)).thenReturn(3);
        when(likeRepository.existsByUsernameAndPostID("testuser", 2L)).thenReturn(false);
        when(dislikeRepository.existsByUsernameAndPostID("testuser", 2L)).thenReturn(true);

        List<GetPostResponse> result = postService.getPostsBySubforum(subforumID, username);

        assertEquals(2, result.size());

        GetPostResponse response1 = result.get(0);
        assertEquals(1L, response1.getId());
        assertEquals("Test Title 1", response1.getTitle());
        assertEquals("testuser", response1.getCreatedBy());
        assertEquals(10, response1.getLikeCount());
        assertEquals(2, response1.getDislikeCount());
        assertEquals(5, response1.getCommentCount());
        assertTrue(response1.getIsLikedByUser());
        assertFalse(response1.getIsDislikedByUser());
        assertEquals("testphoto.jpg", response1.getAuthor().getUserPhoto());
        assertEquals("Test User", response1.getAuthor().getName());
        assertEquals(subforum, response1.getSubforum());

        GetPostResponse response2 = result.get(1);
        assertEquals(2L, response2.getId());
        assertEquals("Test Title 2", response2.getTitle());
        assertEquals("testuser", response2.getCreatedBy());
        assertEquals(8, response2.getLikeCount());
        assertEquals(1, response2.getDislikeCount());
        assertEquals(3, response2.getCommentCount());
        assertFalse(response2.getIsLikedByUser());
        assertTrue(response2.getIsDislikedByUser());
        assertEquals("testphoto.jpg", response2.getAuthor().getUserPhoto());
        assertEquals("Test User", response2.getAuthor().getName());
        assertEquals(subforum, response2.getSubforum());
    }

    @Test
    public void testGetPostsByTag_NoPosts() {
        String tag = "testtag";
        String username = "testuser";

        when(postRepository.findByTag(tag)).thenReturn(new ArrayList<>());

        List<GetPostResponse> result = postService.getPostsByTag(tag, username);
        assertTrue(result.isEmpty());
    }

    @Test
    public void testGetPostsByTag_WithPosts() {
        String tag = "testtag";
        String username = "testuser";

        Post post1 = new Post();
        post1.setId(1L);
        post1.setTitle("Test Title 1");
        post1.setContent(new ArrayList<>());
        post1.setCreatedBy("testuser");
        post1.setCreationDate(LocalDateTime.now());
        post1.setViewCount(0);
        post1.setSubforumID(1L);

        Post post2 = new Post();
        post2.setId(2L);
        post2.setTitle("Test Title 2");
        post2.setContent(new ArrayList<>());
        post2.setCreatedBy("testuser");
        post2.setCreationDate(LocalDateTime.now());
        post2.setViewCount(0);
        post2.setSubforumID(1L);

        List<Post> posts = new ArrayList<>();
        posts.add(post1);
        posts.add(post2);

        User creatorUser = new User();
        creatorUser.setUsername("testuser");
        creatorUser.setProfilePhoto("testphoto.jpg");
        creatorUser.setName("Test User");

        Subforum subforum = new Subforum();
        subforum.setId(1L);

        when(postRepository.findByTag(tag)).thenReturn(posts);
        when(userRepository.findByUsername("testuser")).thenReturn(creatorUser);
        when(subforumRepository.findById(1L)).thenReturn(Optional.of(subforum));
        when(likeRepository.countByPostID(1L)).thenReturn(10);
        when(dislikeRepository.countByPostID(1L)).thenReturn(2);
        when(commentRepository.countByPostID(1L)).thenReturn(5);
        when(likeRepository.existsByUsernameAndPostID("testuser", 1L)).thenReturn(true);
        when(dislikeRepository.existsByUsernameAndPostID("testuser", 1L)).thenReturn(false);
        when(likeRepository.countByPostID(2L)).thenReturn(8);
        when(dislikeRepository.countByPostID(2L)).thenReturn(1);
        when(commentRepository.countByPostID(2L)).thenReturn(3);
        when(likeRepository.existsByUsernameAndPostID("testuser", 2L)).thenReturn(false);
        when(dislikeRepository.existsByUsernameAndPostID("testuser", 2L)).thenReturn(true);

        List<GetPostResponse> result = postService.getPostsByTag(tag, username);

        assertEquals(2, result.size());

        GetPostResponse response1 = result.get(0);
        assertEquals(1L, response1.getId());
        assertEquals("Test Title 1", response1.getTitle());
        assertEquals("testuser", response1.getCreatedBy());
        assertEquals(10, response1.getLikeCount());
        assertEquals(2, response1.getDislikeCount());
        assertEquals(5, response1.getCommentCount());
        assertTrue(response1.getIsLikedByUser());
        assertFalse(response1.getIsDislikedByUser());
        assertEquals("testphoto.jpg", response1.getAuthor().getUserPhoto());
        assertEquals("Test User", response1.getAuthor().getName());
        assertEquals(subforum, response1.getSubforum());

        GetPostResponse response2 = result.get(1);
        assertEquals(2L, response2.getId());
        assertEquals("Test Title 2", response2.getTitle());
        assertEquals("testuser", response2.getCreatedBy());
        assertEquals(8, response2.getLikeCount());
        assertEquals(1, response2.getDislikeCount());
        assertEquals(3, response2.getCommentCount());
        assertFalse(response2.getIsLikedByUser());
        assertTrue(response2.getIsDislikedByUser());
        assertEquals("testphoto.jpg", response2.getAuthor().getUserPhoto());
        assertEquals("Test User", response2.getAuthor().getName());
        assertEquals(subforum, response2.getSubforum());
    }

    @Test
    public void testGetForYouPosts_UserNotFound() {
        String username = "testuser";

        when(userRepository.findByUsername(username)).thenReturn(null);

        List<GetPostResponse> result = postService.getForYouPosts(username);
        assertTrue(result.isEmpty());
    }

    @Test
    public void testGetForYouPosts_NoPosts() {
        String username = "testuser";
        User user = new User();
        user.setUsername(username);
        user.setTag(1);

        when(userRepository.findByUsername(username)).thenReturn(user);
        when(postRepository.findTop100ByOrderByCreationDateDesc()).thenReturn(new ArrayList<>());

        List<GetPostResponse> result = postService.getForYouPosts(username);
        assertTrue(result.isEmpty());
    }

    @Test
    public void testGetForYouPosts_WithPosts() {
        String username = "testuser";
        User user = new User();
        user.setUsername(username);
        user.setTag(1);

        Post post1 = new Post();
        post1.setId(1L);
        post1.setTitle("Test Title 1");
        post1.setContent(new ArrayList<>());
        post1.setCreatedBy("creator1");
        post1.setCreationDate(LocalDateTime.now());
        post1.setViewCount(0);
        post1.setSubforumID(1L);

        Post post2 = new Post();
        post2.setId(2L);
        post2.setTitle("Test Title 2");
        post2.setContent(new ArrayList<>());
        post2.setCreatedBy("creator2");
        post2.setCreationDate(LocalDateTime.now());
        post2.setViewCount(0);
        post2.setSubforumID(1L);

        List<Post> posts = new ArrayList<>();
        posts.add(post1);
        posts.add(post2);

        User creator1 = new User();
        creator1.setUsername("creator1");
        creator1.setTag(1);

        User creator2 = new User();
        creator2.setUsername("creator2");
        creator2.setTag(2);

        when(userRepository.findByUsername(username)).thenReturn(user);
        when(postRepository.findTop100ByOrderByCreationDateDesc()).thenReturn(posts);
        when(userRepository.findByUsername("creator1")).thenReturn(creator1);
        when(userRepository.findByUsername("creator2")).thenReturn(creator2);
        when(commentRepository.findByPostID(1L)).thenReturn(new ArrayList<>());
        when(commentRepository.findByPostID(2L)).thenReturn(new ArrayList<>());
        when(likeRepository.countByPostID(1L)).thenReturn(10);
        when(dislikeRepository.countByPostID(1L)).thenReturn(2);
        when(likeRepository.countByPostID(2L)).thenReturn(8);
        when(dislikeRepository.countByPostID(2L)).thenReturn(1);

        List<GetPostResponse> result = postService.getForYouPosts(username);

        assertEquals(2, result.size());

        GetPostResponse response1 = result.get(0);
        assertEquals(1L, response1.getId());
        assertEquals("Test Title 1", response1.getTitle());
        assertEquals("creator1", response1.getCreatedBy());
        assertEquals(10, response1.getLikeCount());
        assertEquals(2, response1.getDislikeCount());
        assertEquals(0, response1.getCommentCount());
        assertFalse(response1.getIsLikedByUser());
        assertFalse(response1.getIsDislikedByUser());

        GetPostResponse response2 = result.get(1);
        assertEquals(2L, response2.getId());
        assertEquals("Test Title 2", response2.getTitle());
        assertEquals("creator2", response2.getCreatedBy());
        assertEquals(8, response2.getLikeCount());
        assertEquals(1, response2.getDislikeCount());
        assertEquals(0, response2.getCommentCount());
        assertFalse(response2.getIsLikedByUser());
        assertFalse(response2.getIsDislikedByUser());
    }

    // @Test
    // public void testAddAssetToPortfolio_AssetNotFound() {
    //     when(assetRepository.existsById(2L)).thenReturn(false);
    //     AddAssetToPortfolioResponse result = portfolioService.addAssetToPortfolio(2L, 100, "testuser");
    //     assertFalse(result.isSuccessful());
    //     assertEquals("Asset not found", result.getMessage());
    // }
    // @Test
    // public void testAddAssetToPortfolio_AssetFound() {
    //     when(assetRepository.existsById(1L)).thenReturn(true);
    //     AddAssetToPortfolioResponse result = portfolioService.addAssetToPortfolio(1L, 100, "testuser");
    //     assertTrue(result.isSuccessful());
    //     assertEquals("Asset found", result.getMessage());
    // }
}
