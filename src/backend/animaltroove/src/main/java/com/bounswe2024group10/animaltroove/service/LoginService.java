package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.model.User;
import com.bounswe2024group10.animaltroove.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public User loginUser(String username, String password) {
        // TODO: Store password securely in the database
        return userRepository.findByUsernameAndPassword(username, password);
    }
}