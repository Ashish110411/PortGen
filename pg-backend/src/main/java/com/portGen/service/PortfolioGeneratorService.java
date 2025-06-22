package com.portGen.service;

import com.portGen.model.PortfolioRequest;
import com.portGen.model.ProjectGroup;
import com.portGen.model.Skill;
import com.portGen.model.SkillGroup;
import com.portGen.util.TemplateProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class PortfolioGeneratorService {

    @Autowired
    private TemplateProcessor templateProcessor;

    public Path generateSite(PortfolioRequest request, MultipartFile image, MultipartFile resume) throws IOException {
        Path tempDir = Files.createTempDirectory("portfolio");
        List<com.portGen.model.ProjectGroup> mergedProjects = mergeDuplicateProjectGroups(request.getProjects());
        request.setProjects(mergedProjects);

        // Copy base template project
        Path templateBase = Paths.get("src/main/resources/template-base");
        copyDirectory(templateBase, tempDir);

        // Inject profile image (full size and small version)
        if (image != null) {
            Path imagesDir = tempDir.resolve("src/images");
            Files.createDirectories(imagesDir);

            Path profileImgPath = imagesDir.resolve("profile_me.jpg");
            Files.copy(image.getInputStream(), profileImgPath, StandardCopyOption.REPLACE_EXISTING);

            Path profileSmallImgPath = imagesDir.resolve("profile_small.jpg");
            Files.copy(image.getInputStream(), profileSmallImgPath, StandardCopyOption.REPLACE_EXISTING);

            // Set image paths in request so TemplateProcessor can replace them
            request.setProfileImage("profile_me.jpg");
            request.setProfileImageSmall("profile_small.jpg");
        }

        // Inject resume
        if (resume != null) {
            Path resumePath = tempDir.resolve("src/data/resume.pdf");
            Files.createDirectories(resumePath.getParent());
            Files.copy(resume.getInputStream(), resumePath, StandardCopyOption.REPLACE_EXISTING);
        }

        // Copy only selected skill icons
        Path iconsDir = Paths.get("src/main/resources/static/skill-icons");
        Path targetIcons = tempDir.resolve("src/images/");
        Files.createDirectories(targetIcons);
//        for (Skill skill : request.getSkills()) {
//            Path icon = iconsDir.resolve(skill.getIcon());
//            Files.copy(icon, targetIcons.resolve(skill.getIcon()), StandardCopyOption.REPLACE_EXISTING);
//        }
        for (SkillGroup group : request.getSkills()) {
            if (group.getSkills() != null) {
                for (Skill skill : group.getSkills()) {
                    Path icon = iconsDir.resolve(skill.getIcon());
                    Files.copy(icon, targetIcons.resolve(skill.getIcon()), StandardCopyOption.REPLACE_EXISTING);
                }
            }
        }



        // Process all .template files with user data
        Files.walk(tempDir)
                .filter(path -> path.toString().endsWith(".template"))
                .forEach(templateFile -> {
                    try {
                        Path finalFile = Paths.get(templateFile.toString().replace(".template", ""));
                        templateProcessor.processTemplate(templateFile, finalFile, request);
                        Files.delete(templateFile); // Clean up
                    } catch (IOException e) {
                        throw new RuntimeException("Failed to process template: " + templateFile, e);
                    }
                });

        return tempDir;
    }

    private void copyDirectory(Path src, Path dest) throws IOException {
        Files.walk(src).forEach(source -> {
            try {
                Path destination = dest.resolve(src.relativize(source));
                if (Files.isDirectory(source)) {
                    Files.createDirectories(destination);
                } else {
                    Files.copy(source, destination, StandardCopyOption.REPLACE_EXISTING);
                }
            } catch (IOException e) {
                throw new RuntimeException("Failed to copy directory", e);
            }
        });
    }
    private List<com.portGen.model.ProjectGroup> mergeDuplicateProjectGroups(List<com.portGen.model.ProjectGroup> originalList) {
        Map<String, ProjectGroup> mergedMap = new LinkedHashMap<>();

        for (com.portGen.model.ProjectGroup group : originalList) {
            String id = group.getId();
            if (!mergedMap.containsKey(id)) {
                // First occurrence
                mergedMap.put(id, new com.portGen.model.ProjectGroup());
                mergedMap.get(id).setId(id);
                mergedMap.get(id).setLabel(group.getLabel());
                mergedMap.get(id).setData(new ArrayList<>(group.getData()));
            } else {
                // Merge additional data
                mergedMap.get(id).getData().addAll(group.getData());
            }
        }

        return new ArrayList<>(mergedMap.values());
    }

}
