package com.bounswe2024group10.animaltroove.controller;

import com.bounswe2024group10.animaltroove.service.SearchService;
import com.bounswe2024group10.animaltroove.dto.SearchRequest;
import com.bounswe2024group10.animaltroove.dto.SearchResponse;

import org.apache.jena.base.Sys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SearchController {   

    @Autowired
    private SearchService searchService;
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/search")
    public ResponseEntity<SearchResponse> search(@RequestBody SearchRequest searchRequest) {
        SearchResponse searchResponse = searchService.search(searchRequest.getSearchTerm());
        if (searchResponse == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(searchResponse, HttpStatus.OK);
    }
}