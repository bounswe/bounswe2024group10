package service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;

import com.bounswe2024group10.Tradeverse.dto.user.GetProfileResponse;
import com.bounswe2024group10.Tradeverse.dto.user.GetUserDetailsResponse;
import com.bounswe2024group10.Tradeverse.dto.user.SetUserDetailsRequest;
import com.bounswe2024group10.Tradeverse.dto.user.SetUserDetailsResponse;
import com.bounswe2024group10.Tradeverse.model.Follow;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.CommentRepository;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.bounswe2024group10.Tradeverse.service.PostService;
import com.bounswe2024group10.Tradeverse.service.UserService;

public class UserServiceUnitTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private PostRepository postRepository;

    @Mock
    private FollowRepository followRepository;

    @Mock
    private LikeRepository likeRepository;

    @Mock
    private DislikeRepository dislikeRepository;

    @Mock
    private CommentRepository commentRepository;

    @Mock
    private PostService postService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        MockitoAnnotations.openMocks(postService);
    }

    @Test
    public void testGetUserDetails_UserExists() {
        User user = new User();
        user.setUsername("testuser");
        user.setEmail("testuser@example.com");
        user.setName("Test User");
        user.setProfilePhoto("profile.jpg");
        user.setTag(0);
        user.setBio("This is a bio");
        user.setIsAdmin(false);

        when(userRepository.findByUsername("testuser")).thenReturn(user);

        GetUserDetailsResponse response = userService.getUserDetails("testuser");

        assertNotNull(response);
        assertEquals("testuser@example.com", response.getEmail());
        assertEquals("testuser", response.getUsername());
        assertEquals("Test User", response.getName());
        assertEquals("profile.jpg", response.getProfilePhoto());
        assertEquals(0, response.getTag());
        assertEquals("This is a bio", response.getBio());
        assertFalse(response.isAdmin());
    }

    @Test
    public void testGetUserDetails_UserDoesNotExist() {
        when(userRepository.findByUsername("nonexistentuser")).thenReturn(null);

        GetUserDetailsResponse response = userService.getUserDetails("nonexistentuser");

        assertNull(response);
    }

    @Test
    public void testSetUserDetails_UserExists() {
        User user = new User();
        user.setUsername("testuser");
        user.setEmail("testuser@example.com");
        user.setName("Test User");
        user.setProfilePhoto("profile.jpg");
        user.setTag(0);
        user.setBio("This is a bio");
        user.setIsAdmin(false);

        SetUserDetailsRequest request = new SetUserDetailsRequest();
        request.setEmail("newemail@example.com");
        request.setBio("New bio");
        request.setTag(1);

        when(userRepository.findByUsername("testuser")).thenReturn(user);

        SetUserDetailsResponse response = userService.setUserDetails(request, "testuser");

        assertNotNull(response);
        assertEquals(true, response.getIsSuccessful());
        assertEquals("User details updated successfully", response.getMessage());
        assertEquals("newemail@example.com", user.getEmail());
        assertEquals("New bio", user.getBio());
        assertEquals(1, user.getTag());
    }

    @Test
    public void testSetUserDetails_UserDoesNotExist() {
        SetUserDetailsRequest request = new SetUserDetailsRequest();
        request.setEmail("newemail@example.com");
        request.setBio("New bio");
        request.setTag(1);

        when(userRepository.findByUsername("nonexistentuser")).thenReturn(null);

        SetUserDetailsResponse response = userService.setUserDetails(request, "nonexistentuser");

        assertNotNull(response);
        assertEquals(false, response.getIsSuccessful());
        assertEquals("User not found", response.getMessage());
    }

    @Test
    public void testSetUserDetails_Email() throws IOException {
        User user = new User();
        user.setUsername("testuser");

        SetUserDetailsRequest request = new SetUserDetailsRequest();
        request.setEmail("testuser@tradeverse.com");

        when(userRepository.findByUsername("testuser")).thenReturn(user);

        SetUserDetailsResponse response = userService.setUserDetails(request, "testuser");

        assertNotNull(response);
        assertEquals(true, response.getIsSuccessful());
        assertEquals("User details updated successfully", response.getMessage());
        assertNotNull(user.getEmail());
    }

    @Test
    public void testGetProfile_UserExists() {
        User user = new User();
        user.setUsername("testuser");
        user.setName("Test User");
        user.setProfilePhoto("profile.jpg");

        when(userRepository.findByUsername("testuser")).thenReturn(user);
        when(postRepository.countByCreatedBy("testuser")).thenReturn(10);
        when(followRepository.countByFollowedUsername("testuser")).thenReturn(5);
        when(followRepository.findByFollowerUsernameAndFollowedUsername("requester", "testuser")).thenReturn(new Follow());

        List<Post> recentPosts = new ArrayList<>();
        Post post = new Post();
        post.setId(1L);
        post.setTitle("Test Post");
        recentPosts.add(post);

        when(postRepository.findTop100ByCreatedByOrderByCreationDateDesc("testuser")).thenReturn(recentPosts);

        GetProfileResponse response = userService.getProfile("testuser", "requester");

        assertNotNull(response);
        assertEquals("testuser", response.getUsername());
        assertEquals("Test User", response.getName());
        assertEquals("profile.jpg", response.getProfilePhoto());
        assertEquals(10, response.getPostCount());
        assertEquals(5, response.getFollowerCount());
        assertEquals(true, response.isFollowing());
        assertNotNull(response.getRecentPosts());
        assertNotNull(response.getPopularPosts());
    }

    @Test
    public void testGetProfile_UserDoesNotExist() {
        when(userRepository.findByUsername("nonexistentuser")).thenReturn(null);

        GetProfileResponse response = userService.getProfile("nonexistentuser", "requester");

        assertNotNull(response);
        assertEquals(false, response.isSuccess());
        assertEquals("User not found", response.getMessage());
    }

}
