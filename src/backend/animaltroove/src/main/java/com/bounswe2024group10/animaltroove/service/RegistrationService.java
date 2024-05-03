package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.RegisterRequest;
import com.bounswe2024group10.animaltroove.dto.RegisterResponse;
import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class RegistrationService {

    @Autowired
    private RegisteredUserRepository userRepository;

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
        RegisteredUser newUser = new RegisteredUser(request.getUserName(), request.getEmail(), request.getPassword(), request.getName(), request.getBirthday(), request.getBio(), request.getProfilePicture());
        if (userRepository.save(newUser) == null) {
            return new RegisterResponse(false, "An error occurred while saving the user to the database.");
        } else {
            return new RegisterResponse(true, "User registered successfully.");
        }
    }

    private boolean isValidEmail(String email) {
        // Email validation regex pattern
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        return pattern.matcher(email).matches();
    }
}
