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
            User user = new User("admin", 0);
            if (userRepository.findByUsername(user.getUsername()) == null) {
                userRepository.save(user);
            }
            User user2 = new User("kkaraman-Econ101", 0);
            if (userRepository.findByUsername(user2.getUsername()) == null) {
                userRepository.save(user2);
            }
            User user3 = new User("odemirtas-odemirtas", 0);
            if (userRepository.findByUsername(user3.getUsername()) == null) {
                userRepository.save(user3);
            }
            User user4 = new User("sengin-engelleyincocuklar", 1);
            if (userRepository.findByUsername(user4.getUsername()) == null) {
                userRepository.save(user4);
            }
            User user5 = new User("ahmet_cakar-ahmetcakariel", 1);
            if (userRepository.findByUsername(user5.getUsername()) == null) {
                userRepository.save(user5);
            }
            User user6 = new User("alicia.nav-MySecurePass123", 2);
            if (userRepository.findByUsername(user6.getUsername()) == null) {
                userRepository.save(user6);
            }
            User user7 = new User("marco.linarez-MarketGuru2024", 2);
            if (userRepository.findByUsername(user7.getUsername()) == null) {
                userRepository.save(user7);
            }
            User user8 = new User("fastpacer-$4X_Profit!!", 3);
            if (userRepository.findByUsername(user8.getUsername()) == null) {
                userRepository.save(user8);
            }
            User user9 = new User("breakoutqueen-TradeMomentum99", 3);
            if (userRepository.findByUsername(user9.getUsername()) == null) {
                userRepository.save(user9);
            }
            User user10 = new User("johan_jensen-FinConvex#88", 4);
            if (userRepository.findByUsername(user10.getUsername()) == null) {
                userRepository.save(user10);
            }
            User user11 = new User("toshita001-confideinrobotUFO", 4);
            if (userRepository.findByUsername(user11.getUsername()) == null) {
                userRepository.save(user11);
            }
            Post subforum1 = new Post("admin", "Market Trends & Analysis", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
            if (postRepository.findByTitle(subforum1.getTitle()) == null) {
                postRepository.save(subforum1);
            }
            Post subforum2 = new Post("admin", "Investment Strategies & Advice", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
            if (postRepository.findByTitle(subforum2.getTitle()) == null) {
                postRepository.save(subforum2);
            }
            Post subforum3 = new Post("admin", "Getting Started with Finance", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
            if (postRepository.findByTitle(subforum3.getTitle()) == null) {
                postRepository.save(subforum3);
            }
            Post subforum4 = new Post("admin", "Day Trading Tips & Techniques", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
            if (postRepository.findByTitle(subforum4.getTitle()) == null) {
                postRepository.save(subforum4);
            }
            Post subforum5 = new Post("admin", "Personal Finance & Resources", null, List.of(new HashMap<>()), LocalDateTime.now(), SUBFORUM);
            if (postRepository.findByTitle(subforum5.getTitle()) == null) {
                postRepository.save(subforum5);
            }
            Post post1 = new Post("kkaraman-Econ101", "Market Outlook: Emerging Markets", subforum1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            if (postRepository.findByTitle(post1.getTitle()) == null) {
                postRepository.save(post1);
            }
            Post post2 = new Post("odemirtas-odemirtas", "How Inflation Impacts Bond Markets", subforum1.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            if (postRepository.findByTitle(post2.getTitle()) == null) {
                postRepository.save(post2);
            }
            Post post3 = new Post("sengin-engelleyincocuklar", "Should I Diversify with Gold?", subforum2.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            if (postRepository.findByTitle(post3.getTitle()) == null) {
                postRepository.save(post3);
            }
            Post post4 = new Post("ahmet_cakar-ahmetcakariel", "Real Estate vs Stock Investments", subforum2.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            if (postRepository.findByTitle(post4.getTitle()) == null) {
                postRepository.save(post4);
            }
            Post post5 = new Post("alicia.nav", "Where Should I Start Investing?", subforum3.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            if (postRepository.findByTitle(post5.getTitle()) == null) {
                postRepository.save(post5);
            }
            Post post6 = new Post("marco.linarez", "Understanding Crypto Basics", subforum3.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            if (postRepository.findByTitle(post6.getTitle()) == null) {
                postRepository.save(post6);
            }
            Post post7 = new Post("fastpacer", "Best Timeframes for Scalping", subforum4.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            if (postRepository.findByTitle(post7.getTitle()) == null) {
                postRepository.save(post7);
            }
            Post post8 = new Post("breakoutqueen", "Strategies for Breakout Trades", subforum4.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            if (postRepository.findByTitle(post8.getTitle()) == null) {
                postRepository.save(post8);
            }
            Post post9 = new Post("johan_jensen", "The Future of Decentralized Finance", subforum5.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            if (postRepository.findByTitle(post9.getTitle()) == null) {
                postRepository.save(post9);
            }
            Post post10 = new Post("toshita001", "Books for Finance Enthusiasts", subforum5.getId(), List.of(new HashMap<>()), LocalDateTime.now(), POST);
            if (postRepository.findByTitle(post10.getTitle()) == null) {
                postRepository.save(post10);
            }
            Post comment1 = new Post("johan_jensen-FinConvex#88", null, post10.getId(), List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
            if (postRepository.findByTitle(comment1.getTitle()) == null) {
                postRepository.save(comment1);
            }
            Post comment2 = new Post("odemirtas-odemirtas", null, post10.getId(), List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
            if (postRepository.findByTitle(comment2.getTitle()) == null) {
                postRepository.save(comment2);
            }
            Post comment3 = new Post("sengin-engelleyincocuklar", null, post4.getId(), List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
            if (postRepository.findByTitle(comment3.getTitle()) == null) {
                postRepository.save(comment3);
            }
            Post comment4 = new Post("marco.linarez-MarketGuru2024", null, comment3.getId(), List.of(new HashMap<>()), LocalDateTime.now(), COMMENT);
            if (postRepository.findByTitle(comment4.getTitle()) == null) {
                postRepository.save(comment4);
            }
            logger.info("Subforum 1 ID: {}", subforum1.getId());
            logger.info("Subforum 2 ID: {}", subforum2.getId());
            logger.info("Subforum 3 ID: {}", subforum3.getId());
            logger.info("Subforum 4 ID: {}", subforum4.getId());
            logger.info("Subforum 5 ID: {}", subforum5.getId());
            logger.info("Post 1 ID: {}", post1.getId());
            logger.info("Post 2 ID: {}", post2.getId());
            logger.info("Post 3 ID: {}", post3.getId());
            logger.info("Post 4 ID: {}", post4.getId());
            logger.info("Post 5 ID: {}", post5.getId());
            logger.info("Post 6 ID: {}", post6.getId());
            logger.info("Post 7 ID: {}", post7.getId());
            logger.info("Post 8 ID: {}", post8.getId());
            logger.info("Post 9 ID: {}", post9.getId());
            logger.info("Post 10 ID: {}", post10.getId());
            logger.info("Comment 1 ID: {}", comment1.getId());
            logger.info("Comment 2 ID: {}", comment2.getId());
            logger.info("Comment 3 ID: {}", comment3.getId());
            logger.info("Comment 4 ID: {}", comment4.getId());
        };
    }
}
