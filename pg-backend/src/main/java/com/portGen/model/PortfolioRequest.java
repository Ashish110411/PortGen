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

    // ========== NEW CONTACT FIELDS ==========
    private String phone;
    private String location;

    private List<Education> educationList;

    // ========== NEW CERTIFICATIONS FIELD ==========
    private List<Certification> certifications;

    private List<ProjectGroup> projects;
    private List<SkillGroup> skills;

    private List<String> roles;
    private List<String> selectedComponents;

    // ========== NEW PROFESSIONAL STATS FIELD ==========
    private List<ProfessionalStat> professionalStats;

    private SocialLinks socialLinks = new SocialLinks();

    private String profileImage;
    private String profileImageSmall;

    // ========== GETTERS AND SETTERS ==========

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

    // ========== NEW CONTACT GETTERS/SETTERS ==========
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public List<Education> getEducationList() { return educationList; }
    public void setEducationList(List<Education> educationList) { this.educationList = educationList; }

    // ========== NEW CERTIFICATIONS GETTERS/SETTERS ==========
    public List<Certification> getCertifications() { return certifications; }
    public void setCertifications(List<Certification> certifications) { this.certifications = certifications; }

    public List<ProjectGroup> getProjects() { return projects; }
    public void setProjects(List<ProjectGroup> projects) { this.projects = projects; }

    public List<SkillGroup> getSkills() { return skills; }
    public void setSkills(List<SkillGroup> skills) { this.skills = skills; }

    public List<String> getRoles() { return roles; }
    public void setRoles(List<String> roles) { this.roles = roles; }

    public List<String> getSelectedComponents() { return selectedComponents; }
    public void setSelectedComponents(List<String> selectedComponents) { this.selectedComponents = selectedComponents; }

    // ========== NEW PROFESSIONAL STATS GETTERS/SETTERS ==========
    public List<ProfessionalStat> getProfessionalStats() { return professionalStats; }
    public void setProfessionalStats(List<ProfessionalStat> professionalStats) { this.professionalStats = professionalStats; }

    public SocialLinks getSocialLinks() { return socialLinks; }
    public void setSocialLinks(SocialLinks socialLinks) {
        this.socialLinks = socialLinks == null ? new SocialLinks() : socialLinks;
    }

    public String getProfileImage() { return profileImage; }
    public void setProfileImage(String profileImage) { this.profileImage = profileImage; }

    public String getProfileImageSmall() { return profileImageSmall; }
    public void setProfileImageSmall(String profileImageSmall) { this.profileImageSmall = profileImageSmall; }
}