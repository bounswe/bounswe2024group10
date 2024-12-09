package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.user.*;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public GetUserDetailsResponse getUserDetails(String username) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            return new GetUserDetailsResponse(user.getEmail(), user.getUsername(), user.getName(), user.getProfilePhoto(), user.getTag(), user.getBio(), user.getIsAdmin());
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
            try {
                File file = new File("images/" + UUID.randomUUID() + ".jpg");
                file.createNewFile();
                FileOutputStream fos = new FileOutputStream(file);
                fos.write(Base64.getDecoder().decode(userDetailsRequest.getProfilePhoto()));
                fos.close();
                user.setProfilePhoto(file.getAbsolutePath());
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }
        }
        if (userDetailsRequest.getBio() != null) {
            user.setBio(userDetailsRequest.getBio());
        }
        if (userDetailsRequest.getTag() != null) {
            user.setTag(userDetailsRequest.getTag());
        }
        userRepository.save(user);
        return new GetUserDetailsResponse(user.getEmail(), user.getUsername(), user.getName(), user.getProfilePhoto(), user.getTag(), user.getBio(), user.getIsAdmin());
    }
}
