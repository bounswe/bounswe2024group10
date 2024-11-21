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
import com.bounswe2024group10.Tradeverse.repository.PostRepository;

@Configuration
public class DataInitializer {
    private static final Logger logger = LoggerFactory.getLogger(DataInitializer.class);
    private static final PostType FORUM = PostType.FORUM;

    @Autowired
    private PostRepository postRepository;

    @Bean
    public CommandLineRunner initData() {
        return args -> {
            Post forum1 = new Post("admin", "General Discussion", null, List.of(new HashMap<>()), true, LocalDateTime.now(), FORUM);
            Post forum2 = new Post("admin", "Financial News", null, List.of(new HashMap<>()), true, LocalDateTime.now(), FORUM);
            postRepository.save(forum1);
            postRepository.save(forum2);
            logger.info("Forum 1 ID: {}", forum1.getId());
            logger.info("Forum 2 ID: {}", forum2.getId());
        };
    }
}