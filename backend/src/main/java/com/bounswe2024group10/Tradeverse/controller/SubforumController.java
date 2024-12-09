package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.subforum.CreateSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.subforum.CreateSubforumResponse;
import com.bounswe2024group10.Tradeverse.model.Subforum;
import com.bounswe2024group10.Tradeverse.service.SubforumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subforum")
public class SubforumController {
    @Autowired
    private SubforumService subforumService;

    @GetMapping("/all")
    public ResponseEntity<List<Subforum>> getAllSubforums() {
        return ResponseEntity.ok(subforumService.getAllSubforums());
    }

    @PostMapping("/create")
    public ResponseEntity<CreateSubforumResponse> createSubforum(@RequestBody CreateSubforumRequest request) {
        return ResponseEntity.ok(subforumService.createSubforum(request));
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<Void> deleteSubforum(@PathVariable Long id) {
        subforumService.deleteSubforum(id);
        return ResponseEntity.ok().build();
    }
} 