package com.bounswe2024group10.animaltroove.controller;

import com.bounswe2024group10.animaltroove.dto.DislikeRequest;
import com.bounswe2024group10.animaltroove.dto.DislikeResponse;
import com.bounswe2024group10.animaltroove.dto.UndislikeRequest;
import com.bounswe2024group10.animaltroove.dto.UndislikeResponse;
import com.bounswe2024group10.animaltroove.service.DislikeService;
import com.bounswe2024group10.animaltroove.service.UndislikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class DislikeController {
    
    @Autowired
    private DislikeService dislikeService;

    @Autowired
    private UndislikeService undislikeService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/dislike")
    public ResponseEntity<DislikeResponse> dislikePost(@RequestBody DislikeRequest request) {
        DislikeResponse response = dislikeService.dislikePost(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/undislike")
    public ResponseEntity<UndislikeResponse> undislikePost(@RequestBody UndislikeRequest request) {
        UndislikeResponse response = undislikeService.undislikePost(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
