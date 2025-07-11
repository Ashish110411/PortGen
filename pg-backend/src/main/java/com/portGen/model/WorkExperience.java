package com.portGen.model;

public class WorkExperience {
    private String company;
    private String position;
    private String startMonth;
    private String startYear;
    private String endMonth;
    private String endYear;
    private boolean present; // true if currently working here
    private String location;
    private String description;

    public WorkExperience() {}

    public WorkExperience(String company, String position, String startMonth, String startYear,
                          String endMonth, String endYear, boolean present, String location, String description) {
        this.company = company;
        this.position = position;
        this.startMonth = startMonth;
        this.startYear = startYear;
        this.endMonth = endMonth;
        this.endYear = endYear;
        this.present = present;
        this.location = location;
        this.description = description;
    }

    // Getters and Setters
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }

    public String getStartMonth() { return startMonth; }
    public void setStartMonth(String startMonth) { this.startMonth = startMonth; }

    public String getStartYear() { return startYear; }
    public void setStartYear(String startYear) { this.startYear = startYear; }

    public String getEndMonth() { return endMonth; }
    public void setEndMonth(String endMonth) { this.endMonth = endMonth; }

    public String getEndYear() { return endYear; }
    public void setEndYear(String endYear) { this.endYear = endYear; }

    public boolean isPresent() { return present; }
    public void setPresent(boolean present) { this.present = present; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}