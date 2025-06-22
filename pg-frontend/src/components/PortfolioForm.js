import React, { useState } from "react";
import ProjectInput from "./ProjectInput";
import "./global.css";

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

        // ========== COMPONENT SELECTION ==========
        selectedComponents: [
            "HeroSection",
            "About",
            "Skills",
            "Education",
            "Works",
            "Contact"
        ],

        // ========== SKILLS ==========
        skills: [],

        // ========== EDUCATION & CERTIFICATIONS ==========
        educationList: [],
        certifications: [],

        // ========== PROJECTS/WORK ==========
        projects: [],
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

    // ========== COMPONENT SELECTION HANDLERS ==========
    const toggleComponent = (comp) => {
        if (form.selectedComponents.includes(comp)) {
            setForm({
                ...form,
                selectedComponents: form.selectedComponents.filter((c) => c !== comp),
            });
        } else {
            setForm({
                ...form,
                selectedComponents: [...form.selectedComponents, comp],
            });
        }
    };

    // ========== SKILLS HANDLERS ==========
    const toggleSkill = (groupName, skillName) => {
        const skillObj = { name: skillName, icon: skillName.toLowerCase() + ".png" };
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

    // ========== FORM SUBMISSION ==========
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Normalize WhatsApp link
        let whatsappLink = form.socialLinks.whatsapp.trim();
        if (/^\d{10}$/.test(whatsappLink)) {
            whatsappLink = "https://wa.me/" + whatsappLink;
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
                    <h2 className="section-title">📝 Basic Information</h2>

                    <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            className="input-field"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">About (Short Description) *</label>
                        <textarea
                            value={form.about}
                            onChange={(e) => setForm({ ...form, about: e.target.value })}
                            required
                            className="textarea-field"
                            placeholder="Brief description about yourself"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">About Paragraph 1 *</label>
                        <textarea
                            value={form.aboutParagraph1}
                            onChange={(e) => setForm({ ...form, aboutParagraph1: e.target.value })}
                            required
                            className="textarea-field"
                            placeholder="First paragraph of your detailed about section"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">About Paragraph 2 *</label>
                        <textarea
                            value={form.aboutParagraph2}
                            onChange={(e) => setForm({ ...form, aboutParagraph2: e.target.value })}
                            required
                            className="textarea-field"
                            placeholder="Second paragraph of your detailed about section"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">About Paragraph 3 (Optional)</label>
                        <textarea
                            value={form.aboutParagraph3}
                            onChange={(e) => setForm({ ...form, aboutParagraph3: e.target.value })}
                            className="textarea-field"
                            placeholder="Third paragraph (optional)"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">About Paragraph 4 (Optional)</label>
                        <textarea
                            value={form.aboutParagraph4}
                            onChange={(e) => setForm({ ...form, aboutParagraph4: e.target.value })}
                            className="textarea-field"
                            placeholder="Fourth paragraph (optional)"
                        />
                    </div>
                </section>

                {/* ========== CONTACT INFORMATION SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">📞 Contact Information</h2>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Email Address *</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                                className="input-field"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Alternate Email (Optional)</label>
                            <input
                                type="email"
                                value={form.altEmail}
                                onChange={(e) => setForm({ ...form, altEmail: e.target.value })}
                                className="input-field"
                                placeholder="alternate@example.com"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Phone Number *</label>
                            <input
                                type="text"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                required
                                className="input-field"
                                placeholder="+91 99710 71642"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Location *</label>
                            <input
                                type="text"
                                value={form.location}
                                onChange={(e) => setForm({ ...form, location: e.target.value })}
                                required
                                className="input-field"
                                placeholder="City, State, Country"
                            />
                        </div>
                    </div>
                </section>

                {/* ========== SOCIAL LINKS SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">🌐 Social Links</h2>

                    <div className="social-links-grid">
                        {["linkedin", "github", "website", "instagram", "whatsapp"].map((key) => (
                            <div key={key} className="form-group">
                                <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)} *</label>
                                <input
                                    type="text"
                                    value={form.socialLinks[key]}
                                    onChange={(e) => updateSocialLink(key, e.target.value)}
                                    required
                                    className="input-field"
                                    placeholder={`Your ${key} profile/link`}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========== PROFESSIONAL ROLES SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">💼 Professional Roles</h2>

                    {form.roles.map((role, index) => (
                        <div key={index} className="role-row">
                            <input
                                type="text"
                                value={role}
                                onChange={(e) => updateRoles(index, e.target.value)}
                                required
                                className="input-field role-input"
                                placeholder="e.g., Financial Advisor, Government Servant"
                            />
                            {form.roles.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeRole(index)}
                                    className="remove-btn"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addRole} className="add-btn">
                        + Add Role
                    </button>
                </section>

                {/* ========== PROFESSIONAL STATS SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">📊 Professional Statistics</h2>

                    {form.professionalStats.map((stat, index) => (
                        <div key={index} className="stat-row">
                            <input
                                type="text"
                                value={stat.number}
                                onChange={(e) => updateProfessionalStats(index, "number", e.target.value)}
                                className="input-field stat-input"
                                placeholder="e.g., 15+, 500+, 98%"
                                required
                            />
                            <input
                                type="text"
                                value={stat.label}
                                onChange={(e) => updateProfessionalStats(index, "label", e.target.value)}
                                className="input-field stat-input"
                                placeholder="e.g., Years Experience, Projects Completed"
                                required
                            />
                            {form.professionalStats.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeProfessionalStat(index)}
                                    className="remove-btn"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addProfessionalStat} className="add-btn">
                        + Add Statistic
                    </button>
                </section>

                {/* ========== COMPONENT SELECTION SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">🔧 Portfolio Components</h2>

                    <div className="components-grid">
                        {["HeroSection", "About", "Skills", "Education", "Works", "Contact"].map((comp) => (
                            <label key={comp} className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={form.selectedComponents.includes(comp)}
                                    onChange={() => toggleComponent(comp)}
                                />
                                <span className="checkbox-text">{comp}</span>
                            </label>
                        ))}
                    </div>
                </section>

                {/* ========== SKILLS SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">💡 Skills & Expertise</h2>

                    {Object.entries(skillGroups).map(([group, skills]) => (
                        <div key={group} className="skill-group">
                            <h3 className="skill-group-title">{group}</h3>
                            <div className="skills-grid">
                                {skills.map(({ name, icon }) => (
                                    <label key={name} className="checkbox-label skill-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={form.skills.some((s) => s.name === name)}
                                            onChange={() => toggleSkill(group, name)}
                                        />
                                        <span className="checkbox-text">{name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* ========== EDUCATION SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">🎓 Education</h2>

                    {form.educationList.map((edu, index) => (
                        <div key={index} className="education-row">
                            <input
                                type="text"
                                placeholder="Institution"
                                value={edu.institution}
                                onChange={(e) => updateEducation(index, "institution", e.target.value)}
                                required
                                className="input-field edu-input"
                            />
                            <input
                                type="text"
                                placeholder="Degree"
                                value={edu.degree}
                                onChange={(e) => updateEducation(index, "degree", e.target.value)}
                                required
                                className="input-field edu-input"
                            />
                            <input
                                type="text"
                                placeholder="Year"
                                value={edu.year}
                                onChange={(e) => updateEducation(index, "year", e.target.value)}
                                required
                                className="input-field edu-input"
                            />
                            <button
                                type="button"
                                onClick={() => removeEducation(index)}
                                className="remove-btn"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addEducation} className="add-btn">
                        + Add Education
                    </button>
                </section>

                {/* ========== CERTIFICATIONS SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">🏆 Professional Certifications</h2>

                    {form.certifications.map((cert, index) => (
                        <div key={index} className="education-row">
                            <input
                                type="text"
                                placeholder="Certification Title"
                                value={cert.title}
                                onChange={(e) => updateCertification(index, "title", e.target.value)}
                                required
                                className="input-field edu-input"
                            />
                            <input
                                type="text"
                                placeholder="Issuing Institution"
                                value={cert.institution}
                                onChange={(e) => updateCertification(index, "institution", e.target.value)}
                                required
                                className="input-field edu-input"
                            />
                            <input
                                type="text"
                                placeholder="Year"
                                value={cert.year}
                                onChange={(e) => updateCertification(index, "year", e.target.value)}
                                required
                                className="input-field edu-input"
                            />
                            <button
                                type="button"
                                onClick={() => removeCertification(index)}
                                className="remove-btn"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addCertification} className="add-btn">
                        + Add Certification
                    </button>
                </section>

                {/* ========== FILE UPLOADS SECTION ========== */}
                <section className="form-section">
                    <h2 className="section-title">📎 File Uploads</h2>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Profile Picture</label>
                            <input
                                type="file"
                                name="profilePic"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="file-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Resume (PDF/DOCX)</label>
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
                    <h2 className="section-title">🚀 Projects & Work</h2>
                    <ProjectInput projects={form.projects} setProjects={setProjects} />
                </section>

                {/* ========== SUBMIT BUTTON ========== */}
                <div className="form-submit">
                    <button type="submit" className="submit-btn">
                        🚀 Generate Portfolio
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PortfolioForm;