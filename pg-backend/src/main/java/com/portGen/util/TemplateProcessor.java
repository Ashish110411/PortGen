//package com.portGen.util;
//
//import com.portGen.model.*;
//import org.springframework.stereotype.Component;
//
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Component
//public class TemplateProcessor {
//
//    public void processTemplate(Path templatePath, Path outputPath, PortfolioRequest request) throws IOException {
//        String content = Files.readAllLines(templatePath).stream().collect(Collectors.joining("\n"));
//
//        // Basic replacements using safe() to avoid NullPointerException
//        content = content.replace("{{name}}", safe(request.getName()));
//        content = content.replace("{{about}}", safe(request.getAbout()));
//        content = content.replace("{{aboutParagraph1}}", safe(request.getAboutParagraph1()));
//        content = content.replace("{{aboutParagraph2}}", safe(request.getAboutParagraph2()));
//        content = content.replace("{{aboutParagraph3}}", safe(request.getAboutParagraph3()));
//        content = content.replace("{{aboutParagraph4}}", safe(request.getAboutParagraph4()));
//
////        content = content.replace("{{linkedinUrl}}", safe(request.getSocialLinks().getLinkedin()));
////        content = content.replace("{{githubUrl}}", safe(request.getSocialLinks().getGithub()));
////        content = content.replace("{{instagramUrl}}", safe(request.getSocialLinks().getInstagram()));
////        content = content.replace("{{whatsappUrl}}", safe(request.getSocialLinks().getWhatsapp()));
////        content = content.replace("{{websiteUrl}}", safe(request.getSocialLinks().getWebsite()));
//
//
//        content = content.replace("{{email}}", safe(request.getEmail()));
//        content = content.replace("{{altEmail}}", safe(request.getAltEmail()));
//
//        content = content.replace("{{educationList}}", generateEducationJs(request.getEducationList()));
//        content = content.replace("{{skillsData}}", generateSkillsJs(request.getSkills()));
//        content = content.replace("{{projects}}", generateProjectsJs(request.getProjects()));
//        content = content.replace("{{roles}}", generateRolesJs(request.getRoles()));
//        content = content.replace("{{tabData}}", generateTabDataJs(request.getProjects()));
//        content = content.replace("{{cvPath}}", "./resume.pdf");
//
//
//        Files.write(outputPath, content.getBytes());
//    }
//
//    private String safe(String value) {
//        return value == null ? "" : value;
//    }
//
//    private String generateEducationJs(List<Education> list) {
//        if (list == null) return "[]";
//        return list.stream()
//                .map(e -> String.format(
//                        "{ year: \"%s\", degree: \"%s\", institution: \"%s\", description: \"\" }",
//                        safe(e.getYear()), safe(e.getDegree()), safe(e.getInstitution())
//                ))
//                .collect(Collectors.joining(",\n        ", "[\n        ", "\n    ]"));
//    }
//
//    private String generateSkillsJs(List<Skill> skills) {
//        if (skills == null) return "[]";
//        return skills.stream()
//                .map(s -> String.format("{ name: \"%s\", icon: \"%s\" }", safe(s.getName()), safe(s.getIcon())))
//                .collect(Collectors.joining(",\n        ", "[\n        ", "\n    ]"));
//    }
//
//    private String generateProjectsJs(List<Project> projects) {
//        if (projects == null) return "[]";
//        return projects.stream()
//                .map(p -> String.format("{ title: \"%s\", description: \"%s\", link: \"%s\" }",
//                        safe(p.getTitle()), safe(p.getDescription()), safe(p.getLink())))
//                .collect(Collectors.joining(",\n        ", "[\n        ", "\n    ]"));
//    }
//
//    private String generateRolesJs(List<String> roles) {
//        if (roles == null) return "[]";
//        return roles.stream().map(this::safe).map(r -> "\"" + r + "\"").collect(Collectors.joining(", ", "[", "]"));
//    }
//
//    private String generateTabDataJs(List<Project> projects) {
//        if (projects == null) return "[]";
//        return projects.stream()
//                .map(p -> String.format("{ label: \"%s\", content: \"%s\" }",
//                        safe(p.getTitle()), safe(p.getDescription())))
//                .collect(Collectors.joining(",\n        ", "[\n        ", "\n    ]"));
//    }
//
//}
//package com.portGen.util;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.databind.ObjectWriter;
//import com.portGen.model.PortfolioRequest;
//import org.springframework.stereotype.Component;
//
//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//
//@Component
//public class TemplateProcessor {
//
//    private final ObjectWriter prettyWriter = new ObjectMapper().writerWithDefaultPrettyPrinter();
//
//    public String processTemplate(String templateContent, PortfolioRequest data) {
//        return templateContent
//                .replace("{{name}}", safe(data.getName()))
//                .replace("{{about}}", safe(data.getAbout()))
//                .replace("{{aboutParagraph1}}", safe(data.getAboutParagraph1()))
//                .replace("{{aboutParagraph2}}", safe(data.getAboutParagraph2()))
//                .replace("{{aboutParagraph3}}", safe(data.getAboutParagraph3()))
//                .replace("{{aboutParagraph4}}", safe(data.getAboutParagraph4()))
//                .replace("{{email}}", safe(data.getEmail()))
//                .replace("{{altEmail}}", safe(data.getAltEmail()))
//                .replace("{{linkedin}}", safe(data.getSocialLinks().getLinkedin()))
//                .replace("{{github}}", safe(data.getSocialLinks().getGithub()))
//                .replace("{{website}}", safe(data.getSocialLinks().getWebsite()))
//                .replace("{{instagram}}", safe(data.getSocialLinks().getInstagram()))
//                .replace("{{whatsapp}}", safe(data.getSocialLinks().getWhatsapp()))
//                .replace("{{roles}}", toJsonSafe(data.getRoles()))
//                .replace("{{skillsData}}", toJsonSafe(data.getSkills()))
//                .replace("{{educationList}}", toJsonSafe(data.getEducationList()))
//                .replace("{{selectedComponents}}", toJsonSafe(data.getSelectedComponents()))
//                .replace("{{tabData}}", toGroupedTabData(data));
//    }
//
//    public void processTemplate(Path inputPath, Path outputPath, PortfolioRequest data) {
//        try {
//            String content = Files.readString(inputPath);
//            String processed = processTemplate(content, data);
//            Files.writeString(outputPath, processed);
//        } catch (IOException e) {
//            throw new RuntimeException("Failed to process template: " + inputPath, e);
//        }
//    }
//
//    private String safe(String val) {
//        return val == null ? "" : val;
//    }
//
//    private String toJsonSafe(Object obj) {
//        try {
//            return prettyWriter.writeValueAsString(obj);
//        } catch (Exception e) {
//            return "[]";
//        }
//    }
//
//    private String toGroupedTabData(PortfolioRequest request) {
//        try {
//            return prettyWriter.writeValueAsString(
//                    request.getProjects()
//                            .stream()
//                            .collect(java.util.stream.Collectors.groupingBy(
//                                    p -> safe(extractDomainId(p.getId())),
//                                    java.util.LinkedHashMap::new,
//                                    java.util.stream.Collectors.toList()
//                            ))
//                            .entrySet()
//                            .stream()
//                            .map(e -> {
//                                String domainId = e.getKey();
//                                String label = toDomainLabel(domainId);
//                                return new TabData(domainId, label, e.getValue());
//                            })
//                            .toList()
//            );
//        } catch (Exception e) {
//            return "[]";
//        }
//    }
//
//    private String extractDomainId(String title) {
//        if (title.toLowerCase().contains("ml") || title.toLowerCase().contains("ai")) return "ml";
//        if (title.toLowerCase().contains("unity") || title.toLowerCase().contains("game")) return "gamedev";
//        if (title.toLowerCase().contains("android")) return "android";
//        if (title.toLowerCase().contains("ios") || title.toLowerCase().contains("swift")) return "ios";
//        if (title.toLowerCase().contains("web") || title.toLowerCase().contains("react")) return "web";
//        return "misc";
//    }
//
//    private String toDomainLabel(String domainId) {
//        return switch (domainId) {
//            case "ml" -> "ML/AI Projects";
//            case "gamedev" -> "Game Development";
//            case "android" -> "Android Dev";
//            case "ios" -> "iOS Dev";
//            case "web" -> "Web Projects";
//            case "misc" -> "Miscellaneous";
//            default -> domainId;
//        };
//    }
//
//    private static class TabData {
//        public String id;
//        public String label;
//        public Object data;
//
//        public TabData(String id, String label, Object data) {
//            this.id = id;
//            this.label = label;
//            this.data = data;
//        }
//    }
//}

package com.portGen.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.portGen.model.PortfolioRequest;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Component
public class TemplateProcessor {

    private final ObjectWriter prettyWriter = new ObjectMapper().writerWithDefaultPrettyPrinter();

    public String processTemplate(String templateContent, PortfolioRequest data) {
        return templateContent
                .replace("{{name}}", safe(data.getName()))
                .replace("{{about}}", safe(data.getAbout()))
                .replace("{{aboutParagraph1}}", safe(data.getAboutParagraph1()))
                .replace("{{aboutParagraph2}}", safe(data.getAboutParagraph2()))
                .replace("{{aboutParagraph3}}", safe(data.getAboutParagraph3()))
                .replace("{{aboutParagraph4}}", safe(data.getAboutParagraph4()))
                .replace("{{email}}", safe(data.getEmail()))
                .replace("{{altEmail}}", safe(data.getAltEmail()))
                .replace("{{instagramUrl}}", safe(data.getSocialLinks().getInstagram()))
                .replace("{{linkedinUrl}}", safe(data.getSocialLinks().getLinkedin()))
                .replace("{{githubUrl}}", safe(data.getSocialLinks().getGithub()))
                .replace("{{websiteUrl}}", safe(data.getSocialLinks().getWebsite()))
                .replace("{{whatsappUrl}}", safe(data.getSocialLinks().getWhatsapp()))
                .replace("{{roles}}", toJsonSafe(data.getRoles()))
                .replace("{{skillsData}}", toJsonSafe(data.getSkills()))
                .replace("{{educationList}}", toJsonSafe(data.getEducationList()))
                .replace("{{selectedComponents}}", toJsonSafe(data.getSelectedComponents()))
                .replace("{{tabData}}", toJsonSafe(data.getProjects()))
                .replace("{{profileImage}}", safe(data.getProfileImage()))
                .replace("{{profileImageSmall}}", safe(data.getProfileImageSmall()))
                ;
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
