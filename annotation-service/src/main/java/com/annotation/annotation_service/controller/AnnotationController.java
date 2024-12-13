package com.annotation.annotation_service.controller;

import com.annotation.annotation_service.model.dto.AnnotationCreateResponse;
import com.annotation.annotation_service.model.dto.AnnotationListResponse;
import com.annotation.annotation_service.model.dto.AnnotationRequest;
import com.annotation.annotation_service.service.AnnotationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/annotations")
public class AnnotationController {

    @Autowired
    private AnnotationService annotationService;

    @PostMapping
    public ResponseEntity<AnnotationCreateResponse> createAnnotation(@RequestBody AnnotationRequest annotationRequest) {
        AnnotationCreateResponse createdAnnotation = annotationService.createAnnotation(annotationRequest);
        return ResponseEntity.ok(createdAnnotation);
    }

    @GetMapping
    public ResponseEntity<AnnotationListResponse> getAnnotationsForPostAndComments(
            @RequestParam(required = false) Long postId,
            @RequestParam(required = false) List<Long> commentIds) {
        AnnotationListResponse response = annotationService.getAnnotationsForPostAndComments(postId, commentIds);
        return ResponseEntity.ok(response);
    }

    // @DeleteMapping("/{id}")
    // public ResponseEntity<Void> deleteAnnotation(@PathVariable Long id) {
    // annotationService.deleteAnnotation(id);
    // return ResponseEntity.noContent().build();
    // }
}
