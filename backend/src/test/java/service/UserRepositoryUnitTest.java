package com.bounswe2024group10.Tradeverse;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.bounswe2024group10.Tradeverse.dto.user.GetUserDetailsResponse;
import com.bounswe2024group10.Tradeverse.dto.user.SetUserDetailsRequest;
import com.bounswe2024group10.Tradeverse.dto.user.SetUserDetailsResponse;
import com.bounswe2024group10.Tradeverse.model.UserEntity;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.bounswe2024group10.Tradeverse.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest
public class UserRepositoryUnitTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindUserByUsername() {
        // Arrange
        UserEntity user = new UserEntity();
        user.setUsername("testuser");
        user.setEmail("testuser@example.com");
        userRepository.save(user); // Save to the in-memory database

        // Act
        Optional<UserEntity> result = userRepository.findByUsername("testuser");

        // Assert
        assertTrue(result.isPresent());
        assertEquals("testuser@example.com", result.get().getEmail());
    }

    @Test
    public void testFindUserByUsername_UserNotFound() {
        // Act
        Optional<UserEntity> result = userRepository.findByUsername("nonexistentuser");

        // Assert
        assertTrue(result.isEmpty());
    }

}
