package com.bounswe2024group10.Tradeverse.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class Content {
    
    @Column(nullable = false)
    private String type;
    
    @Column(nullable = false)
    private String value;
    
    public Content() {
    }
    
    public Content(String type, String value) {
        this.type = type;
        this.value = value;
    }
    
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