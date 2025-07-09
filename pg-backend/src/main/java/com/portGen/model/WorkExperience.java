package com.portGen.model;

public class WorkExperience {
    private String company;
    private String position;
    private String duration;
    private String location;
    private String description;
    private String year;

    // Constructors
    public WorkExperience() {}

    public WorkExperience(String company, String position, String duration, String location, String description, String year) {
        this.company = company;
        this.position = position;
        this.duration = duration;
        this.location = location;
        this.description = description;
        this.year = year;
    }

    // Getters and Setters
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getYear() { return year; }
    public void setYear(String year) { this.year = year; }
}