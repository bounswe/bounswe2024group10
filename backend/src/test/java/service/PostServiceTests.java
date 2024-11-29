package service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;

import com.bounswe2024group10.Tradeverse.dto.post.feed.FeedRequest;
import com.bounswe2024group10.Tradeverse.dto.post.feed.FeedResponse;
import com.bounswe2024group10.Tradeverse.dto.post.other.GeneralGetRequest;
import com.bounswe2024group10.Tradeverse.dto.post.other.GeneralRecursiveGetResponse;
import com.bounswe2024group10.Tradeverse.dto.post.other.GetSubforumsResponse;
import com.bounswe2024group10.Tradeverse.dto.post.other.GetSuperSubforumResponse;
import com.bounswe2024group10.Tradeverse.extra.PostType;
import com.bounswe2024group10.Tradeverse.model.Follow;
import com.bounswe2024group10.Tradeverse.model.FollowSubforum;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.DislikeRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowRepository;
import com.bounswe2024group10.Tradeverse.repository.FollowSubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.LikeRepository;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.bounswe2024group10.Tradeverse.service.PostService;

public class PostServiceTests {

    @Mock
    private PostRepository postRepository;

    @Mock
    private LikeRepository likeRepository;

    @Mock
    private DislikeRepository dislikeRepository;

    @Mock
    private FollowRepository followRepository;

    @Mock
    private FollowSubforumRepository followSubforumRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private PostService postService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    // @Test
    // public void testGetChilderen() {
    //     Post post = new Post("admin", "Post 1", null, List.of(), LocalDateTime.now(), PostType.POST);
    //     Post comment = new Post("admin", "Comment 1", post.getId(), List.of(), LocalDateTime.now(), PostType.COMMENT);
    //     Post comment2 = 
    //     GeneralGetRequest request = new GeneralGetRequest();
    //     request.setParentId(1L);
    //     request.setUsername("admin");
    //     when(postRepository.findByParentID(1L)).thenReturn(List.of(post));
    //     GeneralRecursiveGetResponse response = postService.getChilderen(request);
    //     assertEquals(true, response.isSuccessful());
    //     assertEquals("Comments fetched successfully", response.getMessage());
    //     assertEquals(1, response.getComments().size());
    // }
    @Test
    public void testGetSubForums() {
        GeneralGetRequest request = new GeneralGetRequest();
        request.setUsername("admin");

        Post subforum = new Post("admin", "Subforum 1", null, List.of(), LocalDateTime.now(), PostType.SUBFORUM);
        when(postRepository.findByPostType(PostType.SUBFORUM)).thenReturn(List.of(subforum));

        GetSubforumsResponse response = postService.getSubForums(request);

        assertEquals(true, response.isSuccessful());
        assertEquals("Subforums fetched successfully", response.getMessage());
        assertEquals(1, response.getSubforums().size());
    }

    @Test
    public void testGetPosts() {
        GeneralGetRequest request = new GeneralGetRequest();
        Post subforum = new Post("admin", "Subforum 1", null, List.of(), LocalDateTime.now(), PostType.SUBFORUM);
        Post post1 = new Post("admin", "Post 1", subforum.getId(), List.of(), LocalDateTime.now(), PostType.POST);
        Post post2 = new Post("admin", "Post 2", subforum.getId(), List.of(), LocalDateTime.now(), PostType.POST);
        Post post3 = new Post("admin", "Post 3", subforum.getId(), List.of(), LocalDateTime.now(), PostType.POST);
        request.setParentId(subforum.getId());
        request.setUsername("admin");

        when(postRepository.findById(subforum.getId())).thenReturn(Optional.of(subforum));
        when(postRepository.findByParentID(subforum.getId())).thenReturn(List.of(post1, post2, post3));

        GeneralRecursiveGetResponse response = postService.getPosts(request);

        assertEquals(true, response.isSuccessful());
        assertEquals("Subforum posts fetched successfully", response.getMessage());
        assertEquals(3, response.getComments().size());
    }

    @Test
    public void testGetComments() {
        GeneralGetRequest request = new GeneralGetRequest();
        Post post = new Post("admin", "Post 1", null, List.of(), LocalDateTime.now(), PostType.POST);
        Post comment1 = new Post("admin", "Comment 1", post.getId(), List.of(), LocalDateTime.now(), PostType.COMMENT);
        Post comment2 = new Post("admin", "Comment 2", post.getId(), List.of(), LocalDateTime.now(), PostType.COMMENT);
        Post comment3 = new Post("admin", "Comment 1", comment2.getId(), List.of(), LocalDateTime.now(), PostType.COMMENT);
        request.setParentId(post.getId());
        request.setUsername("admin");

        when(postRepository.findById(post.getId())).thenReturn(Optional.of(post));
        when(postRepository.findByParentID(post.getId())).thenReturn(List.of(comment1, comment2));

        GeneralRecursiveGetResponse response = postService.getComments(request);

        assertEquals(true, response.isSuccessful());
        assertEquals("Comments fetched successfully", response.getMessage());
        assertEquals(2, response.getComments().size());
    }

    @Test
    public void testGetSubForumsNonRecursive() {
        GeneralGetRequest request = new GeneralGetRequest();
        request.setUsername("admin");

        Post subforum = new Post("admin", "Subforum 1", null, List.of(), LocalDateTime.now(), PostType.SUBFORUM);
        when(postRepository.findByPostType(PostType.SUBFORUM)).thenReturn(List.of(subforum));

        GetSuperSubforumResponse response = postService.getSubForumsNonRecursive(request);

        assertEquals(true, response.isSuccessful());
        assertEquals("Subforums fetched successfully", response.getMessage());
        assertEquals(1, response.getSubforums().size());
    }

    @Test
    public void testFeed() {
        FeedRequest request = new FeedRequest();
        request.setUsername("admin");

        User user = new User();
        user.setUsername("admin");
        Post subforum1 = new Post("admin", "Subforum 1", null, List.of(), LocalDateTime.now(), PostType.SUBFORUM);
        Post subforum2 = new Post("admin", "Subforum 2", null, List.of(), LocalDateTime.now(), PostType.SUBFORUM);

        Post post1 = new Post("admin", "Post 1", subforum1.getId(), List.of(), LocalDateTime.now(), PostType.POST);
        Post post2 = new Post("admin", "Post 2", subforum1.getId(), List.of(), LocalDateTime.now(), PostType.POST);
        Post post3 = new Post("admin", "Post 3", subforum2.getId(), List.of(), LocalDateTime.now(), PostType.POST);
        Post post4 = new Post("admin", "Post 4", subforum1.getId(), List.of(), LocalDateTime.now(), PostType.POST);

        FollowSubforum followSubforum = new FollowSubforum("admin", subforum1.getId());
        Follow follow = new Follow("admin", "admin");

        when(userRepository.findByUsername("admin")).thenReturn(user);
        when(postRepository.findByPostType(PostType.SUBFORUM)).thenReturn(List.of(subforum1, subforum2));
        when(postRepository.findByParentID(subforum1.getId())).thenReturn(List.of(post1, post2, post4));
        when(postRepository.findByParentID(subforum2.getId())).thenReturn(List.of(post3));
        when(postRepository.findById(subforum1.getId())).thenReturn(Optional.of(subforum1));
        when(postRepository.findById(subforum2.getId())).thenReturn(Optional.of(subforum2));
        when(followSubforumRepository.findByFollowerUsername("admin")).thenReturn(List.of(followSubforum));
        when(followRepository.findByFollowerUsername("admin")).thenReturn(List.of(follow));

        FeedResponse response = postService.feed(request);

        assertEquals("Feed fetched successfully", response.getMessage());
        assertEquals(true, response.isSuccessful());
        assertEquals(1, response.getFollowedUserPosts().size());
        assertEquals(1, response.getFollowedSubforumPosts().size());
    }
}
