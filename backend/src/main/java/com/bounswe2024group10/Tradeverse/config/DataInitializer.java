package com.bounswe2024group10.Tradeverse.config;

import java.io.InputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.bounswe2024group10.Tradeverse.model.Asset;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.AssetRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class DataInitializer {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AssetRepository assetRepository;

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
            InputStream assetStream = getFileAsIOStream("AssetData.json");
            ObjectMapper objectMapper = new ObjectMapper();
            List<Asset> assets = objectMapper.readValue(assetStream, new TypeReference<List<Asset>>() {
            });
            if (assetRepository.count() == 0) {
                assetRepository.saveAll(assets);
            }
        };
    }

    private InputStream getFileAsIOStream(final String fileName) {
        InputStream ioStream = this.getClass()
                .getClassLoader()
                .getResourceAsStream(fileName);

        if (ioStream == null) {
            throw new IllegalArgumentException(fileName + " is not found");
        }
        return ioStream;
    }
}
