package com.bounswe2024group10.Tradeverse.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.UUID;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bounswe2024group10.Tradeverse.dto.authentication.*;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import com.bounswe2024group10.Tradeverse.util.JwtUtil;

@Service
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    private static final String EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@(.+)$";
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
        if (registerRequest.getProfilePhoto() != null) {
            try {
                File file = new File("/images/" + UUID.randomUUID() + ".jpg");
                file.createNewFile();
                FileOutputStream fos = new FileOutputStream(file);
                fos.write(Base64.getDecoder().decode(registerRequest.getProfilePhoto()));
                fos.close();
                registerRequest.setProfilePhoto(file.getAbsolutePath());
            } catch (IOException e) {
                e.printStackTrace();
                return new RegisterResponse(false, "Error while saving profile photo", null, null);
            }
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
}
