import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import RolesInput from "./RolesInput";
import PrototypePicker from "./PrototypePicker";
import SkillSelector from "./SkillSelector";
import EducationSection from "./EducationSection";
import ProjectInput from "./ProjectInput";
import { skillGroups } from "../utils/skillGroups";
import "../styles/global.css";

function FormSection() {
    const [formData, setFormData] = useState({
        // Basic Info
        name: "",
        about: "",
        aboutParagraph1: "",
        aboutParagraph2: "",
        aboutParagraph3: "",
        aboutParagraph4: "",
        // Contact Info
        email: "",
        altEmail: "",
        phone: "",
        location: "",
        // Social Links
        socialLinks: {
            linkedin: "",
            github: "",
            website: "",
            instagram: "",
            whatsapp: ""
        },
        // Roles
        roles: [],
        // Professional Stats
        professionalStats: [{ number: "", label: "" }],
        // Style Shade
        styleShade: "purple",
        // Skills (flat array of {name, icon})
        skills: [],
        // Education
        educationList: [{ institution: "", degree: "", year: "" }],
        // Certifications
        certifications: [],
        // Projects
        projects: []
    });

    const [files, setFiles] = useState({
        profileImage: null,
        resume: null,
    });

    // File Handlers
    const handleFileChange = (e) => {
        const { name, files: fileList } = e.target;
        if (fileList.length > 0) {
            setFiles((prev) => ({
                ...prev,
                [name]: fileList[0],
            }));
        }
    };

    // Contact Info Handlers
    const updateContact = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Social Links Handler
    const setSocialLinks = (updatedLinks) => {
        setFormData((prev) => ({
            ...prev,
            socialLinks: updatedLinks
        }));
    };

    // Roles Handler
    const setRoles = (newRoles) => {
        setFormData((prev) => ({
            ...prev,
            roles: newRoles
        }));
    };

    // Professional Stats Handlers
    const updateProfessionalStats = (index, field, value) => {
        const updatedStats = [...formData.professionalStats];
        updatedStats[index] = { ...updatedStats[index], [field]: value };
        setFormData((prev) => ({
            ...prev,
            professionalStats: updatedStats
        }));
    };
    const addProfessionalStat = () => {
        setFormData((prev) => ({
            ...prev,
            professionalStats: [...prev.professionalStats, { number: "", label: "" }]
        }));
    };
    const removeProfessionalStat = (index) => {
        setFormData((prev) => ({
            ...prev,
            professionalStats: prev.professionalStats.filter((_, i) => i !== index)
        }));
    };

    // Certifications Handlers
    const updateCertification = (index, field, value) => {
        const updatedCerts = [...formData.certifications];
        updatedCerts[index] = { ...updatedCerts[index], [field]: value };
        setFormData((prev) => ({
            ...prev,
            certifications: updatedCerts
        }));
    };
    const addCertification = () => {
        setFormData((prev) => ({
            ...prev,
            certifications: [...prev.certifications, { title: "", institution: "", year: "" }]
        }));
    };
    const removeCertification = (index) => {
        setFormData((prev) => ({
            ...prev,
            certifications: prev.certifications.filter((_, i) => i !== index)
        }));
    };

    // Style Shade Handler
    const handleStyleShadeChange = (shade) => {
        setFormData((prev) => ({
            ...prev,
            styleShade: shade
        }));
    };

    // Group skills by category (for backend compatibility)
    function getGroupedSkills(skillsFlatArray) {
        const groupedSkillsMap = {};
        for (const [group, skills] of Object.entries(skillGroups)) {
            groupedSkillsMap[group] = [];
        }
        skillsFlatArray.forEach((skill) => {
            const foundGroup = Object.entries(skillGroups).find(([group, skillList]) =>
                skillList.some((s) => s.name === skill.name)
            );
            const groupName = foundGroup ? foundGroup[0] : "Other";
            if (!groupedSkillsMap[groupName]) {
                groupedSkillsMap[groupName] = [];
            }
            groupedSkillsMap[groupName].push(skill);
        });
        return Object.entries(groupedSkillsMap)
            .filter(([_, skills]) => skills.length > 0)
            .map(([category, skills]) => ({
                category,
                skills,
            }));
    }

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Normalize WhatsApp link
        let whatsappLink = formData.socialLinks.whatsapp.trim();
        if (/^\d{10}$/.test(whatsappLink)) {
            whatsappLink = "https://wa.me/91" + whatsappLink;
        }

        // Group skills by category as the backend expects!
        const groupedSkills = getGroupedSkills(formData.skills);

        // Compose data for submission
        const portfolioData = {
            ...formData,
            socialLinks: { ...formData.socialLinks, whatsapp: whatsappLink },
            skills: groupedSkills
        };

        const formDataToSend = new FormData();
        formDataToSend.append("data", new Blob([JSON.stringify(portfolioData)], { type: "application/json" }));
        if (files.profileImage) formDataToSend.append("profileImage", files.profileImage);
        if (files.resume) formDataToSend.append("resume", files.resume);

        try {
            const response = await fetch("http://localhost:8080/api/portfolio/generate", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                // Download the zip file
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "portfolio.zip";
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
                alert("Portfolio submitted successfully! Download should start automatically.");
            } else {
                alert("Submission failed.");
            }
        } catch (error) {
            alert("Error submitting form.");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="portfolio-form">
            <h1 className="form-title">Portfolio Generator Form</h1>
            {/* Basic Info */}
            <div className="section">
                <h2>Basic Info</h2>
                <input className="input-field" type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={(e) => updateContact("name", e.target.value)} />
                <input className="input-field" type="text" name="about" placeholder="Short About" required value={formData.about} onChange={(e) => updateContact("about", e.target.value)} />
                <textarea className="input-field" name="aboutParagraph1" placeholder="About Paragraph 1" required value={formData.aboutParagraph1} onChange={(e) => updateContact("aboutParagraph1", e.target.value)} />
                <textarea className="input-field" name="aboutParagraph2" placeholder="About Paragraph 2" required value={formData.aboutParagraph2} onChange={(e) => updateContact("aboutParagraph2", e.target.value)} />
                <textarea className="input-field" name="aboutParagraph3" placeholder="About Paragraph 3 (optional)" value={formData.aboutParagraph3} onChange={(e) => updateContact("aboutParagraph3", e.target.value)} />
                <textarea className="input-field" name="aboutParagraph4" placeholder="About Paragraph 4 (optional)" value={formData.aboutParagraph4} onChange={(e) => updateContact("aboutParagraph4", e.target.value)} />
            </div>

            {/* Contact Info */}
            <div className="section">
                <h2>Contact Information</h2>
                <input className="input-field" type="email" name="email" placeholder="Primary Email (Required)" required value={formData.email} onChange={(e) => updateContact("email", e.target.value)} />
                <input className="input-field" type="email" name="altEmail" placeholder="Alternate Email (Optional)" value={formData.altEmail} onChange={(e) => updateContact("altEmail", e.target.value)} />
                <input className="input-field" type="text" name="phone" placeholder="Phone Number (Required)" required value={formData.phone} onChange={(e) => updateContact("phone", e.target.value)} />
                <input className="input-field" type="text" name="location" placeholder="Location (e.g., City, Country)" required value={formData.location} onChange={(e) => updateContact("location", e.target.value)} />
            </div>

            {/* Social Links */}
            <SocialLinks
                socialLinks={formData.socialLinks}
                setSocialLinks={setSocialLinks}
            />

            {/* Roles Input */}
            <RolesInput roles={formData.roles} setRoles={setRoles} />

            {/* Professional Stats */}
            <div className="section">
                <h2>Professional Statistics</h2>
                {formData.professionalStats.map((stat, idx) => (
                    <div key={idx} className="flex-row">
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Number (e.g. 10+, 500+, 98%, $2M+)"
                            value={stat.number}
                            onChange={e => updateProfessionalStats(idx, "number", e.target.value)}
                        />
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Description (e.g. Years Experience, Projects Completed)"
                            value={stat.label}
                            onChange={e => updateProfessionalStats(idx, "label", e.target.value)}
                        />
                        {formData.professionalStats.length > 1 && (
                            <button type="button" className="remove-btn" onClick={() => removeProfessionalStat(idx)}>Remove</button>
                        )}
                    </div>
                ))}
                <button type="button" className="add-btn" onClick={addProfessionalStat}>Add Statistic</button>
            </div>

            {/* Style Shade Picker */}
            <div className="section">
                <h2>Choose Website Style Shade</h2>
                <PrototypePicker
                    value={formData.styleShade}
                    onChange={handleStyleShadeChange}
                />
            </div>

            {/* Skills Selector */}
            <SkillSelector
                selectedSkills={formData.skills}
                setSelectedSkills={(skills) =>
                    setFormData((prev) => ({ ...prev, skills }))
                }
            />

            {/* Education Section */}
            <EducationSection
                educationList={formData.educationList}
                setEducationList={(list) =>
                    setFormData((prev) => ({ ...prev, educationList: list }))
                }
            />

            {/* Certifications */}
            <div className="section">
                <h2>Professional Certifications</h2>
                {formData.certifications.map((cert, idx) => (
                    <div key={idx} className="flex-row">
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Title (e.g., AWS Solutions Architect)"
                            value={cert.title}
                            onChange={e => updateCertification(idx, "title", e.target.value)}
                        />
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Institution"
                            value={cert.institution}
                            onChange={e => updateCertification(idx, "institution", e.target.value)}
                        />
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Year"
                            value={cert.year}
                            onChange={e => updateCertification(idx, "year", e.target.value)}
                        />
                        <button type="button" className="remove-btn" onClick={() => removeCertification(idx)}>Remove</button>
                    </div>
                ))}
                <button type="button" className="add-btn" onClick={addCertification}>Add Certification</button>
            </div>

            {/* Projects Section */}
            <ProjectInput
                projects={formData.projects}
                setProjects={(val) => setFormData((prev) => ({ ...prev, projects: val }))}
            />

            {/* File Uploads */}
            <div className="section">
                <h2>File Uploads</h2>
                <label>
                    Profile Picture
                    <input
                        className="input-field"
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </label>
                <br/>
                <label>
                    Resume
                    <input
                        className="input-field"
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                    />
                </label>
            </div>

            <button className="submit-btn" type="submit">Generate Portfolio Website</button>
        </form>
    );
}

export default FormSection;