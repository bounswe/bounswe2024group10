package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.LoginRequest;
import com.bounswe2024group10.Tradeverse.dto.LoginResponse;
import com.bounswe2024group10.Tradeverse.dto.RegisterRequest;
import com.bounswe2024group10.Tradeverse.dto.RegisterResponse;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public RegisterResponse register(RegisterRequest registerRequest) {
        User user = new User();
        user.setEmail(registerRequest.getEmail());
        user.setUsername(registerRequest.getUsername());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        userRepository.save(user);
        return new RegisterResponse(true, "User registered successfully");
    }

    public LoginResponse login(LoginRequest loginRequest) {
        System.out.println("Login request:");
        System.out.println(loginRequest);
        User user = userRepository.findByUsername(loginRequest.getUsername());
        if (user != null && passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            String token = jwtUtil.generateToken(user.getUsername());
            return new LoginResponse(true, "Login successful", token);
        }
        return null;
    }
}
