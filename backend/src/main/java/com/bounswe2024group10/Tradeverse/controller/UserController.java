package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.LoginRequest;
import com.bounswe2024group10.Tradeverse.dto.LoginResponse;
import com.bounswe2024group10.Tradeverse.dto.RegisterRequest;
import com.bounswe2024group10.Tradeverse.dto.RegisterResponse;
import com.bounswe2024group10.Tradeverse.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest registerRequest) {
        RegisterResponse response = userService.register(registerRequest);
        if (response != null) {
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).build();
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        LoginResponse response = userService.login(loginRequest);
        if (response != null) {
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(401).build();
    }
}
