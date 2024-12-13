package com.annotation.annotation_service.service;

import com.annotation.annotation_service.model.AnnotationCreateResponse;
import com.annotation.annotation_service.model.AnnotationRequest;
import com.annotation.annotation_service.model.Annotation;
import com.annotation.annotation_service.repository.AnnotationRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnnotationService {

    @Autowired
    private AnnotationRepository annotationRepository;

    @Autowired
    private ObjectMapper objectMapper;

    public AnnotationCreateResponse createAnnotation(AnnotationRequest annotationRequest) {
        Annotation annotation = new Annotation();

        // Set basic fields
        annotation.setType(annotationRequest.getType());
        annotation.setCreator(annotationRequest.getCreator());

        try {
            annotation.setBody(objectMapper.writeValueAsString(annotationRequest.getBody()));
            annotation.setTarget(objectMapper.writeValueAsString(annotationRequest.getTarget()));
        } catch (Exception e) {
            throw new RuntimeException("Failed to serialize body or target", e);
        }

        if (annotationRequest.getTarget().getPostId() != null) {
            annotation.setPostId(annotationRequest.getTarget().getPostId());
        }
        if (annotationRequest.getTarget().getCommentId() != null) {
            annotation.setCommentId(annotationRequest.getTarget().getCommentId());
        }

        Annotation savedAnnotation = annotationRepository.save(annotation);

        return new AnnotationCreateResponse(
                savedAnnotation.getId(),
                "Annotation saved successfully");
    }

    
}
