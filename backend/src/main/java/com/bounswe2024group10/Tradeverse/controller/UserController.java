package com.bounswe2024group10.Tradeverse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.GetUserDetailsRequest;
import com.bounswe2024group10.Tradeverse.dto.GetUserDetailsResponse;
import com.bounswe2024group10.Tradeverse.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/get-user-details")
    public ResponseEntity<GetUserDetailsResponse> getUserDetails(@RequestBody GetUserDetailsRequest request) {
        GetUserDetailsResponse response = userService.getUserDetails(request);
        if (response != null) {
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(404).build();
    }
}
