package com.portGen.controller;

import com.portGen.model.PortfolioRequest;
import com.portGen.service.PortfolioGeneratorService;
import com.portGen.service.ZipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Path;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    @Autowired
    private PortfolioGeneratorService generatorService;

    @Autowired
    private ZipService zipService;

    @PostMapping("/generate")
    public ResponseEntity<InputStreamResource> generatePortfolio(
            @RequestPart("data") PortfolioRequest request,
            @RequestPart(value = "profileImage", required = false) MultipartFile image,
            @RequestPart(value = "resume", required = false) MultipartFile resume
    ) throws IOException {
        Path siteDir = generatorService.generateSite(request, image, resume);
        Path zipFile = zipService.zipDirectory(siteDir);

        InputStreamResource resource = new InputStreamResource(new FileInputStream(zipFile.toFile()));

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=portfolio.zip")
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .contentLength(zipFile.toFile().length())
                .body(resource);
    }
}
