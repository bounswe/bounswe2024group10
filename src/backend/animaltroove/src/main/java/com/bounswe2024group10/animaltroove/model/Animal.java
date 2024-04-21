package com.bounswe2024group10.animaltroove.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
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