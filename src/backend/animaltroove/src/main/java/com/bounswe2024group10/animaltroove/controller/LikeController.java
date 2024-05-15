package com.bounswe2024group10.animaltroove.controller;

import com.bounswe2024group10.animaltroove.dto.LikeRequest;
import com.bounswe2024group10.animaltroove.dto.LikeResponse;
import com.bounswe2024group10.animaltroove.dto.UnlikeRequest;
import com.bounswe2024group10.animaltroove.dto.UnlikeResponse;
import com.bounswe2024group10.animaltroove.service.LikeService;
import com.bounswe2024group10.animaltroove.service.UnlikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/users")
public class LikeController {
    
    @Autowired
    private LikeService likeService;

    @Autowired
    private UnlikeService unlikeService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/like")
    public ResponseEntity<LikeResponse> likePost(@RequestBody LikeRequest request) {

        LikeResponse response = likeService.likePost(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/unlike")
    public ResponseEntity<UnlikeResponse> unlikePost(@RequestBody UnlikeRequest request) {
        UnlikeResponse response = unlikeService.unlikePost(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    

}

