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
            return null;
        }
        if (userRepository.findByEmail(request.getEmail()) != null) {
            return null;
        }
        if (!isValidEmail(request.getEmail())) {
            return null;
        }
        RegisteredUser newUser = new RegisteredUser(request.getUserName(), request.getEmail(), request.getPassword(), request.getName(), request.getBirthday(), request.getBio(), request.getProfilePicture());
        return userRepository.save(newUser);
    }

    private boolean isValidEmail(String email) {
        // Email validation regex pattern
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        return pattern.matcher(email).matches();
    }
}
