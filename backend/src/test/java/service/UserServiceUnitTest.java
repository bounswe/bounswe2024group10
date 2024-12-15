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
public class UserServiceUnitTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testUpdateUserTag_UnsuccessfulInvalidTag() {
        // Arrange
        SetUserDetailsRequest request = new SetUserDetailsRequest();
        request.setTag(5); // Invalid tag
        when(userRepository.existsByUsername("testuser")).thenReturn(true);

        // Act
        SetUserDetailsResponse response = userService.updateUserDetails("testuser", request);

        // Assert
        assertFalse(response.getIsSuccessful()); // Ensure it fails
        assertEquals("Invalid tag value", response.getMessage()); // Check the error message
    }

    @Test
    public void testUpdateUserTag_SuccessfulValidTag() {
        // Arrange
        SetUserDetailsRequest request = new SetUserDetailsRequest();
        request.setTag(3); // Valid tag
        when(userRepository.existsByUsername("testuser")).thenReturn(true);

        // Act
        SetUserDetailsResponse response = userService.updateUserDetails("testuser", request);

        // Assert
        assertTrue(response.getIsSuccessful());
        assertEquals("User updated successfully", response.getMessage());
    }

    @Test
    public void testUpdateUserBio_Successful() {
        // Arrange
        SetUserDetailsRequest request = new SetUserDetailsRequest();
        request.setBio("New bio");
        when(userRepository.existsByUsername("testuser")).thenReturn(true);

        // Act
        SetUserDetailsResponse response = userService.updateUserDetails("testuser", request);

        // Assert
        assertTrue(response.getIsSuccessful());
        assertEquals("User updated successfully", response.getMessage());
    }

}
