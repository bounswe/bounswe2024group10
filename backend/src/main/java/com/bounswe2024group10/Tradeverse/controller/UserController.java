package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.user.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-user-details/{username}")
    public ResponseEntity<GetUserDetailsResponse> getUserDetails(@PathVariable String username) {
        GetUserDetailsResponse response = userService.getUserDetails(username);
        if (response != null) {
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(404).build();
    }

    @PostMapping("/set-user-details/{username}")
    public ResponseEntity<GetUserDetailsResponse> setUserDetails(
            @PathVariable String username, @RequestBody SetUserDetailsRequest userDetailsRequest) {
        GetUserDetailsResponse updatedUser = userService.updateUserDetails(username, userDetailsRequest);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        }
        return ResponseEntity.status(404).build();
    }
}
