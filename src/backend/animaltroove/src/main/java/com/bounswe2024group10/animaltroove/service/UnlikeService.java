package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.UnlikeRequest;
import com.bounswe2024group10.animaltroove.dto.UnlikeResponse;
import com.bounswe2024group10.animaltroove.model.Liked;
import com.bounswe2024group10.animaltroove.model.Dislike;
// import com.bounswe2024group10.animaltroove.repository.BookmarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UnlikeService {

    // TODO: add an autowired unlike repository 

    public UnlikeResponse unlikePost(UnlikeRequest request) {

        if (request.getRegisteredUserID() == 0 || request.getPostID() == null) {
            return new UnlikeResponse(false, "Post or User does not exist");
        }

        // TODO: return error for unlike when post is not already liked

        // TODO: return the successful version of the function above

        return null;
    }
}
