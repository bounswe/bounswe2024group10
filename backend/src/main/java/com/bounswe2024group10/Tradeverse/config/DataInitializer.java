package com.bounswe2024group10.Tradeverse.config;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.bounswe2024group10.Tradeverse.extra.PostType;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.PostRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Configuration
public class DataInitializer {
    private static final Logger logger = LoggerFactory.getLogger(DataInitializer.class);
    private static final PostType FORUM = PostType.FORUM;
    private static final PostType SUBFORUM = PostType.SUBFORUM;
    private static final PostType POST = PostType.POST;
    private static final PostType COMMENT = PostType.COMMENT;    

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Bean
    public CommandLineRunner initData() {
        return args -> {
            User user = new User();
            user.setUsername("admin");
            Post subforum1;
            Post subforum2;
            Post post1;
            Post post2;
            Post comment1;
            Post comment2;
            Post comment3;
            if (userRepository.findByUsername(user.getUsername()) == null) {
                userRepository.save(user);
                user = new User();
                user.setUsername("mannacharitable");
                userRepository.save(user);
                user = new User();
                user.setUsername("chaosInsurgency");
                userRepository.save(user);
                user = new User();
                user.setUsername("scpFoundation");
                userRepository.save(user);
                user = new User();
                user.setUsername("globalOccultCoalition");
                userRepository.save(user);
                user = new User();
                user.setUsername("serpentHand");
                userRepository.save(user);
                user = new User();
                user.setUsername("marshallCarterDark");
                userRepository.save(user);
                subforum1 = new Post("admin", "Subforum 1", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                subforum2 = new Post("admin", "Subforum 2", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                postRepository.save(subforum1);
                postRepository.save(subforum2);
    
                post1 = new Post("admin", "Post 1", subforum1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
                post2 = new Post("admin", "Post 2", subforum1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
                postRepository.save(post1);
                postRepository.save(post2);
                comment1 = new Post("admin", "Comment 1", post1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
                comment2 = new Post("admin", "Comment 2", post1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
                comment3 = new Post("admin", "Comment 3", comment1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
                postRepository.save(comment1);
                postRepository.save(comment2);
                postRepository.save(comment3);

            } else {
                subforum1 = postRepository.findByTitle("Subforum 1").get(0);
                subforum2 = postRepository.findByTitle("Subforum 2").get(0);
                post1 = postRepository.findByTitle("Post 1").get(0);
                post2 = postRepository.findByTitle("Post 2").get(0);
                comment1 = postRepository.findByTitle("Comment 1").get(0);
                comment2 = postRepository.findByTitle("Comment 2").get(0);
                comment3 = postRepository.findByTitle("Comment 3").get(0);
            }

            logger.info("Subforum 1 ID: {}", subforum1.getId());
            logger.info("Subforum 2 ID: {}", subforum2.getId());
            logger.info("Post 1 ID: {}", post1.getId());
            logger.info("Post 2 ID: {}", post2.getId());
            logger.info("Comment 1 ID: {}", comment1.getId());
            logger.info("Comment 2 ID: {}", comment2.getId());
            logger.info("Comment 3 ID: {}", comment3.getId());
        };
    }
}