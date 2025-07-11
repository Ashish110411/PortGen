package com.portGen.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.portGen.model.PortfolioRequest;
import com.portGen.model.WorkExperience;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class TemplateProcessor {

    private final ObjectWriter prettyWriter = new ObjectMapper().writerWithDefaultPrettyPrinter();

    public String processTemplate(String templateContent, PortfolioRequest data) {
        String processed = templateContent
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

                .replace("{{socialLinks.instagram}}", safe(data.getSocialLinks().getInstagram()))
                .replace("{{socialLinks.linkedin}}", safe(data.getSocialLinks().getLinkedin()))
                .replace("{{socialLinks.github}}", safe(data.getSocialLinks().getGithub()))
                .replace("{{socialLinks.twitter}}", safe(data.getSocialLinks().getTwitter()))
                .replace("{{socialLinks.whatsapp}}", safe(data.getSocialLinks().getWhatsapp()))

                .replace("{{roles}}", toJsonSafe(data.getRoles()))
                .replace("{{skillsData}}", toJsonSafe(data.getSkills()))
                .replace("{{educationList}}", toJsonSafe(data.getEducationList()))
                .replace("{{workExperience}}", toJsonSafe(processWorkExperienceList(data.getWorkExperience())))
                .replace("{{certifications}}", toJsonSafe(data.getCertifications()))
                .replace("{{professionalStats}}", toJsonSafe(data.getProfessionalStats()))
                .replace("{{tabData}}", toJsonSafe(data.getProjects()))
                .replace("{{selectedComponents}}", toJsonSafe(data.getSelectedComponents()));

        processed = processConditionals(processed, data);
        processed = processLoops(processed, data);

        return processed;
    }

    private Object processWorkExperienceList(Object workExperienceObj) {
        if (workExperienceObj == null) return null;

        try {
            ObjectMapper mapper = new ObjectMapper();
            String jsonString = mapper.writeValueAsString(workExperienceObj);
            WorkExperience[] workExperiences = mapper.readValue(jsonString, WorkExperience[].class);

            Map<String, Object>[] processedWorkExperiences = new Map[workExperiences.length];

            for (int i = 0; i < workExperiences.length; i++) {
                WorkExperience work = workExperiences[i];
                Map<String, Object> workMap = new HashMap<>();

                // Only include essential fields
                workMap.put("company", safe(work.getCompany()));
                workMap.put("position", safe(work.getPosition()));
                workMap.put("location", safe(work.getLocation()));
                workMap.put("description", safe(work.getDescription()));

                // Calculate and add formatted date range (year field)
                String dateRange = formatDateRange(work.getStartMonth(), work.getStartYear(),
                        work.getEndMonth(), work.getEndYear(), work.isPresent());
                workMap.put("year", dateRange);

                // Calculate and add duration
                String duration = calculateDuration(work.getStartMonth(), work.getStartYear(),
                        work.getEndMonth(), work.getEndYear(), work.isPresent());
                workMap.put("duration", duration);

                processedWorkExperiences[i] = workMap;
            }

            return processedWorkExperiences;
        } catch (Exception e) {
            return workExperienceObj;
        }
    }

    private String formatDateRange(String startMonth, String startYear, String endMonth, String endYear, boolean present) {
        if (startMonth == null || startYear == null || startMonth.isEmpty() || startYear.isEmpty()) {
            return "";
        }

        String startFormatted = formatMonthYear(startMonth, startYear);
        String endFormatted;

        if (present) {
            endFormatted = "Present";
        } else if (endMonth != null && endYear != null && !endMonth.isEmpty() && !endYear.isEmpty()) {
            endFormatted = formatMonthYear(endMonth, endYear);
        } else {
            endFormatted = "Present";
        }

        return startFormatted + " - " + endFormatted;
    }

    private String formatMonthYear(String month, String year) {
        if (month == null || year == null || month.isEmpty() || year.isEmpty()) {
            return "";
        }

        // Convert full month name to 3-letter abbreviation
        String shortMonth = getShortMonth(month);
        return shortMonth + " " + year;
    }

    private String getShortMonth(String monthName) {
        if (monthName == null || monthName.isEmpty()) return "";

        switch (monthName.toLowerCase()) {
            case "january": return "Jan";
            case "february": return "Feb";
            case "march": return "Mar";
            case "april": return "Apr";
            case "may": return "May";
            case "june": return "Jun";
            case "july": return "Jul";
            case "august": return "Aug";
            case "september": return "Sep";
            case "october": return "Oct";
            case "november": return "Nov";
            case "december": return "Dec";
            default: return monthName.substring(0, Math.min(3, monthName.length()));
        }
    }

    private String calculateDuration(String startMonth, String startYear, String endMonth, String endYear, boolean present) {
        if (startMonth == null || startYear == null || startMonth.isEmpty() || startYear.isEmpty()) {
            return "";
        }

        try {
            int startMonthNum = getMonthNumber(startMonth);
            int startYearNum = Integer.parseInt(startYear);

            int endMonthNum, endYearNum;
            if (present) {
                java.time.LocalDate now = java.time.LocalDate.now();
                endMonthNum = now.getMonthValue();
                endYearNum = now.getYear();
            } else {
                if (endMonth == null || endYear == null || endMonth.isEmpty() || endYear.isEmpty()) {
                    return "";
                }
                endMonthNum = getMonthNumber(endMonth);
                endYearNum = Integer.parseInt(endYear);
            }

            int totalMonths = (endYearNum - startYearNum) * 12 + (endMonthNum - startMonthNum);

            if (totalMonths < 0) return "";

            int years = totalMonths / 12;
            int months = totalMonths % 12;

            StringBuilder result = new StringBuilder();
            if (years > 0) {
                result.append(years).append(" year").append(years > 1 ? "s" : "");
            }
            if (months > 0) {
                if (years > 0) result.append(" ");
                result.append(months).append(" month").append(months > 1 ? "s" : "");
            }

            return result.toString().trim();
        } catch (Exception e) {
            return "";
        }
    }

    private int getMonthNumber(String monthName) {
        if (monthName == null || monthName.isEmpty()) return 1;

        String[] months = {"January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"};
        for (int i = 0; i < months.length; i++) {
            if (months[i].equalsIgnoreCase(monthName)) {
                return i + 1;
            }
        }
        return 1;
    }

    private String processConditionals(String content, PortfolioRequest data) {
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
            case "socialLinks.twitter": return data.getSocialLinks().getTwitter() != null && !data.getSocialLinks().getTwitter().isEmpty();
            case "skills": return data.getSkills() != null && !data.getSkills().isEmpty();
            case "educationList": return data.getEducationList() != null && !data.getEducationList().isEmpty();
            case "workExperience": return data.getWorkExperience() != null && !data.getWorkExperience().isEmpty();
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

            case "workExperience":
                if (data.getWorkExperience() != null) {
                    for (Object work : data.getWorkExperience()) {
                        result.append(processWorkExperience(template, work));
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

    private String processSkillGroup(String template, Object skillGroup) {
        return template;
    }

    private String processEducation(String template, Object education) {
        return template;
    }

    private String processWorkExperience(String template, Object workExperience) {
        return template;
    }

    private String processCertification(String template, Object certification) {
        return template;
    }

    private String processStat(String template, Object stat) {
        return template;
    }

    private String processProject(String template, Object project) {
        return template;
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