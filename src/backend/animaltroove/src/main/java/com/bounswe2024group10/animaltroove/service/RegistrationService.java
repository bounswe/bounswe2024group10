package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    private RegisteredUserRepository userRepository;

    public RegisteredUser registerNewUser(RegisteredUser newUser) {
        // TODO: Check if the username is already taken
        // TODO: Check if the email is already taken
        // TODO: Validate all fields (e.g. email format, username length, etc.)
        // TODO: Store password securely in the database
        return userRepository.save(newUser);
    }
}