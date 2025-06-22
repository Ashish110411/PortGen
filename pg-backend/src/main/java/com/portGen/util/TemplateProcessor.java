package com.portGen.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.portGen.model.PortfolioRequest;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class TemplateProcessor {

    private final ObjectWriter prettyWriter = new ObjectMapper().writerWithDefaultPrettyPrinter();

    public String processTemplate(String templateContent, PortfolioRequest data) {
        String processed = templateContent
                // Basic replacements
                .replace("{{name}}", safe(data.getName()))
                .replace("{{about}}", safe(data.getAbout()))
                .replace("{{aboutParagraph1}}", safe(data.getAboutParagraph1()))
                .replace("{{aboutParagraph2}}", safe(data.getAboutParagraph2()))
                .replace("{{aboutParagraph3}}", safe(data.getAboutParagraph3()))
                .replace("{{aboutParagraph4}}", safe(data.getAboutParagraph4()))
                .replace("{{email}}", safe(data.getEmail()))
                .replace("{{altEmail}}", safe(data.getAltEmail()))
                .replace("{{phone}}", safe(data.getPhone()))
                .replace("{{location}}", safe(data.getLocation()))
                .replace("{{profileImage}}", safe(data.getProfileImage()))
                .replace("{{profileImageSmall}}", safe(data.getProfileImageSmall()))

                // Social links
                .replace("{{socialLinks.instagram}}", safe(data.getSocialLinks().getInstagram()))
                .replace("{{socialLinks.linkedin}}", safe(data.getSocialLinks().getLinkedin()))
                .replace("{{socialLinks.github}}", safe(data.getSocialLinks().getGithub()))
                .replace("{{socialLinks.website}}", safe(data.getSocialLinks().getWebsite()))
                .replace("{{socialLinks.whatsapp}}", safe(data.getSocialLinks().getWhatsapp()))

                // JSON arrays for direct use in JavaScript
                .replace("{{roles}}", toJsonSafe(data.getRoles()))
                .replace("{{skillsData}}", toJsonSafe(data.getSkills()))
                .replace("{{educationList}}", toJsonSafe(data.getEducationList()))
                .replace("{{certifications}}", toJsonSafe(data.getCertifications()))
                .replace("{{professionalStats}}", toJsonSafe(data.getProfessionalStats()))
                .replace("{{tabData}}", toJsonSafe(data.getProjects()))
                .replace("{{selectedComponents}}", toJsonSafe(data.getSelectedComponents()));

        // Process conditional blocks
        processed = processConditionals(processed, data);

        // Process loops
        processed = processLoops(processed, data);

        return processed;
    }

    private String processConditionals(String content, PortfolioRequest data) {
        // Handle {{#if field}} ... {{/if}} blocks
        Pattern ifPattern = Pattern.compile("\\{\\{#if\\s+(\\w+(?:\\.\\w+)*)\\}\\}(.*?)\\{\\{/if\\}\\}", Pattern.DOTALL);
        Matcher matcher = ifPattern.matcher(content);

        StringBuffer result = new StringBuffer();
        while (matcher.find()) {
            String field = matcher.group(1);
            String block = matcher.group(2);

            boolean shouldInclude = evaluateCondition(field, data);
            matcher.appendReplacement(result, shouldInclude ? block : "");
        }
        matcher.appendTail(result);

        return result.toString();
    }

    private String processLoops(String content, PortfolioRequest data) {
        // Handle {{#each array}} ... {{/each}} blocks
        Pattern eachPattern = Pattern.compile("\\{\\{#each\\s+(\\w+)\\}\\}(.*?)\\{\\{/each\\}\\}", Pattern.DOTALL);
        Matcher matcher = eachPattern.matcher(content);

        StringBuffer result = new StringBuffer();
        while (matcher.find()) {
            String arrayName = matcher.group(1);
            String template = matcher.group(2);

            String expanded = expandLoop(arrayName, template, data);
            matcher.appendReplacement(result, expanded);
        }
        matcher.appendTail(result);

        return result.toString();
    }

    private boolean evaluateCondition(String field, PortfolioRequest data) {
        switch (field) {
            case "phone": return data.getPhone() != null && !data.getPhone().isEmpty();
            case "location": return data.getLocation() != null && !data.getLocation().isEmpty();
            case "about": return data.getAbout() != null && !data.getAbout().isEmpty();
            case "aboutParagraph1": return data.getAboutParagraph1() != null && !data.getAboutParagraph1().isEmpty();
            case "aboutParagraph2": return data.getAboutParagraph2() != null && !data.getAboutParagraph2().isEmpty();
            case "aboutParagraph3": return data.getAboutParagraph3() != null && !data.getAboutParagraph3().isEmpty();
            case "aboutParagraph4": return data.getAboutParagraph4() != null && !data.getAboutParagraph4().isEmpty();
            case "altEmail": return data.getAltEmail() != null && !data.getAltEmail().isEmpty();
            case "socialLinks.whatsapp": return data.getSocialLinks().getWhatsapp() != null && !data.getSocialLinks().getWhatsapp().isEmpty();
            case "socialLinks.linkedin": return data.getSocialLinks().getLinkedin() != null && !data.getSocialLinks().getLinkedin().isEmpty();
            case "socialLinks.github": return data.getSocialLinks().getGithub() != null && !data.getSocialLinks().getGithub().isEmpty();
            case "socialLinks.website": return data.getSocialLinks().getWebsite() != null && !data.getSocialLinks().getWebsite().isEmpty();
            case "skills": return data.getSkills() != null && !data.getSkills().isEmpty();
            case "certifications": return data.getCertifications() != null && !data.getCertifications().isEmpty();
            case "professionalStats": return data.getProfessionalStats() != null && !data.getProfessionalStats().isEmpty();
            case "projects": return data.getProjects() != null && !data.getProjects().isEmpty();
            default: return false;
        }
    }

    private String expandLoop(String arrayName, String template, PortfolioRequest data) {
        StringBuilder result = new StringBuilder();

        switch (arrayName) {
            case "roles":
                if (data.getRoles() != null) {
                    for (String role : data.getRoles()) {
                        result.append(template.replace("{{this}}", safe(role)));
                    }
                }
                break;

            case "skills":
                if (data.getSkills() != null) {
                    for (Object skillGroup : data.getSkills()) {
                        // Handle skills structure - you'll need to adapt this based on your skills model
                        result.append(processSkillGroup(template, skillGroup));
                    }
                }
                break;

            case "educationList":
                if (data.getEducationList() != null) {
                    for (Object edu : data.getEducationList()) {
                        result.append(processEducation(template, edu));
                    }
                }
                break;

            case "certifications":
                if (data.getCertifications() != null) {
                    for (Object cert : data.getCertifications()) {
                        result.append(processCertification(template, cert));
                    }
                }
                break;

            case "professionalStats":
                if (data.getProfessionalStats() != null) {
                    for (Object stat : data.getProfessionalStats()) {
                        result.append(processStat(template, stat));
                    }
                }
                break;

            case "projects":
                if (data.getProjects() != null) {
                    for (Object project : data.getProjects()) {
                        result.append(processProject(template, project));
                    }
                }
                break;
        }

        return result.toString();
    }

    // Helper methods for processing different object types
    private String processSkillGroup(String template, Object skillGroup) {
        // Implement based on your skill group structure
        return template; // Placeholder
    }

    private String processEducation(String template, Object education) {
        // Implement based on your education structure
        return template; // Placeholder
    }

    private String processCertification(String template, Object certification) {
        // Implement based on your certification structure
        return template; // Placeholder
    }

    private String processStat(String template, Object stat) {
        // Implement based on your professional stat structure
        return template; // Placeholder
    }

    private String processProject(String template, Object project) {
        // Implement based on your project structure
        return template; // Placeholder
    }

    public void processTemplate(Path inputPath, Path outputPath, PortfolioRequest data) {
        try {
            String content = Files.readString(inputPath);
            String processed = processTemplate(content, data);
            Files.writeString(outputPath, processed);
        } catch (IOException e) {
            throw new RuntimeException("Failed to process template: " + inputPath, e);
        }
    }

    private String safe(String val) {
        return val == null ? "" : val;
    }

    private String toJsonSafe(Object obj) {
        try {
            return prettyWriter.writeValueAsString(obj);
        } catch (Exception e) {
            return "[]";
        }
    }
}