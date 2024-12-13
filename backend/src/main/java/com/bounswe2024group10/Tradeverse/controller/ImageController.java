package com.bounswe2024group10.Tradeverse.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.nio.file.Files;

@RestController
@RequestMapping("/api/images")
public class ImageController {
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{filename}")
    public ResponseEntity<byte[]> getImage(@PathVariable String filename) {
        try {
            File file = new File("/images/" + filename);
            byte[] image = Files.readAllBytes(file.toPath());
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(image);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
} 