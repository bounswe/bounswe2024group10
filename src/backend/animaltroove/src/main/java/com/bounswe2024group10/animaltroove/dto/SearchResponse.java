package com.bounswe2024group10.animaltroove.dto;

public class SearchResponse {
    private String name;
    private String cycle;
    private String pregnancy;
    private String lifeExpectancy;
    private String heartRate;
    private String speed;
    private String numberOfBirths;
    private String pic;
    private String wingSpan;
    private String conservationStatus;
    private String mainLabel;

    public SearchResponse() {
        // Default constructor
    }

    // Getters and setters for each field
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCycle() {
        return cycle;
    }

    public void setMainLabel(String mainLabel) {
        this.mainLabel = mainLabel;
    }
    public String getMainLabel() {
        return this.mainLabel;
    }

    public void setCycle(String cycle) {
        this.cycle = cycle;
    }
    public void setPic(String pic){this.pic = pic;}

    public String getPic(){return this.pic;}
    public String getPregnancy() {
        return pregnancy;
    }

    public void setPregnancy(String pregnancy) {
        this.pregnancy = pregnancy;
    }

    public String getLifeExpectancy() {
        return lifeExpectancy;
    }

    public void setLifeExpectancy(String lifeExpectancy) {
        this.lifeExpectancy = lifeExpectancy;
    }

    public String getHeartRate() {
        return heartRate;
    }

    public void setHeartRate(String heartRate) {
        this.heartRate = heartRate;
    }

    public String getSpeed() {
        return speed;
    }

    public void setSpeed(String speed) {
        this.speed = speed;
    }

    public String getNumberOfBirths() {
        return numberOfBirths;
    }

    public void setNumberOfBirths(String numberOfBirths) {
        this.numberOfBirths = numberOfBirths;
    }

    public String getWingSpan() {
        return wingSpan;
    }

    public void setWingSpan(String wingSpan) {
        this.wingSpan = wingSpan;
    }

    public String getConservationStatus() {
        return conservationStatus;
    }

    public void setConservationStatus(String conservationStatus) {
        this.conservationStatus = conservationStatus;
    }
}
