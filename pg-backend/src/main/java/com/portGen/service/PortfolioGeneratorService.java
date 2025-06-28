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

    /**
     * Generates the portfolio site with the chosen style shade.
     *
     * @param request User's portfolio data, including the chosen style shade.
     * @param image   Profile image file.
     * @param resume  Resume PDF file.
     * @return Path to the generated site directory.
     * @throws IOException
     */
    public Path generateSite(PortfolioRequest request, MultipartFile image, MultipartFile resume) throws IOException {
        Path tempDir = Files.createTempDirectory("portfolio");
        List<ProjectGroup> mergedProjects = mergeDuplicateProjectGroups(request.getProjects());
        request.setProjects(mergedProjects);

        Path templateBase = Paths.get("src/main/resources/template-base");
        copyDirectoryExcluding(templateBase, tempDir, Paths.get("src/styles"));

        String shade = request.getStyleShade();
        if (shade == null || shade.isEmpty()) {
            shade = "purple"; // default
        }
        Path stylesShadeBase = Paths.get("src/main/resources/styles-shades/styles-" + shade);
        Path targetStyles = tempDir.resolve("src/styles");
        copyDirectory(stylesShadeBase, targetStyles);

        if (image != null) {
            Path imagesDir = tempDir.resolve("src/images");
            Files.createDirectories(imagesDir);

            Path profileImgPath = imagesDir.resolve("profile_me.jpg");
            Files.copy(image.getInputStream(), profileImgPath, StandardCopyOption.REPLACE_EXISTING);

            Path profileSmallImgPath = imagesDir.resolve("profile_small.jpg");
            Files.copy(image.getInputStream(), profileSmallImgPath, StandardCopyOption.REPLACE_EXISTING);

            request.setProfileImage("profile_me.jpg");
            request.setProfileImageSmall("profile_small.jpg");
        }

        if (resume != null) {
            Path resumePath = tempDir.resolve("src/data/resume.pdf");
            Files.createDirectories(resumePath.getParent());
            Files.copy(resume.getInputStream(), resumePath, StandardCopyOption.REPLACE_EXISTING);
        }

        Path iconsDir = Paths.get("src/main/resources/static/skill-icons");
        Path targetIcons = tempDir.resolve("src/images/");
        Files.createDirectories(targetIcons);

        for (SkillGroup group : request.getSkills()) {
            if (group.getSkills() != null) {
                for (Skill skill : group.getSkills()) {
                    Path icon = iconsDir.resolve(skill.getIcon());
                    Files.copy(icon, targetIcons.resolve(skill.getIcon()), StandardCopyOption.REPLACE_EXISTING);
                }
            }
        }

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

    /**
     * Copies a directory tree, excluding a specified subdirectory (relative to the root).
     *
     * @param src           Source directory path.
     * @param dest          Destination directory path.
     * @param relativeExclude Subdirectory to exclude (relative to src).
     * @throws IOException
     */
    private void copyDirectoryExcluding(Path src, Path dest, Path relativeExclude) throws IOException {
        Files.walk(src).forEach(source -> {
            try {
                Path rel = src.relativize(source);
                if (rel.startsWith(relativeExclude)) return; // skip excluded
                Path destination = dest.resolve(rel);
                if (Files.isDirectory(source)) {
                    Files.createDirectories(destination);
                } else {
                    Files.copy(source, destination, StandardCopyOption.REPLACE_EXISTING);
                }
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }

    /**
     * Copies an entire directory tree.
     *
     * @param src  Source directory path.
     * @param dest Destination directory path.
     * @throws IOException
     */
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

    /**
     * Merges duplicate project groups by their IDs.
     *
     * @param originalList List of project groups (possibly with duplicates).
     * @return List of merged project groups.
     */
    private List<ProjectGroup> mergeDuplicateProjectGroups(List<ProjectGroup> originalList) {
        Map<String, ProjectGroup> mergedMap = new LinkedHashMap<>();

        for (ProjectGroup group : originalList) {
            String id = group.getId();
            if (!mergedMap.containsKey(id)) {
                ProjectGroup newGroup = new ProjectGroup();
                newGroup.setId(id);
                newGroup.setLabel(group.getLabel());
                newGroup.setData(new ArrayList<>(group.getData()));
                mergedMap.put(id, newGroup);
            } else {
                mergedMap.get(id).getData().addAll(group.getData());
            }
        }

        return new ArrayList<>(mergedMap.values());
    }
}