package com.bounswe2024group10.animaltroove.service;

import com.bounswe2024group10.animaltroove.dto.BookmarkRequest;
import com.bounswe2024group10.animaltroove.dto.BookmarkResponse;
import com.bounswe2024group10.animaltroove.dto.UnbookmarkRequest;
import com.bounswe2024group10.animaltroove.dto.UnbookmarkResponse;
import com.bounswe2024group10.animaltroove.model.Bookmarked;
import com.bounswe2024group10.animaltroove.repository.BookmarkedRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookmarkService {

    @Autowired
    private BookmarkedRepository bookmarkedRepository;

    public BookmarkResponse bookmarkPost(BookmarkRequest request) {
        if (bookmarkedRepository.findByUsernameAndPostID(request.getUsername(), request.getPostID()) != null) {
            return new BookmarkResponse(false, "Post already bookmarked");
        }

        try {
            bookmarkedRepository.save(new Bookmarked(request.getUsername(), request.getPostID()));
        } catch (IllegalArgumentException e) {
            return new BookmarkResponse(false, "Invalid post data.");
        }
        return new BookmarkResponse(true, "Post bookmarked");
    }

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