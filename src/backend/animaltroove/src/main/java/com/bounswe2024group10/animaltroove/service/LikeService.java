package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.LikeRequest;
import com.bounswe2024group10.animaltroove.dto.LikeResponse;
import com.bounswe2024group10.animaltroove.model.Liked;
import com.bounswe2024group10.animaltroove.model.Dislike;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {
    
    // TODO: add an autowired like repository 

    public LikeResponse likePost(LikeRequest request) {

        if (request.getRegisteredUserID() == 0 || request.getPostID() == null) {
            return new LikeResponse(false, "Post or User does not exist");
        }

        // TODO: return error for unlike when post is not already liked

        // TODO: return the successful version of the function above

        return null;

    }

}
