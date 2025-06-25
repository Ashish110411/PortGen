import React, { useState } from "react";
import ProjectInput from "./ProjectInput";
import "../styles/global.css";
import PrototypePicker from "./PrototypePicker";

// Enhanced skill groups for finance/government professional
const skillGroups = {
    "Programming Languages": [
        { name: "C", icon: "c.png" },
        { name: "CSharp", icon: "csharp.png" },
        { name: "Java", icon: "java.png" },
        { name: "Python", icon: "python.png" },
        { name: "JavaScript", icon: "javascript.png" }
    ],
    "Data Science & ML": [
        { name: "NumPy", icon: "numpy.png" },
        { name: "Pandas", icon: "pandas.png" },
        { name: "Matplotlib", icon: "matplotlib.png" },
        { name: "Seaborn", icon: "seaborn.png" },
        { name: "TensorFlow", icon: "tensorflow.png" },
        { name: "Scikit-learn", icon: "scikitlearn.png" },
        { name: "OpenCV", icon: "opencv.png" }
    ],
    "Web & Cloud Tools": [
        { name: "HTML", icon: "html.png" },
        { name: "CSS", icon: "css.png" },
        { name: "Docker", icon: "docker.png" },
        { name: "Git", icon: "git.png" },
        { name: "GitHub", icon: "github.png" }
    ],
    "Databases & IDEs": [
        { name: "MySQL", icon: "mysql.png" },
        { name: "MySQL2", icon: "mysql2.png" },
        { name: "PostgreSQL", icon: "postgresql.png" },
        { name: "Oracle SQL", icon: "sqloracle.png" },
        { name: "JetBrains", icon: "jetbrains.png" },
        { name: "Jupyter", icon: "jupyter.png" }
    ],
    "Design & Prototyping": [
        { name: "Figma", icon: "figma.png" },
        { name: "Canva", icon: "canva.png" }
    ],
    "Video & Audio Editing": [
        { name: "After Effects", icon: "aftereffects.png" },
        { name: "Premiere Pro", icon: "premierepro.png" },
        { name: "Audition", icon: "audition.png" },
        { name: "Camtasia", icon: "camtasia.png" },
        { name: "Blender", icon: "blender.png" }
    ],
    "Productivity Tools": [
        { name: "Office 365", icon: "office365.png" },
        { name: "Colab", icon: "colab.png" },
        { name: "LaTeX", icon: "latex.png" }
    ],
    "Game & Simulation": [
        { name: "Unity", icon: "unity.png" }
    ]
};

// Define the available style shades
const STYLE_SHADES = [
    { value: "purple", label: "Purple" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    // Add more shades here if needed
];

function PortfolioForm() {
    const [form, setForm] = useState({
        // ========== BASIC INFORMATION ==========
        name: "",
        about: "",
        aboutParagraph1: "",
        aboutParagraph2: "",
        aboutParagraph3: "",
        aboutParagraph4: "",

        // ========== CONTACT INFORMATION ==========
        email: "",
        altEmail: "",
        phone: "",
        location: "",

        // ========== SOCIAL LINKS ==========
        socialLinks: {
            linkedin: "",
            github: "",
            website: "",
            instagram: "",
            whatsapp: "",
        },

        // ========== PROFESSIONAL INFO ==========
        roles: [""],

        // ========== PROFESSIONAL STATS ==========
        professionalStats: [
            { number: "", label: "" }
        ],

        // ========== SKILLS ==========
        skills: [],

        // ========== EDUCATION & CERTIFICATIONS ==========
        educationList: [],
        certifications: [],

        // ========== PROJECTS/WORK ==========
        projects: [],

        // ========== STYLE SHADE ==========
        styleShade: "purple", // default to purple
    });

    const [files, setFiles] = useState({
        profilePic: null,
        resume: null,
    });

    // ========== FILE HANDLERS ==========
    const handleFileChange = (e) => {
        const { name, files: selectedFiles } = e.target;
        setFiles((prev) => ({
            ...prev,
            [name]: selectedFiles[0],
        }));
    };

    // ========== SOCIAL LINKS HANDLERS ==========
    const updateSocialLink = (key, value) =>
        setForm((f) => ({
            ...f,
            socialLinks: { ...f.socialLinks, [key]: value },
        }));

    // ========== ROLES HANDLERS ==========
    const updateRoles = (index, val) => {
        const updatedRoles = [...form.roles];
        updatedRoles[index] = val;
        setForm({ ...form, roles: updatedRoles });
    };

    const addRole = () => setForm({ ...form, roles: [...form.roles, ""] });
    const removeRole = (index) =>
        setForm({ ...form, roles: form.roles.filter((_, i) => i !== index) });

    // ========== PROFESSIONAL STATS HANDLERS ==========
    const updateProfessionalStats = (index, field, value) => {
        const updatedStats = [...form.professionalStats];
        updatedStats[index] = { ...updatedStats[index], [field]: value };
        setForm({ ...form, professionalStats: updatedStats });
    };

    const addProfessionalStat = () =>
        setForm({
            ...form,
            professionalStats: [...form.professionalStats, { number: "", label: "" }],
        });

    const removeProfessionalStat = (index) =>
        setForm({
            ...form,
            professionalStats: form.professionalStats.filter((_, i) => i !== index),
        });

    // ========== SKILLS HANDLERS ==========
    const toggleSkill = (groupName, skillName, skillIcon) => {
        const skillObj = { name: skillName, icon: skillIcon };
        const skillExists = form.skills.some((s) => s.name === skillName);
        if (skillExists) {
            setForm({
                ...form,
                skills: form.skills.filter((s) => s.name !== skillName),
            });
        } else {
            setForm({ ...form, skills: [...form.skills, skillObj] });
        }
    };

    // ========== EDUCATION HANDLERS ==========
    const updateEducation = (index, field, val) => {
        const updatedEd = [...form.educationList];
        updatedEd[index] = { ...updatedEd[index], [field]: val };
        setForm({ ...form, educationList: updatedEd });
    };

    const addEducation = () =>
        setForm({
            ...form,
            educationList: [...form.educationList, { institution: "", degree: "", year: "" }],
        });

    const removeEducation = (index) =>
        setForm({ ...form, educationList: form.educationList.filter((_, i) => i !== index) });

    // ========== CERTIFICATIONS HANDLERS ==========
    const updateCertification = (index, field, val) => {
        const updatedCert = [...form.certifications];
        updatedCert[index] = { ...updatedCert[index], [field]: val };
        setForm({ ...form, certifications: updatedCert });
    };

    const addCertification = () =>
        setForm({
            ...form,
            certifications: [...form.certifications, { title: "", institution: "", year: "" }],
        });

    const removeCertification = (index) =>
        setForm({ ...form, certifications: form.certifications.filter((_, i) => i !== index) });

    // ========== PROJECTS HANDLER ==========
    const setProjects = (projects) => setForm({ ...form, projects });

    // ========== STYLE SHADE HANDLER ==========
    const handleStyleShadeChange = (e) => {
        setForm({ ...form, styleShade: e.target.value });
    };

    // ========== FORM SUBMISSION ==========
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Normalize WhatsApp link
        let whatsappLink = form.socialLinks.whatsapp.trim();
        if (/^\d{10}$/.test(whatsappLink)) {
            whatsappLink = "https://wa.me/91" + whatsappLink;
        }

        // Group selected skills by category
        const groupedSkillsMap = {};
        for (const [group, skills] of Object.entries(skillGroups)) {
            groupedSkillsMap[group] = [];
        }

        form.skills.forEach((skill) => {
            const foundGroup = Object.entries(skillGroups).find(([group, skillList]) =>
                skillList.some((s) => s.name === skill.name)
            );
            const groupName = foundGroup ? foundGroup[0] : "Other";
            if (!groupedSkillsMap[groupName]) {
                groupedSkillsMap[groupName] = [];
            }
            groupedSkillsMap[groupName].push(skill);
        });

        const groupedSkills = Object.entries(groupedSkillsMap)
            .filter(([_, skills]) => skills.length > 0)
            .map(([category, skills]) => ({
                category,
                skills,
            }));

        // Prepare final portfolio data
        const portfolioData = {
            ...form,
            socialLinks: { ...form.socialLinks, whatsapp: whatsappLink },
            skills: groupedSkills,
        };

        console.log("Files selected:", files);
        console.log("Portfolio JSON:", JSON.stringify(portfolioData, null, 2));

        // Prepare form data for API
        const multipartFormData = new FormData();
        const jsonBlob = new Blob([JSON.stringify(portfolioData)], { type: "application/json" });
        multipartFormData.append("data", jsonBlob);

        if (files.profilePic) multipartFormData.append("profileImage", files.profilePic);
        if (files.resume) multipartFormData.append("resume", files.resume);

        try {
            const response = await fetch("http://localhost:8080/api/portfolio/generate", {
                method: "POST",
                body: multipartFormData,
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "portfolio.zip";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error submitting portfolio:", error);
            alert("Failed to submit portfolio. See console for details.");
        }
    };

    return (
        <div className="portfolio-form-container">
            <form onSubmit={handleSubmit} className="portfolio-form">
                <h1 className="form-title">Portfolio Generator Form</h1>

                {/* ========== BASIC INFORMATION SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">Basic Information</h2>
                    <p className="section-description">Enter your personal details that will appear on your portfolio</p>

                    <div className="form-group">
                        <label className="form-label">Full Name (Required)</label>
                        <p className="field-description">Your complete name as you want it displayed professionally</p>
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            className="input-field"
                            placeholder="e.g., John Smith or Dr. Sarah Johnson"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">About - Short Description (Required)</label>
                        <p className="field-description">A brief 1-2 sentence summary of who you are professionally</p>
                        <textarea
                            value={form.about}
                            onChange={(e) => setForm({ ...form, about: e.target.value })}
                            required
                            className="textarea-field"
                            placeholder="e.g., Experienced Financial Advisor helping clients achieve their investment goals through strategic planning and risk management"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">About Paragraph 1 (Required)</label>
                        <p className="field-description">First detailed paragraph about your background and experience</p>
                        <textarea
                            value={form.aboutParagraph1}
                            onChange={(e) => setForm({ ...form, aboutParagraph1: e.target.value })}
                            required
                            className="textarea-field"
                            placeholder="Describe your professional journey, years of experience, and key areas of expertise"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">About Paragraph 2 (Required)</label>
                        <p className="field-description">Second paragraph focusing on your achievements and specializations</p>
                        <textarea
                            value={form.aboutParagraph2}
                            onChange={(e) => setForm({ ...form, aboutParagraph2: e.target.value })}
                            required
                            className="textarea-field"
                            placeholder="Highlight your key achievements, certifications, and what sets you apart in your field"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">About Paragraph 3 (Optional)</label>
                        <p className="field-description">Additional details about your approach or philosophy</p>
                        <textarea
                            value={form.aboutParagraph3}
                            onChange={(e) => setForm({ ...form, aboutParagraph3: e.target.value })}
                            className="textarea-field"
                            placeholder="Describe your work philosophy, approach to client service, or industry insights"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">About Paragraph 4 (Optional)</label>
                        <p className="field-description">Personal interests or additional professional details</p>
                        <textarea
                            value={form.aboutParagraph4}
                            onChange={(e) => setForm({ ...form, aboutParagraph4: e.target.value })}
                            className="textarea-field"
                            placeholder="Share personal interests, volunteer work, or additional professional involvement"
                        />
                    </div>
                </section>

                {/* ========== CONTACT INFORMATION SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">Contact Information</h2>
                    <p className="section-description">Provide ways for potential clients or employers to reach you</p>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Primary Email Address (Required)</label>
                            <p className="field-description">Your main professional email address</p>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                                className="input-field"
                                placeholder="john.smith@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Alternate Email (Optional)</label>
                            <p className="field-description">Secondary email if you have one for business purposes</p>
                            <input
                                type="email"
                                value={form.altEmail}
                                onChange={(e) => setForm({ ...form, altEmail: e.target.value })}
                                className="input-field"
                                placeholder="alternate.email@company.com"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Phone Number (Required)</label>
                            <p className="field-description">Professional contact number with country code</p>
                            <input
                                type="text"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                required
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Location (Required)</label>
                            <p className="field-description">Your current city, state/province, and country</p>
                            <input
                                type="text"
                                value={form.location}
                                onChange={(e) => setForm({ ...form, location: e.target.value })}
                                required
                                className="input-field"
                                placeholder="Mumbai, Maharashtra, India or New York, NY, USA"
                            />
                        </div>
                    </div>
                </section>

                {/* ========== SOCIAL LINKS SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">Professional Social Links</h2>
                    <p className="section-description">Your professional online presence and social media profiles</p>

                    <div className="social-links-grid">
                        <div className="form-group">
                            <label className="form-label">LinkedIn Profile (Required)</label>
                            <p className="field-description">Your complete LinkedIn profile URL</p>
                            <input
                                type="text"
                                value={form.socialLinks.linkedin}
                                onChange={(e) => updateSocialLink("linkedin", e.target.value)}
                                required
                                className="input-field"
                                placeholder="https://linkedin.com/in/yourprofile"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">GitHub Profile (Required)</label>
                            <p className="field-description">Your GitHub username or profile URL for code repositories</p>
                            <input
                                type="text"
                                value={form.socialLinks.github}
                                onChange={(e) => updateSocialLink("github", e.target.value)}
                                required
                                className="input-field"
                                placeholder="https://github.com/yourusername or just yourusername"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Personal Website (Required)</label>
                            <p className="field-description">Your personal or professional website URL</p>
                            <input
                                type="text"
                                value={form.socialLinks.website}
                                onChange={(e) => updateSocialLink("website", e.target.value)}
                                required
                                className="input-field"
                                placeholder="https://yourwebsite.com"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Instagram Profile (Required)</label>
                            <p className="field-description">Your Instagram handle or profile URL</p>
                            <input
                                type="text"
                                value={form.socialLinks.instagram}
                                onChange={(e) => updateSocialLink("instagram", e.target.value)}
                                required
                                className="input-field"
                                placeholder="https://instagram.com/yourhandle or @yourhandle"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">WhatsApp Contact (Required)</label>
                            <p className="field-description">Your WhatsApp number (10 digits) or complete WhatsApp link</p>
                            <input
                                type="text"
                                value={form.socialLinks.whatsapp}
                                onChange={(e) => updateSocialLink("whatsapp", e.target.value)}
                                required
                                className="input-field"
                                placeholder="9971071642 or https://wa.me/919971071642"
                            />
                        </div>
                    </div>
                </section>

                {/* ========== PROFESSIONAL ROLES SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">Professional Roles</h2>
                    <p className="section-description">List your current job titles, positions, or professional roles</p>

                    {form.roles.map((role, index) => (
                        <div key={index} className="role-row">
                            <div className="form-group">
                                <label className="form-label">Professional Role {index + 1}</label>
                                <p className="field-description">Your job title, position, or professional designation</p>
                                <input
                                    type="text"
                                    value={role}
                                    onChange={(e) => updateRoles(index, e.target.value)}
                                    required
                                    className="input-field role-input"
                                    placeholder="e.g., Senior Financial Advisor, Government Policy Analyst, Software Developer"
                                />
                            </div>
                            {form.roles.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeRole(index)}
                                    className="remove-btn"
                                >
                                    Remove Role
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addRole} className="add-btn">
                        Add Another Role
                    </button>
                </section>

                {/* ========== PROFESSIONAL STATS SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">Professional Statistics</h2>
                    <p className="section-description">Impressive numbers that showcase your experience and achievements</p>

                    {form.professionalStats.map((stat, index) => (
                        <div key={index} className="stat-row">
                            <div className="form-group">
                                <label className="form-label">Statistic Number</label>
                                <p className="field-description">The numerical value (use + for approximations)</p>
                                <input
                                    type="text"
                                    value={stat.number}
                                    onChange={(e) => updateProfessionalStats(index, "number", e.target.value)}
                                    className="input-field stat-input"
                                    placeholder="15+, 500+, 98%, $2M+"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Statistic Description</label>
                                <p className="field-description">What this number represents</p>
                                <input
                                    type="text"
                                    value={stat.label}
                                    onChange={(e) => updateProfessionalStats(index, "label", e.target.value)}
                                    className="input-field stat-input"
                                    placeholder="Years Experience, Projects Completed, Client Satisfaction Rate"
                                    required
                                />
                            </div>
                            {form.professionalStats.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeProfessionalStat(index)}
                                    className="remove-btn"
                                >
                                    Remove Statistic
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addProfessionalStat} className="add-btn">
                        Add Another Statistic
                    </button>
                </section>

                {/* ========== STYLE SHADE SELECTION SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">Choose Website Style Shade</h2>
                    <p className="section-description">Pick a color theme for your portfolio site</p>
                    <PrototypePicker
                        value={form.styleShade}
                        onChange={(val) => setForm({ ...form, styleShade: val })}
                    />
                </section>

                {/* ========== SKILLS SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">Skills and Technical Expertise</h2>
                    <p className="section-description">Select all technologies, tools, and skills you have experience with</p>

                    {Object.entries(skillGroups).map(([group, skills]) => (
                        <div key={group} className="skill-group">
                            <h3 className="skill-group-title">{group}</h3>
                            <div className="skills-grid">
                                {skills.map(({ name, icon }) => (
                                    <label key={name} className="checkbox-label skill-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={form.skills.some((s) => s.name === name)}
                                            onChange={() => toggleSkill(group, name, icon)}
                                        />
                                        <div className="skill-content">
                                            <img
                                                src={icon}
                                                alt={name}
                                                className="skill-icon"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                            <span className="checkbox-text">{name}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* ========== EDUCATION SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">Educational Background</h2>
                    <p className="section-description">List your degrees, diplomas, and formal education</p>

                    {form.educationList.map((edu, index) => (
                        <div key={index} className="education-row">
                            <div className="form-group">
                                <label className="form-label">Institution Name</label>
                                <p className="field-description">Name of university, college, or educational institution</p>
                                <input
                                    type="text"
                                    placeholder="Harvard University, IIT Delhi, etc."
                                    value={edu.institution}
                                    onChange={(e) => updateEducation(index, "institution", e.target.value)}
                                    required
                                    className="input-field edu-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Degree/Program</label>
                                <p className="field-description">Type of degree, major, or program completed</p>
                                <input
                                    type="text"
                                    placeholder="MBA Finance, B.Tech Computer Science, etc."
                                    value={edu.degree}
                                    onChange={(e) => updateEducation(index, "degree", e.target.value)}
                                    required
                                    className="input-field edu-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Year/Duration</label>
                                <p className="field-description">Graduation year or duration of study</p>
                                <input
                                    type="text"
                                    placeholder="2020, 2018-2022, etc."
                                    value={edu.year}
                                    onChange={(e) => updateEducation(index, "year", e.target.value)}
                                    required
                                    className="input-field edu-input"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => removeEducation(index)}
                                className="remove-btn"
                            >
                                Remove Education
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addEducation} className="add-btn">
                        Add Education Entry
                    </button>
                </section>

                {/* ========== CERTIFICATIONS SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">Professional Certifications</h2>
                    <p className="section-description">List your professional certifications, licenses, and credentials</p>

                    {form.certifications.map((cert, index) => (
                        <div key={index} className="education-row">
                            <div className="form-group">
                                <label className="form-label">Certification Title</label>
                                <p className="field-description">Full name of the certification or credential</p>
                                <input
                                    type="text"
                                    placeholder="Certified Financial Planner (CFP), AWS Certified Solutions Architect, etc."
                                    value={cert.title}
                                    onChange={(e) => updateCertification(index, "title", e.target.value)}
                                    required
                                    className="input-field edu-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Issuing Organization</label>
                                <p className="field-description">Organization or body that issued the certification</p>
                                <input
                                    type="text"
                                    placeholder="Financial Planning Association, Amazon Web Services, etc."
                                    value={cert.institution}
                                    onChange={(e) => updateCertification(index, "institution", e.target.value)}
                                    required
                                    className="input-field edu-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Year Obtained</label>
                                <p className="field-description">Year you received this certification</p>
                                <input
                                    type="text"
                                    placeholder="2023, 2021, etc."
                                    value={cert.year}
                                    onChange={(e) => updateCertification(index, "year", e.target.value)}
                                    required
                                    className="input-field edu-input"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => removeCertification(index)}
                                className="remove-btn"
                            >
                                Remove Certification
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addCertification} className="add-btn">
                        Add Certification
                    </button>
                </section>

                {/* ========== FILE UPLOADS SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">File Uploads</h2>
                    <p className="section-description">Upload your profile picture and resume document</p>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Profile Picture</label>
                            <p className="field-description">Professional headshot or profile photo (JPG, PNG, GIF)</p>
                            <input
                                type="file"
                                name="profilePic"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="file-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Resume Document</label>
                            <p className="field-description">Your current resume in PDF, DOC, or DOCX format</p>
                            <input
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="file-input"
                            />
                        </div>
                    </div>
                </section>

                {/* ========== PROJECTS SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">Projects and Work Portfolio</h2>
                    <p className="section-description">Add your professional projects, case studies, and notable work examples</p>
                    <ProjectInput projects={form.projects} setProjects={setProjects} />
                </section>

                {/* ========== SUBMIT BUTTON ========== */}
                <div className="form-submit">
                    <button type="submit" className="submit-btn">
                        Generate Portfolio Website
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PortfolioForm;