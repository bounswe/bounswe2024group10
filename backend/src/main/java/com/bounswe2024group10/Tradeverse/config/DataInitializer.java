package com.bounswe2024group10.Tradeverse.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Configuration
public class DataInitializer {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Bean
    public CommandLineRunner initData() {
        return args -> {
            if (userRepository.findByUsername("admin") == null) {
                User user = new User();
                user.setEmail("admin@tradeverse.com");
                user.setUsername("admin");
                user.setPassword(passwordEncoder.encode("admin"));
                user.setName("admin_name");
                user.setTag(0);
                user.setBio("admin");
                user.setIsAdmin(true);
                userRepository.save(user);
            }
        };
    }
}
