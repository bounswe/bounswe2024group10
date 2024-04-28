package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.sql.Blob;

@Entity
@Table(name = "animal")
public class Animal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "region")
    private String region;

    @Column(name = "eating_type")
    private String eatingType;

    @Column(name = "latin_name")
    private String latinName;

    @Column(name = "common_name")
    private String commonName;

    @Column(name = "average_life")
    private Integer averageLife;

    @Column(name = "picture")
    private Blob picture;

    @Column(name = "description", length = 100)
    private String description;

    public Animal() {
        // Default constructor
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
