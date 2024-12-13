package com.annotation.annotation_service.model.dto;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.List;

@JsonPropertyOrder({"context", "type", "items"})
public class AnnotationListResponse {

    private String context = "http://www.w3.org/ns/anno.jsonld";
    private String type = "AnnotationCollection";
    private List<AnnotationItem> items;

    // Constructor
    public AnnotationListResponse(List<AnnotationItem> items) {
        this.items = items;
    }

    // Getters and Setters
    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<AnnotationItem> getItems() {
        return items;
    }

    public void setItems(List<AnnotationItem> items) {
        this.items = items;
    }


}
