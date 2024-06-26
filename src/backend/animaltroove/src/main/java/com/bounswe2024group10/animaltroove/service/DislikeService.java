package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.DislikeRequest;
import com.bounswe2024group10.animaltroove.dto.DislikeResponse;
import com.bounswe2024group10.animaltroove.dto.LikeRequest;
import com.bounswe2024group10.animaltroove.dto.LikeResponse;
import com.bounswe2024group10.animaltroove.dto.GetDislikeCountRequest;
import com.bounswe2024group10.animaltroove.dto.GetDislikeCountResponse;
import com.bounswe2024group10.animaltroove.model.Disliked;
import com.bounswe2024group10.animaltroove.model.Liked;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
import com.bounswe2024group10.animaltroove.repository.DislikedRepository;
import com.bounswe2024group10.animaltroove.repository.LikedRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DislikeService {
    
    @Autowired
    private DislikedRepository dislikedRepository;

    @Autowired
    private RegisteredUserRepository registeredUserRepository;

    public DislikeResponse dislikePost(DislikeRequest request) {
        if (registeredUserRepository.findByUserName(request.getUsername()) == null) {
            return new DislikeResponse(false, "User not found");
        }
        if (dislikedRepository.existsByUsernameAndPostID(request.getUsername(), request.getPostID())) {
            return new DislikeResponse(false, "Post already disliked");
        }
        try {
            dislikedRepository.save(new Disliked(request.getUsername(), request.getPostID()));
        } catch (IllegalArgumentException e) {
            return new DislikeResponse(false, "Invalid post data.");
        }
        return new DislikeResponse(true, "Post disliked");
    }

    public GetDislikeCountResponse getDislikeCount(GetDislikeCountRequest request) {
        if (dislikedRepository.findByPostID(request.getPostID()) == null) {
            return new GetDislikeCountResponse(false, "Post not found", 0);
        }
        try {
            int dislikeCount = dislikedRepository.findByPostID(request.getPostID()).size();
            return new GetDislikeCountResponse(true, "Dislike count retrieved successfully", dislikeCount);
        } catch (IllegalArgumentException e) {
            return new GetDislikeCountResponse(false, "Invalid post data.", 0);
        }
    }

}
