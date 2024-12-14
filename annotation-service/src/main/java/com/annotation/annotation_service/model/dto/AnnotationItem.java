package com.annotation.annotation_service.model.dto;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({ "id", "type", "body", "creator", "target" })
public class AnnotationItem {
    private Long id;
    private String type = "Annotation";
    private String creator;
    private AnnotationBody body;
    private AnnotationTarget target;

    // Constructor
    public AnnotationItem(Long id, String creator, AnnotationBody body, AnnotationTarget target) {
        this.id = id;
        this.creator = creator;
        this.body = body;
        this.target = target;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public AnnotationBody getBody() {
        return body;
    }

    public void setBody(AnnotationBody body) {
        this.body = body;
    }

    public AnnotationTarget getTarget() {
        return target;
    }

    public void setTarget(AnnotationTarget target) {
        this.target = target;
    }
}