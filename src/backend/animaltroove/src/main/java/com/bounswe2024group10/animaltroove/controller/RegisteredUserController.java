package com.bounswe2024group10.animaltroove.controller;

import com.bounswe2024group10.animaltroove.model.RegisteredUser;
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

    @PostMapping("/register")
    public ResponseEntity<RegisteredUser> registerUser(@RequestBody RegisteredUser newUser) {
        RegisteredUser registeredUser = registrationService.registerNewUser(newUser);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<RegisteredUser> loginUser(@RequestBody RegisteredUser user) {
        RegisteredUser loggedInUser = loginService.loginUser(user.getUserName(), user.getPassword());
        if (loggedInUser == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
    }
}