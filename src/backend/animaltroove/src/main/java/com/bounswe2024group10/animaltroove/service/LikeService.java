package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.LikeRequest;
import com.bounswe2024group10.animaltroove.dto.LikeResponse;
import com.bounswe2024group10.animaltroove.model.Liked;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import com.bounswe2024group10.animaltroove.repository.LikedRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {

    @Autowired
    private LikedRepository likedRepository;

    @Autowired
    private RegisteredUserRepository registeredUserRepository;

    public LikeResponse likePost(LikeRequest request) {
        if (registeredUserRepository.findByUserName(request.getUsername()) == null) {
            return new LikeResponse(false, "User not found");
        }
        if (likedRepository.existsByUsernameAndPostID(request.getUsername(), request.getPostID())) {
            return new LikeResponse(false, "Post already liked");
        }
        likedRepository.save(new Liked(request.getUsername(), request.getPostID()));
        return new LikeResponse(true, "Post liked");
    }
}
