package com.portGen.model;

public class Certification {
    private String title;
    private String institution;
    private String year;

    // Default constructor
    public Certification() {}

    // Constructor with parameters
    public Certification(String title, String institution, String year) {
        this.title = title;
        this.institution = institution;
        this.year = year;
    }

    // Getters and Setters
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }

    public String getYear() { return year; }
    public void setYear(String year) { this.year = year; }

    @Override
    public String toString() {
        return STR."Certification{title='\{title}', institution='\{institution}', year='\{year}'}";
    }
}