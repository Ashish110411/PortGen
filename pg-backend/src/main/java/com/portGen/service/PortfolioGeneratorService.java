package com.portGen.service;

import com.portGen.model.PortfolioRequest;
import com.portGen.model.Skill;
import com.portGen.util.TemplateProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.*;
import java.util.List;

@Service
public class PortfolioGeneratorService {

    @Autowired
    private TemplateProcessor templateProcessor;

    public Path generateSite(PortfolioRequest request, MultipartFile image, MultipartFile resume) throws IOException {
        Path tempDir = Files.createTempDirectory("portfolio");

        Path templateBase = Paths.get("src/main/resources/template-base");
        copyDirectory(templateBase, tempDir);

        // Replace template files
        Files.walk(tempDir)
                .filter(path -> path.toString().endsWith(".template"))
                .forEach(templateFile -> {
                    try {
                        Path finalFile = Paths.get(templateFile.toString().replace(".template", ""));
                        templateProcessor.processTemplate(templateFile, finalFile, request);
                        Files.delete(templateFile); // Remove .template after processing
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                });

        // Inject profile image
        if (image != null) {
            Path imgPath = tempDir.resolve("src/images/profile_me.jpg");
            Files.copy(image.getInputStream(), imgPath, StandardCopyOption.REPLACE_EXISTING);
        }

        // Inject resume
        if (resume != null) {
            Path resumePath = tempDir.resolve("src/data/resume.pdf");
            Files.copy(resume.getInputStream(), resumePath, StandardCopyOption.REPLACE_EXISTING);
        }

        // Copy only selected skill icons
        Path iconsDir = Paths.get("src/main/resources/static/skill-icons");
        Path targetIcons = tempDir.resolve("src/images/");
        Files.createDirectories(targetIcons);
        for (Skill skill : request.getSkills()) {
            Path icon = iconsDir.resolve(skill.getIcon());
            Files.copy(icon, targetIcons.resolve(skill.getIcon()), StandardCopyOption.REPLACE_EXISTING);
        }

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
                e.printStackTrace();
            }
        });
    }
}
