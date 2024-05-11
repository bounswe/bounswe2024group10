package com.bounswe2024group10.animaltroove.service;

// Our imports
import com.bounswe2024group10.animaltroove.dto.UnbookmarkRequest;
import com.bounswe2024group10.animaltroove.dto.UnbookmarkResponse;
import com.bounswe2024group10.animaltroove.model.Bookmarked;
import com.bounswe2024group10.animaltroove.repository.BookmarkRepository;

// Springboot imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UnbookmarkService {

    @Autowired
    private BookmarkRepository bookmarkRepository;

    public UnbookmarkResponse unbookmarkPost(UnbookmarkRequest request) {

        if (request.getRegisteredUserID() == 0 || request.getPostID() == null) {
            return new UnbookmarkResponse(false, "Post or User does not exist");
        }
        if (bookmarkRepository.findByRegisteredUserIDandPostID(request.getRegisteredUserID(),  request.getPostID()) == null) {
            return new UnbookmarkResponse(false, "This post has not been bookmarked!");
        }

        // This part will be changed
        Bookmarked unbookmarkedPost = bookmarkRepository.findByRegisteredUserIDandPostID(request.getRegisteredUserID(), request.getPostID());
        try {
            bookmarkRepository.delete(unbookmarkedPost);
        } catch (IllegalArgumentException e) {
            return new UnbookmarkResponse(false, "Invalid post data.");
        }
        return new UnbookmarkResponse(true, "Post unbookmarked");

    }
}
