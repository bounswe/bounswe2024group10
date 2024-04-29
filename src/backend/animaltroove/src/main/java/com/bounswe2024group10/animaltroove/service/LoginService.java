package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.LoginRequest;
import com.bounswe2024group10.animaltroove.dto.LoginResponse;
import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;

import org.apache.commons.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private RegisteredUserRepository userRepository;

    public LoginResponse loginUser(String username, String password) {
        if (username == null || password == null) {
            return new LoginResponse(false, "Username or password cannot be null", null, null);
        }
        if (userRepository.findByUserNameAndPassword(username, password) == null) {
            return new LoginResponse(false, "Username or password is incorrect", null, null);
        }
        RegisteredUser user = userRepository.findByUserNameAndPassword(username, password);
        String token = user.getUserName() + user.getPassword();
        return new LoginResponse(true, "Login successful", token, user.getUserName());
    }
}