package com.annotation.annotation_service.service;

import com.annotation.annotation_service.model.dto.Annotation;
import com.annotation.annotation_service.model.dto.AnnotationBody;
import com.annotation.annotation_service.model.dto.AnnotationTarget;
import com.annotation.annotation_service.model.dto.AnnotationItem;
import com.annotation.annotation_service.model.dto.AnnotationCreateResponse;
import com.annotation.annotation_service.model.dto.AnnotationListResponse;
import com.annotation.annotation_service.model.dto.AnnotationRequest;
import com.annotation.annotation_service.repository.AnnotationRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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
        annotation.setCreated(LocalDateTime.now());

        // Serialize body and target into JSON strings
        try {
            annotation.setBody(objectMapper.writeValueAsString(annotationRequest.getBody()));
            annotation.setTarget(objectMapper.writeValueAsString(annotationRequest.getTarget()));
        } catch (Exception e) {
            throw new RuntimeException("Failed to serialize body or target", e);
        }

        // Set optional postId and commentId
        if (annotationRequest.getTarget().getPostId() != null) {
            annotation.setPostId(annotationRequest.getTarget().getPostId());
        }
        if (annotationRequest.getTarget().getCommentId() != null) {
            annotation.setCommentId(annotationRequest.getTarget().getCommentId());
        }

        // Save annotation to the database
        Annotation savedAnnotation = annotationRepository.save(annotation);

        // Return response
        return new AnnotationCreateResponse(
                savedAnnotation.getId(),
                "Annotation saved successfully");
    }

    public AnnotationListResponse getAnnotationsForPostAndComments(Long postId, List<Long> commentIds) {
        List<Annotation> annotations = annotationRepository.findByPostIdOrCommentIds(postId, commentIds);
        List<AnnotationItem> annotationItems = new ArrayList<>();

        for (Annotation annotation : annotations) {
            // deserialize body and target from JSON strings
            try {
                AnnotationBody body = objectMapper.readValue(annotation.getBody(), AnnotationBody.class);
                AnnotationTarget target = objectMapper.readValue(annotation.getTarget(), AnnotationTarget.class);
                AnnotationItem annotationItem = new AnnotationItem(
                        annotation.getId(),
                        annotation.getCreator(),
                        annotation.getCreated(),
                        body,
                        target);
                annotationItems.add(annotationItem);
            } catch (Exception e) {
                throw new RuntimeException("Failed to deserialize body or target", e);
            }
        }

        return new AnnotationListResponse(annotationItems);
    }

}
