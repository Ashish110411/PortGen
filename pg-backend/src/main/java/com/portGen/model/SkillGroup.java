package com.portGen.model;

import java.util.ArrayList;
import java.util.List;

public class SkillGroup {
    private String category;
    private List<Skill> skills = new ArrayList<>();

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<Skill> getSkills() {
        return skills;
    }

    public void setSkills(List<Skill> skills) {
        this.skills = skills == null ? new ArrayList<>() : skills;
    }
}
