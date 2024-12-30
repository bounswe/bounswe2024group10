package service;

import java.util.List;

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

import com.bounswe2024group10.Tradeverse.dto.follow.FollowUserRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.FollowUserResponse;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowersRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowersResponse;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowingsRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.GetFollowingsResponse;
import com.bounswe2024group10.Tradeverse.dto.follow.UnfollowUserRequest;
import com.bounswe2024group10.Tradeverse.dto.follow.UnfollowUserResponse;
import com.bounswe2024group10.Tradeverse.model.Follow;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.FollowRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.bounswe2024group10.Tradeverse.service.FollowService;

public class FollowServiceUnitTest {

    @InjectMocks
    private FollowService followService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private FollowRepository followRepository;

    @Mock
    private RestTemplate restTemplate;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFollowUser_Success() {
        FollowUserRequest request = new FollowUserRequest();
        request.setFollowedUsername("followedUsername");
        request.setFollowerUsername("followerUsername");
        User follower = new User();
        follower.setUsername("followerUsername");
        User followed = new User();
        followed.setUsername("followedUsername");

        when(userRepository.findByUsername("followerUsername")).thenReturn(follower);
        when(userRepository.findByUsername("followedUsername")).thenReturn(followed);

        FollowUserResponse response = followService.followUser(request);

        assertTrue(response.isSuccessful());
        assertEquals("Followed successfully", response.getMessage());
    }

    @Test
    public void testFollowUser_UserDoesNotExist() {
        FollowUserRequest request = new FollowUserRequest();
        request.setFollowedUsername("followedUsername");
        request.setFollowerUsername("followerUsername");

        when(userRepository.findByUsername("followerUsername")).thenReturn(null);
        when(userRepository.findByUsername("followedUsername")).thenReturn(null);

        FollowUserResponse response = followService.followUser(request);

        assertFalse(response.isSuccessful());
        assertEquals("User does not exist", response.getMessage());
    }

    @Test
    public void testUnfollowUser_Success() {
        UnfollowUserRequest request = new UnfollowUserRequest();
        request.setFollowedUsername("followedUsername");
        request.setFollowerUsername("followerUsername");
        User follower = new User();
        follower.setUsername("followerUsername");
        User followed = new User();
        followed.setUsername("followedUsername");
        Follow follow = new Follow("followerUsername", "followedUsername");

        when(userRepository.findByUsername("followerUsername")).thenReturn(follower);
        when(userRepository.findByUsername("followedUsername")).thenReturn(followed);
        when(followRepository.findByFollowerUsernameAndFollowedUsername("followerUsername", "followedUsername")).thenReturn(follow);

        UnfollowUserResponse response = followService.unfollowUser(request);

        assertTrue(response.isSuccessful());
        assertEquals("Unfollowed successfully", response.getMessage());
    }

    @Test
    public void testUnfollowUser_UserDoesNotExist() {
        UnfollowUserRequest request = new UnfollowUserRequest();
        request.setFollowedUsername("followedUsername");
        request.setFollowerUsername("followerUsername");

        when(userRepository.findByUsername("followerUsername")).thenReturn(null);
        when(userRepository.findByUsername("followedUsername")).thenReturn(null);

        UnfollowUserResponse response = followService.unfollowUser(request);

        assertFalse(response.isSuccessful());
        assertEquals("User does not exist", response.getMessage());
    }

    @Test
    public void testUnfollowUser_NotFollowing() {
        UnfollowUserRequest request = new UnfollowUserRequest();
        request.setFollowedUsername("followedUsername");
        request.setFollowerUsername("followerUsername");
        User follower = new User();
        follower.setUsername("followerUsername");
        User followed = new User();
        followed.setUsername("followedUsername");

        when(userRepository.findByUsername("followerUsername")).thenReturn(follower);
        when(userRepository.findByUsername("followedUsername")).thenReturn(followed);
        when(followRepository.findByFollowerUsernameAndFollowedUsername("followerUsername", "followedUsername")).thenReturn(null);

        UnfollowUserResponse response = followService.unfollowUser(request);

        assertFalse(response.isSuccessful());
        assertEquals("You are not following this user", response.getMessage());
    }

    @Test
    public void testGetFollowings_Success() {
        GetFollowingsRequest request = new GetFollowingsRequest();
        request.setUsername("username");
        User user = new User();
        user.setUsername("username");
        Follow follow1 = new Follow("username", "followedUsername1");
        Follow follow2 = new Follow("username", "followedUsername2");
        User followedUser1 = new User();
        followedUser1.setUsername("followedUsername1");
        followedUser1.setName("Followed User 1");
        followedUser1.setProfilePhoto("photo1.jpg");
        User followedUser2 = new User();
        followedUser2.setUsername("followedUsername2");
        followedUser2.setName("Followed User 2");
        followedUser2.setProfilePhoto("photo2.jpg");

        when(userRepository.findByUsername("username")).thenReturn(user);
        when(followRepository.findByFollowerUsername("username")).thenReturn(List.of(follow1, follow2));
        when(userRepository.findByUsername("followedUsername1")).thenReturn(followedUser1);
        when(userRepository.findByUsername("followedUsername2")).thenReturn(followedUser2);

        GetFollowingsResponse response = followService.getFollowings(request);

        assertTrue(response.isSuccessful());
        assertEquals("Followings retrieved successfully", response.getMessage());
        assertEquals(2, response.getFollowings().size());
        assertEquals("followedUsername1", response.getFollowings().get(0).getUsername());
        assertEquals("Followed User 1", response.getFollowings().get(0).getName());
        assertEquals("photo1.jpg", response.getFollowings().get(0).getUserPhoto());
        assertEquals("followedUsername2", response.getFollowings().get(1).getUsername());
        assertEquals("Followed User 2", response.getFollowings().get(1).getName());
        assertEquals("photo2.jpg", response.getFollowings().get(1).getUserPhoto());
    }

    @Test
    public void testGetFollowings_UserDoesNotExist() {
        GetFollowingsRequest request = new GetFollowingsRequest();
        request.setUsername("username");

        when(userRepository.findByUsername("username")).thenReturn(null);

        GetFollowingsResponse response = followService.getFollowings(request);

        assertFalse(response.isSuccessful());
        assertEquals("User does not exist", response.getMessage());
        assertEquals(null, response.getFollowings());
    }

    @Test
    public void testGetFollowings_NoFollowings() {
        GetFollowingsRequest request = new GetFollowingsRequest();
        request.setUsername("username");
        User user = new User();
        user.setUsername("username");

        when(userRepository.findByUsername("username")).thenReturn(user);
        when(followRepository.findByFollowerUsername("username")).thenReturn(List.of());

        GetFollowingsResponse response = followService.getFollowings(request);

        assertTrue(response.isSuccessful());
        assertEquals("Followings retrieved successfully", response.getMessage());
        assertEquals(0, response.getFollowings().size());
    }

    @Test
    public void testGetFollowers_Success() {
        GetFollowersRequest request = new GetFollowersRequest();
        request.setUsername("username");
        User user = new User();
        user.setUsername("username");
        Follow follow1 = new Follow("followerUsername1", "username");
        Follow follow2 = new Follow("followerUsername2", "username");
        User followerUser1 = new User();
        followerUser1.setUsername("followerUsername1");
        followerUser1.setName("Follower User 1");
        followerUser1.setProfilePhoto("photo1.jpg");
        User followerUser2 = new User();
        followerUser2.setUsername("followerUsername2");
        followerUser2.setName("Follower User 2");
        followerUser2.setProfilePhoto("photo2.jpg");

        when(userRepository.findByUsername("username")).thenReturn(user);
        when(followRepository.findByFollowedUsername("username")).thenReturn(List.of(follow1, follow2));
        when(userRepository.findByUsername("followerUsername1")).thenReturn(followerUser1);
        when(userRepository.findByUsername("followerUsername2")).thenReturn(followerUser2);

        GetFollowersResponse response = followService.getFollowers(request);

        assertTrue(response.isSuccessful());
        assertEquals("Followers retrieved successfully", response.getMessage());
        assertEquals(2, response.getFollowers().size());
        assertEquals("followerUsername1", response.getFollowers().get(0).getUsername());
        assertEquals("Follower User 1", response.getFollowers().get(0).getName());
        assertEquals("photo1.jpg", response.getFollowers().get(0).getUserPhoto());
        assertEquals("followerUsername2", response.getFollowers().get(1).getUsername());
        assertEquals("Follower User 2", response.getFollowers().get(1).getName());
        assertEquals("photo2.jpg", response.getFollowers().get(1).getUserPhoto());
    }

    @Test
    public void testGetFollowers_UserDoesNotExist() {
        GetFollowersRequest request = new GetFollowersRequest();
        request.setUsername("username");

        when(userRepository.findByUsername("username")).thenReturn(null);

        GetFollowersResponse response = followService.getFollowers(request);

        assertFalse(response.isSuccessful());
        assertEquals("User does not exist", response.getMessage());
        assertEquals(null, response.getFollowers());
    }

    @Test
    public void testGetFollowers_NoFollowers() {
        GetFollowersRequest request = new GetFollowersRequest();
        request.setUsername("username");
        User user = new User();
        user.setUsername("username");

        when(userRepository.findByUsername("username")).thenReturn(user);
        when(followRepository.findByFollowedUsername("username")).thenReturn(List.of());

        GetFollowersResponse response = followService.getFollowers(request);

        assertTrue(response.isSuccessful());
        assertEquals("Followers retrieved successfully", response.getMessage());
        assertEquals(0, response.getFollowers().size());
    }
}