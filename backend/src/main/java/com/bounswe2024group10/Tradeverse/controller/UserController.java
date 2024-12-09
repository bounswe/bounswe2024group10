package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.user.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.service.UserService;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-user-details/{username}")
    public ResponseEntity<GetUserDetailsResponse> getUserDetails(@PathVariable String username) {
        GetUserDetailsResponse response = userService.getUserDetails(username);
        if (response != null) {
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(404).build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/set-user-details")
    public ResponseEntity<SetUserDetailsResponse> setUserDetails(@RequestBody SetUserDetailsRequest userDetailsRequest, @RequestHeader("Authorization") String token) {
        String username = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            username = jwtUtil.extractUsername(token);
        }
        SetUserDetailsResponse updatedUser = userService.setUserDetails(userDetailsRequest, username);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        }
        return ResponseEntity.status(404).build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/profile")
    public ResponseEntity<GetProfileResponse> getProfile(@RequestParam String username, @RequestHeader("Authorization") String token) {
        String requesterUsername = null;
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            requesterUsername = jwtUtil.extractUsername(token);
        }
        GetProfileResponse response = userService.getProfile(username, requesterUsername);
        return ResponseEntity.ok(response);
    }
}
