package com.bounswe2024group10.animaltroove.service;

// Our imports
import com.bounswe2024group10.animaltroove.dto.UnbookmarkRequest;
import com.bounswe2024group10.animaltroove.dto.UnbookmarkResponse;
import com.bounswe2024group10.animaltroove.model.Bookmarked;
import com.bounswe2024group10.animaltroove.repository.BookmarkedRepository;

// Springboot imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UnbookmarkService {

    @Autowired
    private BookmarkedRepository bookmarkedRepository;

    public UnbookmarkResponse unbookmarkPost(UnbookmarkRequest request) {
        if (bookmarkedRepository.findByUsernameAndPostID(request.getUsername(), request.getPostID()) == null) {
            return new UnbookmarkResponse(false, "Post not bookmarked");
        }

        Bookmarked unbookmarked = bookmarkedRepository.findByUsernameAndPostID(request.getUsername(), request.getPostID());
        try {
            bookmarkedRepository.delete(unbookmarked);
        } catch (IllegalArgumentException e) {
            return new UnbookmarkResponse(false, "Invalid post data.");
        }
        return new UnbookmarkResponse(true, "Post unbookmarked");
    }
}