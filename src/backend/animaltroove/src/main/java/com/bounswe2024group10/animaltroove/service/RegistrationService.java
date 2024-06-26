package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.RegisterRequest;
import com.bounswe2024group10.animaltroove.dto.RegisterResponse;
import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class RegistrationService {

    @Autowired
    private RegisteredUserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public RegisterResponse registerUser(RegisterRequest request) {
        if (userRepository.findByUserName(request.getUserName()) != null) {
            return new RegisterResponse(false, "Username is already in use.");
        }
        if (userRepository.findByEmail(request.getEmail()) != null) {
            return new RegisterResponse(false, "Email address is already in use.");
        }
        if (!isValidEmail(request.getEmail())) {
            return new RegisterResponse(false, "Invalid email address.");
        }
        String encodedPassword = passwordEncoder.encode(request.getPassword());
        RegisteredUser newUser = new RegisteredUser(request.getUserName(), request.getEmail(), encodedPassword, request.getName(), request.getBirthday(), request.getBio(), request.getProfilePicture());
        try {
            userRepository.save(newUser);
        } catch (IllegalArgumentException e) {
            return new RegisterResponse(false, "Invalid user data.");
        }
        return new RegisterResponse(true, "User registered successfully.");
    }

    private boolean isValidEmail(String email) {
        // Email validation regex pattern
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        return pattern.matcher(email).matches();
    }
}
