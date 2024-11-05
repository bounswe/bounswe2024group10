package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.LoginRequest;
import com.bounswe2024group10.Tradeverse.dto.LoginResponse;
import com.bounswe2024group10.Tradeverse.dto.RegisterRequest;
import com.bounswe2024group10.Tradeverse.dto.RegisterResponse;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.bounswe2024group10.Tradeverse.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtil jwtUtil;  // Assuming you have a JwtUtil for handling token operations

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest registerRequest) {
        RegisterResponse response = userService.register(registerRequest);
        if (response != null) {
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        LoginResponse response = userService.login(loginRequest);
        if (response != null) {
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/validate-token")
    public ResponseEntity<?> validateToken(@RequestHeader("Authorization") String token) {
        if (token.startsWith("Bearer ")) {
            token = token.substring(7); // Remove "Bearer " prefix
        }

        try {
            // Extract the username from the token
            String username = jwtUtil.extractUsername(token);

            // Fetch user details based on the extracted username
            UserDetails userDetails = userRepository.findByUsername(username);

            // Validate the token using the user details
            if (jwtUtil.validateToken(token, userDetails)) {
                // Token is valid, return success response with username
                return ResponseEntity.ok(Map.of("username", username, "message", "Token is valid"));
            } else {
                // Token is invalid
                return ResponseEntity.badRequest().body(Map.of("error", "Invalid token"));
            }
        } catch (Exception e) {
            // Handle exceptions (e.g., token expiration or malformed token)
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid token"));
        }
    }
}
