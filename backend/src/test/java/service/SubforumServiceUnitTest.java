package service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.springframework.web.client.RestTemplate;

import com.bounswe2024group10.Tradeverse.dto.subforum.AllSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.CreateSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.subforum.CreateSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.DeleteSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.subforum.DeleteSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.FollowSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.subforum.FollowSubforumResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.GetFollowedSubforumsResponse;
import com.bounswe2024group10.Tradeverse.dto.subforum.GetSubforumResponse;
import com.bounswe2024group10.Tradeverse.model.FollowSubforum;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.Subforum;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.AssetRepository;
import com.bounswe2024group10.Tradeverse.repository.CommentRepository;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowSubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.SubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.bounswe2024group10.Tradeverse.service.PostService;
import com.bounswe2024group10.Tradeverse.service.SubforumService;

public class SubforumServiceUnitTest {

    @InjectMocks
    private SubforumService subforumService;

    @Mock
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
    private FollowSubforumRepository followSubforumRepository;

    @Mock
    private FollowRepository followRepository;

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
        MockitoAnnotations.openMocks(postService);
    }

    @Test
    public void testGetAllSubforums() {
        List<Subforum> subforums = new ArrayList<>();
        Subforum subforum1 = new Subforum();
        subforum1.setId(1L);
        subforum1.setName("Subforum 1");
        subforum1.setDescription("Description 1");
        subforum1.setTagColor("Red");

        Subforum subforum2 = new Subforum();
        subforum2.setId(2L);
        subforum2.setName("Subforum 2");
        subforum2.setDescription("Description 2");
        subforum2.setTagColor("Blue");

        subforums.add(subforum1);
        subforums.add(subforum2);

        when(subforumRepository.findAll()).thenReturn(subforums);
        when(followSubforumRepository.countBySubforumID(1L)).thenReturn(10);
        when(followSubforumRepository.countBySubforumID(2L)).thenReturn(20);
        when(postRepository.countBySubforumID(1L)).thenReturn(5);
        when(postRepository.countBySubforumID(2L)).thenReturn(15);

        List<AllSubforumResponse> response = subforumService.getAllSubforums();

        assertEquals(2, response.size());
        assertEquals(1L, response.get(0).getId());
        assertEquals("Subforum 1", response.get(0).getName());
        assertEquals("Description 1", response.get(0).getDescription());
        assertEquals("Red", response.get(0).getTagColor());
        assertEquals(10, response.get(0).getFollowerCount());
        assertEquals(5, response.get(0).getPostCount());

        assertEquals(2L, response.get(1).getId());
        assertEquals("Subforum 2", response.get(1).getName());
        assertEquals("Description 2", response.get(1).getDescription());
        assertEquals("Blue", response.get(1).getTagColor());
        assertEquals(20, response.get(1).getFollowerCount());
        assertEquals(15, response.get(1).getPostCount());
    }

    @Test
    public void testConvertToAllSubforumResponse() {
        Subforum subforum = new Subforum();
        subforum.setId(1L);
        subforum.setName("Subforum 1");
        subforum.setDescription("Description 1");
        subforum.setTagColor("Red");

        when(followSubforumRepository.countBySubforumID(1L)).thenReturn(10);
        when(postRepository.countBySubforumID(1L)).thenReturn(5);

        AllSubforumResponse response = subforumService.convertToAllSubforumResponse(subforum);

        assertEquals(1L, response.getId());
        assertEquals("Subforum 1", response.getName());
        assertEquals("Description 1", response.getDescription());
        assertEquals("Red", response.getTagColor());
        assertEquals(10, response.getFollowerCount());
        assertEquals(5, response.getPostCount());
    }

    @Test
    public void testCreateSubforumSuccess() {
        CreateSubforumRequest request = new CreateSubforumRequest();
        request.setName("New Subforum");
        request.setDescription("New Description");
        request.setTagColor("Green");

        User user = new User();
        user.setUsername("admin");
        user.setIsAdmin(true);

        when(userRepository.findByUsername("admin")).thenReturn(user);

        CreateSubforumResponse response = subforumService.createSubforum(request, "admin");

        assertEquals(true, response.getIsSuccessful());
        assertEquals("Subforum created successfully", response.getMessage());
    }

    @Test
    public void testCreateSubforumUserNotFound() {
        CreateSubforumRequest request = new CreateSubforumRequest();
        request.setName("New Subforum");
        request.setDescription("New Description");
        request.setTagColor("Green");

        when(userRepository.findByUsername("nonexistent")).thenReturn(null);

        CreateSubforumResponse response = subforumService.createSubforum(request, "nonexistent");

        assertEquals(false, response.getIsSuccessful());
        assertEquals("User not found", response.getMessage());
    }

    @Test
    public void testCreateSubforumUserNotAdmin() {
        CreateSubforumRequest request = new CreateSubforumRequest();
        request.setName("New Subforum");
        request.setDescription("New Description");
        request.setTagColor("Green");

        User user = new User();
        user.setUsername("user");
        user.setIsAdmin(false);

        when(userRepository.findByUsername("user")).thenReturn(user);

        CreateSubforumResponse response = subforumService.createSubforum(request, "user");

        assertEquals(false, response.getIsSuccessful());
        assertEquals("User does not have permission to create a subforum", response.getMessage());
    }

    @Test
    public void testDeleteSubforumSuccess() {
        DeleteSubforumRequest request = new DeleteSubforumRequest();
        request.setId(1L);

        User user = new User();
        user.setUsername("admin");
        user.setIsAdmin(true);

        Subforum subforum = new Subforum();
        subforum.setId(1L);

        when(userRepository.findByUsername("admin")).thenReturn(user);
        when(subforumRepository.findById(1L)).thenReturn(Optional.of(subforum));

        DeleteSubforumResponse response = subforumService.deleteSubforum(request, "admin");

        assertEquals(true, response.getIsSuccessful());
        assertEquals("Subforum deleted successfully", response.getMessage());
    }

    @Test
    public void testDeleteSubforumUserNotFound() {
        DeleteSubforumRequest request = new DeleteSubforumRequest();
        request.setId(1L);

        when(userRepository.findByUsername("nonexistent")).thenReturn(null);

        DeleteSubforumResponse response = subforumService.deleteSubforum(request, "nonexistent");

        assertEquals(false, response.getIsSuccessful());
        assertEquals("User not found", response.getMessage());
    }

    @Test
    public void testDeleteSubforumUserNotAdmin() {
        DeleteSubforumRequest request = new DeleteSubforumRequest();
        request.setId(1L);

        User user = new User();
        user.setUsername("user");
        user.setIsAdmin(false);

        when(userRepository.findByUsername("user")).thenReturn(user);

        DeleteSubforumResponse response = subforumService.deleteSubforum(request, "user");

        assertEquals(false, response.getIsSuccessful());
        assertEquals("User does not have permission to delete a subforum", response.getMessage());
    }

    @Test
    public void testDeleteSubforumNotFound() {
        DeleteSubforumRequest request = new DeleteSubforumRequest();
        request.setId(1L);

        User user = new User();
        user.setUsername("admin");
        user.setIsAdmin(true);

        when(userRepository.findByUsername("admin")).thenReturn(user);
        when(subforumRepository.findById(1L)).thenReturn(Optional.empty());

        DeleteSubforumResponse response = subforumService.deleteSubforum(request, "admin");

        assertEquals(false, response.getIsSuccessful());
        assertEquals("Subforum not found", response.getMessage());
    }

    @Test
    public void testFollowSubforumSuccess() {
        FollowSubforumRequest request = new FollowSubforumRequest();
        request.setSubforumId(1L);

        User user = new User();
        user.setUsername("user");

        Subforum subforum = new Subforum();
        subforum.setId(1L);

        when(userRepository.findByUsername("user")).thenReturn(user);
        when(subforumRepository.findById(1L)).thenReturn(Optional.of(subforum));
        when(followSubforumRepository.findByFollowerUsernameAndSubforumID("user", 1L)).thenReturn(null);

        FollowSubforumResponse response = subforumService.followSubforum(request, "user");

        assertEquals(true, response.getIsSuccessful());
        assertEquals("Successfully followed subforum", response.getMessage());
    }

    @Test
    public void testFollowSubforumUserNotFound() {
        FollowSubforumRequest request = new FollowSubforumRequest();
        request.setSubforumId(1L);

        when(userRepository.findByUsername("nonexistent")).thenReturn(null);

        FollowSubforumResponse response = subforumService.followSubforum(request, "nonexistent");

        assertEquals(false, response.getIsSuccessful());
        assertEquals("User not found", response.getMessage());
    }

    @Test
    public void testFollowSubforumSubforumNotFound() {
        FollowSubforumRequest request = new FollowSubforumRequest();
        request.setSubforumId(1L);

        User user = new User();
        user.setUsername("user");

        when(userRepository.findByUsername("user")).thenReturn(user);
        when(subforumRepository.findById(1L)).thenReturn(Optional.empty());

        FollowSubforumResponse response = subforumService.followSubforum(request, "user");

        assertEquals(false, response.getIsSuccessful());
        assertEquals("Subforum not found", response.getMessage());
    }

    @Test
    public void testFollowSubforumAlreadyFollowing() {
        FollowSubforumRequest request = new FollowSubforumRequest();
        request.setSubforumId(1L);

        User user = new User();
        user.setUsername("user");

        Subforum subforum = new Subforum();
        subforum.setId(1L);

        FollowSubforum followSubforum = new FollowSubforum("user", 1L);

        when(userRepository.findByUsername("user")).thenReturn(user);
        when(subforumRepository.findById(1L)).thenReturn(Optional.of(subforum));
        when(followSubforumRepository.findByFollowerUsernameAndSubforumID("user", 1L)).thenReturn(followSubforum);

        FollowSubforumResponse response = subforumService.followSubforum(request, "user");

        assertEquals(false, response.getIsSuccessful());
        assertEquals("Already following this subforum", response.getMessage());
    }

    @Test
    public void testUnfollowSubforumSuccess() {
        FollowSubforumRequest request = new FollowSubforumRequest();
        request.setSubforumId(1L);

        User user = new User();
        user.setUsername("user");

        Subforum subforum = new Subforum();
        subforum.setId(1L);

        FollowSubforum followSubforum = new FollowSubforum("user", 1L);

        when(userRepository.findByUsername("user")).thenReturn(user);
        when(subforumRepository.findById(1L)).thenReturn(Optional.of(subforum));
        when(followSubforumRepository.findByFollowerUsernameAndSubforumID("user", 1L)).thenReturn(followSubforum);

        FollowSubforumResponse response = subforumService.unfollowSubforum(request, "user");

        assertEquals(true, response.getIsSuccessful());
        assertEquals("Successfully unfollowed subforum", response.getMessage());
    }

    @Test
    public void testUnfollowSubforumUserNotFound() {
        FollowSubforumRequest request = new FollowSubforumRequest();
        request.setSubforumId(1L);

        when(userRepository.findByUsername("nonexistent")).thenReturn(null);

        FollowSubforumResponse response = subforumService.unfollowSubforum(request, "nonexistent");

        assertEquals(false, response.getIsSuccessful());
        assertEquals("User not found", response.getMessage());
    }

    @Test
    public void testUnfollowSubforumSubforumNotFound() {
        FollowSubforumRequest request = new FollowSubforumRequest();
        request.setSubforumId(1L);

        User user = new User();
        user.setUsername("user");

        when(userRepository.findByUsername("user")).thenReturn(user);
        when(subforumRepository.findById(1L)).thenReturn(Optional.empty());

        FollowSubforumResponse response = subforumService.unfollowSubforum(request, "user");

        assertEquals(false, response.getIsSuccessful());
        assertEquals("Subforum not found", response.getMessage());
    }

    @Test
    public void testUnfollowSubforumNotFollowing() {
        FollowSubforumRequest request = new FollowSubforumRequest();
        request.setSubforumId(1L);

        User user = new User();
        user.setUsername("user");

        Subforum subforum = new Subforum();
        subforum.setId(1L);

        when(userRepository.findByUsername("user")).thenReturn(user);
        when(subforumRepository.findById(1L)).thenReturn(Optional.of(subforum));
        when(followSubforumRepository.findByFollowerUsernameAndSubforumID("user", 1L)).thenReturn(null);

        FollowSubforumResponse response = subforumService.unfollowSubforum(request, "user");

        assertEquals(false, response.getIsSuccessful());
        assertEquals("Not following this subforum", response.getMessage());
    }

    @Test
    public void testGetFollowedSubforumsSuccess() {
        User user = new User();
        user.setUsername("user");

        Subforum subforum1 = new Subforum();
        subforum1.setId(1L);
        subforum1.setName("Subforum 1");
        subforum1.setDescription("Description 1");
        subforum1.setTagColor("Red");

        Subforum subforum2 = new Subforum();
        subforum2.setId(2L);
        subforum2.setName("Subforum 2");
        subforum2.setDescription("Description 2");
        subforum2.setTagColor("Blue");

        FollowSubforum followSubforum1 = new FollowSubforum("user", 1L);
        FollowSubforum followSubforum2 = new FollowSubforum("user", 2L);

        List<FollowSubforum> followedSubforums = new ArrayList<>();
        followedSubforums.add(followSubforum1);
        followedSubforums.add(followSubforum2);

        when(userRepository.findByUsername("user")).thenReturn(user);
        when(followSubforumRepository.findByFollowerUsername("user")).thenReturn(followedSubforums);
        when(subforumRepository.findById(1L)).thenReturn(Optional.of(subforum1));
        when(subforumRepository.findById(2L)).thenReturn(Optional.of(subforum2));
        when(followSubforumRepository.countBySubforumID(1L)).thenReturn(10);
        when(followSubforumRepository.countBySubforumID(2L)).thenReturn(20);
        when(postRepository.countBySubforumID(1L)).thenReturn(5);
        when(postRepository.countBySubforumID(2L)).thenReturn(15);

        List<GetFollowedSubforumsResponse> response = subforumService.getFollowedSubforums("user");

        assertEquals(2, response.size());
        assertEquals(1L, response.get(0).getId());
        assertEquals("Subforum 1", response.get(0).getName());
        assertEquals("Description 1", response.get(0).getDescription());
        assertEquals("Red", response.get(0).getTagColor());
        assertEquals(10, response.get(0).getFollowerCount());
        assertEquals(5, response.get(0).getPostCount());

        assertEquals(2L, response.get(1).getId());
        assertEquals("Subforum 2", response.get(1).getName());
        assertEquals("Description 2", response.get(1).getDescription());
        assertEquals("Blue", response.get(1).getTagColor());
        assertEquals(20, response.get(1).getFollowerCount());
        assertEquals(15, response.get(1).getPostCount());
    }

    @Test
    public void testGetFollowedSubforumsUserNotFound() {
        when(userRepository.findByUsername("nonexistent")).thenReturn(null);

        List<GetFollowedSubforumsResponse> response = subforumService.getFollowedSubforums("nonexistent");

        assertEquals(0, response.size());
    }

    @Test
    public void testGetFollowedSubforumsNoFollowedSubforums() {
        User user = new User();
        user.setUsername("user");

        when(userRepository.findByUsername("user")).thenReturn(user);
        when(followSubforumRepository.findByFollowerUsername("user")).thenReturn(new ArrayList<>());

        List<GetFollowedSubforumsResponse> response = subforumService.getFollowedSubforums("user");

        assertEquals(0, response.size());
    }

    @Test
    public void testGetSubforumSuccess() {
        String username = "user";
        Long subforumId = 1L;

        User user = new User();
        user.setUsername(username);

        Subforum subforum = new Subforum();
        subforum.setId(subforumId);
        subforum.setName("Subforum 1");
        subforum.setDescription("Description 1");
        subforum.setTagColor("Red");

        Post post1 = new Post();
        post1.setId(1L);
        post1.setTitle("Post 1");
        post1.setCreatedBy(username);
        post1.setSubforumID(subforumId);

        Post post2 = new Post();
        post2.setId(2L);
        post2.setTitle("Post 2");
        post2.setCreatedBy(username);
        post2.setSubforumID(subforumId);

        List<Post> posts = new ArrayList<>();
        posts.add(post1);
        posts.add(post2);

        when(subforumRepository.findById(subforumId)).thenReturn(Optional.of(subforum));
        when(followSubforumRepository.existsByFollowerUsernameAndSubforumID(username, subforumId)).thenReturn(true);
        when(followSubforumRepository.countBySubforumID(subforumId)).thenReturn(10);
        when(postRepository.countBySubforumID(subforumId)).thenReturn(5);
        when(postRepository.findBySubforumID(subforumId)).thenReturn(posts);
        when(userRepository.findByUsername(username)).thenReturn(user);

        GetSubforumResponse response = subforumService.getSubforum(username, subforumId);

        assertEquals(subforumId, response.getId());
        assertEquals("Subforum 1", response.getName());
        assertEquals("Description 1", response.getDescription());
        assertEquals("Red", response.getTagColor());
        assertEquals(true, response.isFollowed());
        assertEquals(10, response.getFollowerCount());
        assertEquals(5, response.getPostCount());
        assertEquals(2, response.getPosts().size());
    }

    @Test
    public void testGetSubforumNotFound() {
        String username = "user";
        Long subforumId = 1L;

        when(subforumRepository.findById(subforumId)).thenReturn(Optional.empty());

        GetSubforumResponse response = subforumService.getSubforum(username, subforumId);

        assertEquals(null, response.getId());
        assertEquals(null, response.getName());
        assertEquals(null, response.getDescription());
        assertEquals(null, response.getTagColor());
        assertEquals(false, response.isFollowed());
        assertEquals(0, response.getFollowerCount());
        assertEquals(0, response.getPostCount());
        assertEquals(null, response.getPosts());
    }

    @Test
    public void testGetSubforumNotFollowed() {
        String username = "user";
        Long subforumId = 1L;

        Subforum subforum = new Subforum();
        subforum.setId(subforumId);
        subforum.setName("Subforum 1");
        subforum.setDescription("Description 1");
        subforum.setTagColor("Red");

        Post post1 = new Post();
        post1.setId(1L);
        post1.setTitle("Post 1");
        post1.setCreatedBy(username);
        post1.setSubforumID(subforumId);

        Post post2 = new Post();
        post2.setId(2L);
        post2.setTitle("Post 2");
        post2.setCreatedBy(username);
        post2.setSubforumID(subforumId);

        List<Post> posts = new ArrayList<>();
        posts.add(post1);
        posts.add(post2);

        when(subforumRepository.findById(subforumId)).thenReturn(Optional.of(subforum));
        when(followSubforumRepository.existsByFollowerUsernameAndSubforumID(username, subforumId)).thenReturn(false);
        when(followSubforumRepository.countBySubforumID(subforumId)).thenReturn(10);
        when(postRepository.countBySubforumID(subforumId)).thenReturn(5);
        when(postRepository.findBySubforumID(subforumId)).thenReturn(posts);

        GetSubforumResponse response = subforumService.getSubforum(username, subforumId);

        assertEquals(subforumId, response.getId());
        assertEquals("Subforum 1", response.getName());
        assertEquals("Description 1", response.getDescription());
        assertEquals("Red", response.getTagColor());
        assertEquals(false, response.isFollowed());
        assertEquals(10, response.getFollowerCount());
        assertEquals(5, response.getPostCount());
        assertEquals(2, response.getPosts().size());
    }
}
