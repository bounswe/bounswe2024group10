package com.bounswe2024group10.animaltroove.controller;

import com.bounswe2024group10.animaltroove.dto.*;
import com.bounswe2024group10.animaltroove.service.LoginService;
import com.bounswe2024group10.animaltroove.service.RegistrationService;
import com.bounswe2024group10.animaltroove.service.UserService;
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

    @Autowired
    private UserService userService;

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

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/details")
    public ResponseEntity<GetUserDetailsResponse> getUserDetails(@RequestBody GetUserDetailsRequest request) {
        GetUserDetailsResponse response = userService.getUserDetails(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}