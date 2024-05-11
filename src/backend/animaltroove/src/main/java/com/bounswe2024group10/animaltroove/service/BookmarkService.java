package com.bounswe2024group10.animaltroove.service;

// Our imports
import com.bounswe2024group10.animaltroove.dto.BookmarkRequest;
import com.bounswe2024group10.animaltroove.dto.BookmarkResponse;
import com.bounswe2024group10.animaltroove.model.Bookmarked;
import com.bounswe2024group10.animaltroove.repository.BookmarkRepository;

// Springboot imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookmarkService {

    @Autowired
    private BookmarkRepository bookmarkRepository;

    public BookmarkResponse bookmarkPost(BookmarkRequest request) {

        if (request.getRegisteredUserID() == 0 || request.getPostID() == null) {
            return new BookmarkResponse(false, "Post or User does not exist");
        }
        if (bookmarkRepository.findByRegisteredUserIDandPostID(request.getRegisteredUserID(),  request.getPostID()) != null) {
            return new BookmarkResponse(false, "This post has already been bookmarked!");
        }

        Bookmarked bookmarkedPost = new Bookmarked(request.getRegisteredUserID(), request.getPostID());
        try {
            bookmarkRepository.save(bookmarkedPost);
        } catch (IllegalArgumentException e) {
            return new BookmarkResponse(false, "Invalid post data.");
        }
        return new BookmarkResponse(true, "Post bookmarked");

    }
}
