package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.GetUserDetailsRequest;
import com.bounswe2024group10.animaltroove.dto.GetUserDetailsResponse;
import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private RegisteredUserRepository registeredUserRepository;

    public GetUserDetailsResponse getUserDetails(GetUserDetailsRequest request) {
        if (request.getUsername() == null || request.getUsername().isEmpty()) {
            return new GetUserDetailsResponse(false, "Username is required", null);
        }
        if (registeredUserRepository.findByUserName(request.getUsername()) == null) {
            return new GetUserDetailsResponse(false, "User not found", null);
        }
        RegisteredUser user = registeredUserRepository.findByUserName(request.getUsername());
        return new GetUserDetailsResponse(true, "User retrieved successfully", user);
    }
}
