package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.UndislikeRequest;
import com.bounswe2024group10.animaltroove.dto.UndislikeResponse;
import com.bounswe2024group10.animaltroove.dto.UnlikeRequest;
import com.bounswe2024group10.animaltroove.dto.UnlikeResponse;
import com.bounswe2024group10.animaltroove.model.Disliked;
import com.bounswe2024group10.animaltroove.model.Liked;
import com.bounswe2024group10.animaltroove.repository.DislikedRepository;
import com.bounswe2024group10.animaltroove.repository.LikedRepository;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UndislikeService {
    
    @Autowired
    private DislikedRepository dislikedRepository;

    @Autowired
    private RegisteredUserRepository registeredUserRepository;

    public UndislikeResponse undislikePost(UndislikeRequest request) {

        if (registeredUserRepository.findByUserName(request.getUsername()) == null) {
            return new UndislikeResponse(false, "User not found");
        }
        if (!dislikedRepository.existsByUsernameAndPostID(request.getUsername(), request.getPostID())) {
            return new UndislikeResponse(false, "Post not disliked");
        }
        Disliked disliked = dislikedRepository.findByUsernameAndPostID(request.getUsername(), request.getPostID());
        dislikedRepository.delete(disliked);
        return new UndislikeResponse(true, "Post undisliked");
    }

}
