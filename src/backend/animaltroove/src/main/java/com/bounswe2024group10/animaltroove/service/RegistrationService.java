package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
public class RegistrationService {

    @Autowired
    private RegisteredUserRepository userRepository;

    public RegisteredUser registerNewUser(RegisteredUser newUser) {
        if (userRepository.findByUserName(newUser.getUserName()) != null) {
            return null;
        }
        if (userRepository.findByEmail(newUser.getEmail()) != null) {
            return null;
        }
        if (!isValidEmail(newUser.getEmail())) {
            return null; // Invalid email format
        }
        
    // TODO: Store password securely in the database
        return userRepository.save(newUser);
    }

    private boolean isValidEmail(String email) {
        // Email validation regex pattern
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
        Pattern pattern = Pattern.compile(emailRegex);
        return pattern.matcher(email).matches();
    }
}
