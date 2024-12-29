package service;

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

import com.bounswe2024group10.Tradeverse.dto.like.GetLikedPostsRequest;
import com.bounswe2024group10.Tradeverse.dto.like.GetLikedPostsResponse;
import com.bounswe2024group10.Tradeverse.dto.like.GetLikersRequest;
import com.bounswe2024group10.Tradeverse.dto.like.GetLikersResponse;
import com.bounswe2024group10.Tradeverse.dto.like.LikePostRequest;
import com.bounswe2024group10.Tradeverse.dto.like.LikePostResponse;
import com.bounswe2024group10.Tradeverse.dto.like.UnlikePostRequest;
import com.bounswe2024group10.Tradeverse.dto.like.UnlikePostResponse;
import com.bounswe2024group10.Tradeverse.model.Like;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.bounswe2024group10.Tradeverse.service.LikeService;

public class LikeServiceUnitTest {

    @InjectMocks
    private LikeService likeService;

    @Mock
    private PostRepository postRepository;

    @Mock
    private UserRepository userRepository;

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
    public void testLikePost_UserDoesNotExist() {
        LikePostRequest request = new LikePostRequest();
        request.setUsername("nonexistentUser");
        request.setPostId(1L);
        when(userRepository.findByUsername(request.getUsername())).thenReturn(null);

        LikePostResponse response = likeService.likePost(request);

        assertFalse(response.isSuccessful());
        assertEquals("User does not exist", response.getMessage());
    }

    @Test
    public void testLikePost_PostDoesNotExist() {
        LikePostRequest request = new LikePostRequest();
        request.setUsername("existingUser");
        request.setPostId(1L);
        User user = new User();
        user.setUsername("existingUser");
        when(userRepository.findByUsername(request.getUsername())).thenReturn(user);
        when(postRepository.findById(request.getPostId())).thenReturn(Optional.empty());

        LikePostResponse response = likeService.likePost(request);

        assertFalse(response.isSuccessful());
        assertEquals("Post does not exist", response.getMessage());
    }

    @Test
    public void testLikePost_AlreadyLiked() {
        LikePostRequest request = new LikePostRequest();
        request.setUsername("existingUser");
        request.setPostId(1L);
        User user = new User();
        user.setUsername("existingUser");
        Post post = new Post();
        post.setId(1L);
        when(userRepository.findByUsername(request.getUsername())).thenReturn(user);
        when(postRepository.findById(request.getPostId())).thenReturn(Optional.of(post));
        when(likeRepository.findByUsernameAndPostID(user.getUsername(), request.getPostId())).thenReturn(new Like());

        LikePostResponse response = likeService.likePost(request);

        assertFalse(response.isSuccessful());
        assertEquals("You have already liked this post", response.getMessage());
    }

    @Test
    public void testLikePost_Success() {
        LikePostRequest request = new LikePostRequest();
        request.setUsername("existingUser");
        request.setPostId(1L);
        User user = new User();
        user.setUsername("existingUser");
        Post post = new Post();
        post.setId(1L);
        when(userRepository.findByUsername(request.getUsername())).thenReturn(user);
        when(postRepository.findById(request.getPostId())).thenReturn(Optional.of(post));
        when(likeRepository.findByUsernameAndPostID(user.getUsername(), request.getPostId())).thenReturn(null);
        when(dislikeRepository.findByUsernameAndPostID(user.getUsername(), request.getPostId())).thenReturn(null);

        LikePostResponse response = likeService.likePost(request);

        assertTrue(response.isSuccessful());
        assertEquals("Post liked successfully", response.getMessage());
    }

    @Test
    public void testUnlikePost_UserDoesNotExist() {
        UnlikePostRequest request = new UnlikePostRequest();
        request.setUsername("nonexistentUser");
        request.setPostId(1L);
        when(userRepository.findByUsername(request.getUsername())).thenReturn(null);

        UnlikePostResponse response = likeService.unlikePost(request);

        assertFalse(response.isSuccessful());
        assertEquals("User does not exist", response.getMessage());
    }

    @Test
    public void testUnlikePost_PostDoesNotExist() {
        UnlikePostRequest request = new UnlikePostRequest();
        request.setUsername("existingUser");
        request.setPostId(1L);
        User user = new User();
        user.setUsername("existingUser");
        when(userRepository.findByUsername(request.getUsername())).thenReturn(user);
        when(postRepository.findById(request.getPostId())).thenReturn(Optional.empty());

        UnlikePostResponse response = likeService.unlikePost(request);

        assertFalse(response.isSuccessful());
        assertEquals("Post does not exist", response.getMessage());
    }

    @Test
    public void testUnlikePost_NotLiked() {
        UnlikePostRequest request = new UnlikePostRequest();
        request.setUsername("existingUser");
        request.setPostId(1L);
        User user = new User();
        user.setUsername("existingUser");
        Post post = new Post();
        post.setId(1L);
        when(userRepository.findByUsername(request.getUsername())).thenReturn(user);
        when(postRepository.findById(request.getPostId())).thenReturn(Optional.of(post));
        when(likeRepository.findByUsernameAndPostID(user.getUsername(), request.getPostId())).thenReturn(null);

        UnlikePostResponse response = likeService.unlikePost(request);

        assertFalse(response.isSuccessful());
        assertEquals("You have not liked this post", response.getMessage());
    }

    @Test
    public void testUnlikePost_Success() {
        UnlikePostRequest request = new UnlikePostRequest();
        request.setUsername("existingUser");
        request.setPostId(1L);
        User user = new User();
        user.setUsername("existingUser");
        Post post = new Post();
        post.setId(1L);
        Like like = new Like();
        when(userRepository.findByUsername(request.getUsername())).thenReturn(user);
        when(postRepository.findById(request.getPostId())).thenReturn(Optional.of(post));
        when(likeRepository.findByUsernameAndPostID(user.getUsername(), request.getPostId())).thenReturn(like);

        UnlikePostResponse response = likeService.unlikePost(request);

        assertTrue(response.isSuccessful());
        assertEquals("Post unliked successfully", response.getMessage());
    }

    @Test
    public void testGetLikedPosts_UserDoesNotExist() {
        GetLikedPostsRequest request = new GetLikedPostsRequest();
        request.setUsername("nonexistentUser");
        when(userRepository.findByUsername(request.getUsername())).thenReturn(null);

        GetLikedPostsResponse response = likeService.getLikedPosts(request);

        assertFalse(response.isSuccessful());
        assertEquals("User does not exist", response.getMessage());
        assertEquals(null, response.getLikedPosts());
    }

    @Test
    public void testGetLikedPosts_Success() {
        GetLikedPostsRequest request = new GetLikedPostsRequest();
        request.setUsername("existingUser");
        User user = new User();
        user.setUsername("existingUser");
        Like like1 = new Like("existingUser", 1L);
        Like like2 = new Like("existingUser", 2L);
        Post post1 = new Post();
        post1.setId(1L);
        Post post2 = new Post();
        post2.setId(2L);
        when(userRepository.findByUsername(request.getUsername())).thenReturn(user);
        when(likeRepository.findByUsername(user.getUsername())).thenReturn(List.of(like1, like2));
        when(postRepository.findAllById(List.of(1L, 2L))).thenReturn(List.of(post1, post2));

        GetLikedPostsResponse response = likeService.getLikedPosts(request);

        assertTrue(response.isSuccessful());
        assertEquals("Liked posts retrieved successfully", response.getMessage());
        assertEquals(2, response.getLikedPosts().size());
        assertTrue(response.getLikedPosts().contains(post1));
        assertTrue(response.getLikedPosts().contains(post2));
    }

    @Test
    public void testGetLikersOfPost_PostDoesNotExist() {
        GetLikersRequest request = new GetLikersRequest();
        request.setPostId(1L);
        when(postRepository.findById(request.getPostId())).thenReturn(Optional.empty());

        GetLikersResponse response = likeService.getLikersOfPost(request);

        assertFalse(response.isSuccessful());
        assertEquals("Post does not exist", response.getMessage());
        assertEquals(null, response.getLikers());
    }

    @Test
    public void testGetLikersOfPost_Success() {
        GetLikersRequest request = new GetLikersRequest();
        request.setPostId(1L);
        Post post = new Post();
        post.setId(1L);
        Like like1 = new Like("user1", 1L);
        Like like2 = new Like("user2", 1L);
        when(postRepository.findById(request.getPostId())).thenReturn(Optional.of(post));
        when(likeRepository.findByPostID(post.getId())).thenReturn(List.of(like1, like2));

        GetLikersResponse response = likeService.getLikersOfPost(request);

        assertTrue(response.isSuccessful());
        assertEquals("Likers retrieved successfully", response.getMessage());
        assertEquals(2, response.getLikers().size());
        assertTrue(response.getLikers().contains("user1"));
        assertTrue(response.getLikers().contains("user2"));
    }

}
