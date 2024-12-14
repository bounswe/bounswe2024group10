package com.annotation.annotation_service.model.dto;

public class AnnotationBody {
    private String type = "TextualBody";
    private String value;

    // Constructor
    public AnnotationBody(String value) {
        this.value = value;
    }

    // Getters and Setters
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
