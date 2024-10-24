package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.GetUserDetailsRequest;
import com.bounswe2024group10.Tradeverse.dto.GetUserDetailsResponse;
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

import java.util.regex.Pattern;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    private static final String EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@(.+)$"; // Simple email regex
    private static final Pattern EMAIL_PATTERN = Pattern.compile(EMAIL_REGEX);

    public RegisterResponse register(RegisterRequest registerRequest) {
        if (!EMAIL_PATTERN.matcher(registerRequest.getEmail()).matches()) {
            return new RegisterResponse(false, "Invalid email format", null, null);
        }
        if (userRepository.findByEmail(registerRequest.getEmail()) != null) {
            return new RegisterResponse(false, "Email is already in use", null, null);
        }
        if (userRepository.findByUsername(registerRequest.getUsername()) != null) {
            return new RegisterResponse(false, "Username is already in use", null, null);
        }
        User user = new User(); 
        user.setEmail(registerRequest.getEmail());
        user.setUsername(registerRequest.getUsername());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setName(registerRequest.getName());
        user.setProfilePhoto(registerRequest.getProfilePhoto());
        user.setTag(registerRequest.getTag());
        userRepository.save(user);
        
        String token = jwtUtil.generateToken(user);
        return new RegisterResponse(true, "User registered successfully", token, user.getUsername());
    }

    public LoginResponse login(LoginRequest loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername());
        if (user == null) {
            return new LoginResponse(false, "User not found", null, null, 0);
        }
        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return new LoginResponse(false, "Invalid password", null, null, 0);
        }
        String token = jwtUtil.generateToken(user);
        return new LoginResponse(true, "Login successful", token, user.getUsername(), user.getTag());
    }

    public GetUserDetailsResponse getUserDetails(GetUserDetailsRequest request) {
        User user = userRepository.findByUsername(request.getUsername());
        if (user != null) {
            return new GetUserDetailsResponse(user.getEmail(), user.getUsername(), user.getName(), user.getProfilePhoto(), user.getTag(), user.getBio());
        }
        return null;
    }
}
