package com.bounswe2024group10.animaltroove.controller;

// Imports from us
import com.bounswe2024group10.animaltroove.dto.BookmarkRequest;
import com.bounswe2024group10.animaltroove.dto.BookmarkResponse;
import com.bounswe2024group10.animaltroove.dto.UnbookmarkRequest;
import com.bounswe2024group10.animaltroove.dto.UnbookmarkResponse;
import com.bounswe2024group10.animaltroove.service.BookmarkService;
import com.bounswe2024group10.animaltroove.service.UnbookmarkService;

// Imports from the spring-boot
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/users")
public class BookmarkController {   

    @Autowired
    private BookmarkService bookmarkService;
    
    @Autowired
    private UnbookmarkService unbookmarkService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/bookmark")
    public ResponseEntity<BookmarkResponse> bookmarkPost(@RequestBody BookmarkRequest request) {
        BookmarkResponse response = bookmarkService.bookmarkPost(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/unbookmark")
    public ResponseEntity<UnbookmarkResponse> unbookmarkPost(@RequestBody UnbookmarkRequest request) {
        UnbookmarkResponse response = unbookmarkService.unbookmarkPost(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
