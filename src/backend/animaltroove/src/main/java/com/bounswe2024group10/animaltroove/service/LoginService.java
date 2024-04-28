package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private RegisteredUserRepository userRepository;

    public RegisteredUser loginUser(String username, String password) {
        // TODO: Store password securely in the database
        return userRepository.findByUserNameAndPassword(username, password);
    }
}