package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.GetUserDetailsResponse;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public GetUserDetailsResponse getUserDetails(String username) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            return new GetUserDetailsResponse(user.getEmail(), user.getUsername(), user.getName(), user.getProfilePhoto(), user.getTag(), user.getBio());
        }
        return null;
    }
}
