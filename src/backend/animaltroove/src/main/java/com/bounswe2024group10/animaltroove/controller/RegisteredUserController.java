package com.bounswe2024group10.animaltroove.controller;

import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import com.bounswe2024group10.animaltroove.dto.RegisterRequest;
import com.bounswe2024group10.animaltroove.dto.RegisterResponse;
import com.bounswe2024group10.animaltroove.dto.LoginRequest;
import com.bounswe2024group10.animaltroove.dto.LoginResponse;
import com.bounswe2024group10.animaltroove.service.LoginService;
import com.bounswe2024group10.animaltroove.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class RegisteredUserController {   

    @Autowired
    private RegistrationService registrationService;
    
    @Autowired
    private LoginService loginService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> registerUser(@RequestBody RegisterRequest request) {
        RegisterResponse response = registrationService.registerUser(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginUser(@RequestBody LoginRequest request) {
        LoginResponse response = loginService.loginUser(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}