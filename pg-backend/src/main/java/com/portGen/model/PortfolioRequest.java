package com.portGen.model;

import java.util.List;

public class PortfolioRequest {
    private String name;
    private String about;

    private String aboutParagraph1;
    private String aboutParagraph2;
    private String aboutParagraph3;
    private String aboutParagraph4;

    private String email;
    private String altEmail;

    private List<Education> educationList;
    private List<ProjectGroup> projects;  // <-- CHANGED
    private List<Skill> skills;
    private List<String> roles;
    private List<String> selectedComponents;

    private SocialLinks socialLinks = new SocialLinks(); // default init

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getAbout() { return about; }
    public void setAbout(String about) { this.about = about; }

    public String getAboutParagraph1() { return aboutParagraph1; }
    public void setAboutParagraph1(String aboutParagraph1) { this.aboutParagraph1 = aboutParagraph1; }

    public String getAboutParagraph2() { return aboutParagraph2; }
    public void setAboutParagraph2(String aboutParagraph2) { this.aboutParagraph2 = aboutParagraph2; }

    public String getAboutParagraph3() { return aboutParagraph3; }
    public void setAboutParagraph3(String aboutParagraph3) { this.aboutParagraph3 = aboutParagraph3; }

    public String getAboutParagraph4() { return aboutParagraph4; }
    public void setAboutParagraph4(String aboutParagraph4) { this.aboutParagraph4 = aboutParagraph4; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getAltEmail() { return altEmail; }
    public void setAltEmail(String altEmail) { this.altEmail = altEmail; }

    public List<Education> getEducationList() { return educationList; }
    public void setEducationList(List<Education> educationList) { this.educationList = educationList; }

    public List<ProjectGroup> getProjects() { return projects; }
    public void setProjects(List<ProjectGroup> projects) { this.projects = projects; }

    public List<Skill> getSkills() { return skills; }
    public void setSkills(List<Skill> skills) { this.skills = skills; }

    public List<String> getRoles() { return roles; }
    public void setRoles(List<String> roles) { this.roles = roles; }

    public List<String> getSelectedComponents() { return selectedComponents; }
    public void setSelectedComponents(List<String> selectedComponents) { this.selectedComponents = selectedComponents; }

    public SocialLinks getSocialLinks() { return socialLinks; }
    public void setSocialLinks(SocialLinks socialLinks) {
        this.socialLinks = socialLinks == null ? new SocialLinks() : socialLinks;
    }
}
