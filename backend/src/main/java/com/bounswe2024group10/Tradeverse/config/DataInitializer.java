package com.bounswe2024group10.Tradeverse.config;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.Base64;
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
            Post subforum3;
            Post subforum4;
            Post subforum5;
            Post subforum6;
            Post subforum7;
            Post subforum8;
            Post subforum9;
            Post subforum10;
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
                user = new User();
                user.setUsername("andersonRobotics");
                userRepository.save(user);
                subforum1 = new Post("admin", "Fantasy Economics", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                subforum2 = new Post("admin", "Cryptocoins", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                subforum3 = new Post("admin", "Bitcoin", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                subforum4 = new Post("admin", "Political Economics", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                subforum5 = new Post("admin", "Etherium", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                subforum6 = new Post("admin", "Turkish Lira", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                subforum7 = new Post("admin", "Inflation", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                subforum8 = new Post("admin", "Finance Ethics", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                // subforum9 = new Post("admin", "Turkish Lira", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                // subforum10 = new Post("admin", "Turkish Lira", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
                postRepository.save(subforum1);
                postRepository.save(subforum2);
                postRepository.save(subforum3);
                postRepository.save(subforum4);
                postRepository.save(subforum5);
                postRepository.save(subforum6);
                postRepository.save(subforum7);
                postRepository.save(subforum8);
                // postRepository.save(subforum9);
                // postRepository.save(subforum10);

                try {
                    byte[] imageBytes = Files.readAllBytes(Paths.get("src/main/resources/static/images/andersonRobotics.jpg"));
                    String post1_image = Base64.getEncoder().encodeToString(imageBytes);
                    HashMap<String, String> post1_imagehash = new HashMap<>();
                    post1_imagehash.put("image", post1_image);
                    HashMap<String, String> post1_texthash = new HashMap<>();
                    post1_texthash.put("text", "Specializing in the sale of anamolous robots, androids, artificial intelligences, computer programs and cybernetics we have made groundbreaking discoveries and forged a new age of paratech solutions. We also see that with the partnership, our sales are projected to double in the next quarter. You find that this new partnership will go beyond our supply contracts with the Global Occult Coalition. While our sales with the GOC have been fundamental in the growth and prosperity of this company, this new partnership will allow us to use their sales network to reach a broader market for our paratech.");
                    post1 = new Post("andersonRobotics", "Anderson Robitics Q4", null, List.of(post1_texthash, post1_imagehash), LocalDateTime.now(), POST);
                    postRepository.save(post1);
                    HashMap<String, String> comment1_1_texthash = new HashMap<>();
                    comment1_1_texthash.put("text", "We are excited for this new partnership and the opportunities it will bring. We are looking forward for new partnerships and collaborations with Anderson Robotics in the future.");
                    Post comment1_1 = new Post("globalOccultCoalition", null, post1.getId(), List.of(comment1_1_texthash), LocalDateTime.now(), COMMENT);
                    postRepository.save(comment1_1);
                } catch (IOException e) {
                    logger.error("Error reading image file", e);
                }
                post2 = new Post("admin", "Post 2", subforum1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);

                postRepository.save(post2);
                comment1 = new Post("admin", "Comment 1", 3L, List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
                comment2 = new Post("admin", "Comment 2", 3L, List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
                postRepository.save(comment1);
                postRepository.save(comment2);
                comment3 = new Post("admin", "Comment 3", comment1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
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
            logger.info("Post 1 ID: {}", 3L);
            logger.info("Post 2 ID: {}", post2.getId());
            logger.info("Comment 1 ID: {}", comment1.getId());
            logger.info("Comment 2 ID: {}", comment2.getId());
            logger.info("Comment 3 ID: {}", comment3.getId());
        };
    }
}
