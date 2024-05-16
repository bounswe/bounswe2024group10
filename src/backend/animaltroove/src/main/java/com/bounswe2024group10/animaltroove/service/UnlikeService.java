package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.UnlikeRequest;
import com.bounswe2024group10.animaltroove.dto.UnlikeResponse;
import com.bounswe2024group10.animaltroove.model.Liked;
import com.bounswe2024group10.animaltroove.repository.LikedRepository;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UnlikeService {

    @Autowired
    private LikedRepository likedRepository;

    @Autowired
    private RegisteredUserRepository registeredUserRepository;

    public UnlikeResponse unlikePost(UnlikeRequest request) {

        if (registeredUserRepository.findByUserName(request.getUsername()) == null) {
            return new UnlikeResponse(false, "User not found");
        }
        if (!likedRepository.existsByUsernameAndPostID(request.getUsername(), request.getPostID())) {
            return new UnlikeResponse(false, "Post not liked");
        }
        Liked liked = likedRepository.findByUsernameAndPostID(request.getUsername(), request.getPostID());
        likedRepository.delete(liked);
        return new UnlikeResponse(true, "Post unliked");
    }
}
