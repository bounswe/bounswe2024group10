package com.annotation.annotation_service.model.dto;

public class AnnotationCreateResponse {

    private Long id; // ID of the created annotation
    private String message; // Success message

    // Constructor
    public AnnotationCreateResponse(Long id, String message) {
        this.id = id;
        this.message = message;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
