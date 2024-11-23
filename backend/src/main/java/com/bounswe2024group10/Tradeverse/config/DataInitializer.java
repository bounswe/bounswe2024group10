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
            userRepository.save(user);

            Post forum1 = new Post("admin", "General Discussion", null, List.of(new HashMap<>()), LocalDateTime.now(), FORUM);
            Post forum2 = new Post("admin", "Financial News", null, List.of(new HashMap<>()), LocalDateTime.now(), FORUM);
            postRepository.save(forum1);
            postRepository.save(forum2);

            Post subforum1 = new Post("admin", "Subforum 1", forum1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
            Post subforum2 = new Post("admin", "Subforum 2", forum1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
            postRepository.save(subforum1);
            postRepository.save(subforum2);

            Post post1 = new Post("admin", "Post 1", subforum1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            Post post2 = new Post("admin", "Post 2", subforum1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            postRepository.save(post1);
            postRepository.save(post2);

            Post comment1 = new Post("admin", "Comment 1", post1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
            Post comment2 = new Post("admin", "Comment 2", post1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
            Post comment3 = new Post("admin", "Comment 3", comment1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
            postRepository.save(comment1);
            postRepository.save(comment2);
            postRepository.save(comment3);

            
            logger.info("Forum 1 ID: {}", forum1.getId());
            logger.info("Forum 2 ID: {}", forum2.getId());
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