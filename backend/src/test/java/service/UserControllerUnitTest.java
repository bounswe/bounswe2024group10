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
public class UserControllerUnitTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService mockUserService;

    @Test
    public void testUpdateUserDetailsController() throws Exception {
        // Arrange
        SetUserDetailsRequest request = new SetUserDetailsRequest();
        request.setTag(3); // Valid tag

        SetUserDetailsResponse response = new SetUserDetailsResponse(true, "User updated successfully");
        when(mockUserService.updateUserDetails("testuser", request)).thenReturn(response);

        // Act
        mockMvc.perform(put("/api/users/testuser/details")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(request)))
                .andExpect(status().isOk()) // Assert HTTP 200 OK
                .andExpect(jsonPath("$.isSuccessful").value(true)) // Check response body
                .andExpect(jsonPath("$.message").value("User updated successfully"));
    }

    @Test
    public void testUpdateUserDetailsController_InvalidTag() throws Exception {
        // Arrange
        SetUserDetailsRequest request = new SetUserDetailsRequest();
        request.setTag(5); // Invalid tag

        SetUserDetailsResponse response = new SetUserDetailsResponse(false, "Invalid tag value");
        when(mockUserService.updateUserDetails("testuser", request)).thenReturn(response);

        // Act
        mockMvc.perform(put("/api/users/testuser/details")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(request)))
                .andExpect(status().isOk()) // Assert HTTP 200 OK
                .andExpect(jsonPath("$.isSuccessful").value(false)) // Check response body
                .andExpect(jsonPath("$.message").value("Invalid tag value"));
    }

}
