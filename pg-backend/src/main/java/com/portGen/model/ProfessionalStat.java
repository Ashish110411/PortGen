package com.portGen.model;

public class ProfessionalStat {
    private String number;
    private String label;

    // Default constructor
    public ProfessionalStat() {}

    // Constructor with parameters
    public ProfessionalStat(String number, String label) {
        this.number = number;
        this.label = label;
    }

    // Getters and Setters
    public String getNumber() { return number; }
    public void setNumber(String number) { this.number = number; }

    public String getLabel() { return label; }
    public void setLabel(String label) { this.label = label; }

    @Override
    public String toString() {
        return STR."ProfessionalStat{number='\{number}', label='\{label}'}";
    }
}