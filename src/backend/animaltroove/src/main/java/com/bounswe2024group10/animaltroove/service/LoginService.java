package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.LoginRequest;
import com.bounswe2024group10.animaltroove.dto.LoginResponse;
import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import com.bounswe2024group10.animaltroove.security.JwtTokenProvider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private RegisteredUserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    
    private JwtTokenProvider jwtTokenProvider = new JwtTokenProvider();

    public LoginResponse loginUser(LoginRequest request) {
        if (request.getUserName() == null || request.getPassword() == null) {
            return new LoginResponse(false, "Username or password cannot be null", null, null);
        }
        RegisteredUser user = userRepository.findByUserName(request.getUserName());
        if (user == null || !passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return new LoginResponse(false, "Invalid username or password", null, null);
        }
        String token = jwtTokenProvider.generateToken(user.getUserName());
        return new LoginResponse(true, "Login successful", token, user.getUserName());
    }
}