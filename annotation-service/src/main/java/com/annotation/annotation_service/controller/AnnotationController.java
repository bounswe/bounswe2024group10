package com.annotation.annotation_service.controller;

import com.annotation.annotation_service.model.Annotation;
import com.annotation.annotation_service.model.AnnotationRequest;
import com.annotation.annotation_service.model.AnnotationCreateResponse;
import com.annotation.annotation_service.model.AnnotationListResponse;
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

    @GetMapping()
    public ResponseEntity<AnnotationListResponse> getAnnotationsForPostAndComments(
            @RequestParam Long postId,
            @RequestParam List<Long> commentIds) {
        List<Annotation> annotations = annotationService.getAnnotationsForPostAndComments(postId, commentIds);
        
    }

    // @DeleteMapping("/{id}")
    // public ResponseEntity<Void> deleteAnnotation(@PathVariable Long id) {
    //     annotationService.deleteAnnotation(id);
    //     return ResponseEntity.noContent().build();
    // }
}
