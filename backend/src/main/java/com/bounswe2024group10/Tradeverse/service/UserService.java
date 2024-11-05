package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.GetUserDetailsResponse;
import com.bounswe2024group10.Tradeverse.dto.SetUserDetailsRequest;
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

    public GetUserDetailsResponse updateUserDetails(String username, SetUserDetailsRequest userDetailsRequest) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return null;
        }

        if (userDetailsRequest.getEmail() != null) {
            user.setEmail(userDetailsRequest.getEmail());
        }
        if (userDetailsRequest.getProfilePhoto() != null) {
            user.setProfilePhoto(userDetailsRequest.getProfilePhoto());
        }
        if (userDetailsRequest.getBio() != null) {
            user.setBio(userDetailsRequest.getBio());
        }
        if (userDetailsRequest.getTag() != null) {
            user.setTag(userDetailsRequest.getTag());
        }

        userRepository.save(user);

        return new GetUserDetailsResponse(user.getEmail(), user.getUsername(), user.getName(), user.getProfilePhoto(), user.getTag(), user.getBio());
    }
}
