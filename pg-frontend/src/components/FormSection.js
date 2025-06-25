import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import RolesInput from "./RolesInput";
import PrototypePicker from "./PrototypePicker";
import SkillSelector from "./SkillSelector";
import EducationSection from "./EducationSection";
import ProjectInput from "./ProjectInput";
import "../styles/global.css";

function FormSection() {
    const [formData, setFormData] = useState({
        name: "",
        about: "",
        aboutParagraph1: "",
        aboutParagraph2: "",
        aboutParagraph3: "",
        aboutParagraph4: "",
        socialLinks: {
            linkedin: "",
            github: "",
            website: "",
            instagram: "",
            whatsapp: ""
        },
        roles: [],
        styleShade: "purple",
        skills: [],
        educationList: [
            { institution: "", degree: "", year: "" }
        ],
        projects: []
    });

    const [files, setFiles] = React.useState({
        profilePic: null,
        profilePicSmall: null,
        resume: null,
    });

    const handleFileChange = (e) => {
        const { name, files: fileList } = e.target;
        if (fileList.length > 0) {
            setFiles((prev) => ({
                ...prev,
                [name]: fileList[0],
            }));
        }
    };

    const setSocialLinks = (updatedLinks) => {
        setFormData((prev) => ({
            ...prev,
            socialLinks: updatedLinks
        }));
    };

    const setRoles = (newRoles) => {
        setFormData((prev) => ({
            ...prev,
            roles: newRoles
        }));
    };

    const handleStyleShadeChange = (shade) => {
        setFormData((prev) => ({
            ...prev,
            styleShade: shade
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.roles.length === 0) {
            alert("At least one role is required.");
            return;
        }

        // Build JSON string from formData (except files)
        const jsonData = JSON.stringify(formData);

        const formDataToSend = new FormData();
        formDataToSend.append("data", new Blob([jsonData], { type: "application/json" }));

        if (files.profilePic) formDataToSend.append("profilePic", files.profilePic);
        if (files.profilePicSmall) formDataToSend.append("profilePicSmall", files.profilePicSmall);
        if (files.resume) formDataToSend.append("resume", files.resume);

        try {
            const response = await fetch("http://localhost:8080/api/portfolio", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                alert("Portfolio submitted successfully!");
            } else {
                alert("Submission failed.");
            }
        } catch (error) {
            alert("Error submitting form.");
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Basic Info */}
            <div className="section">
                <h2>Basic Info</h2>
                <input className="input-field" type="text" name="name" placeholder="Your Name" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input className="input-field" type="text" name="about" placeholder="Short About" required onChange={(e) => setFormData({ ...formData, about: e.target.value })} />
                <textarea className="input-field" name="aboutParagraph1" placeholder="About Paragraph 1" required onChange={(e) => setFormData({ ...formData, aboutParagraph1: e.target.value })} />
                <textarea className="input-field" name="aboutParagraph2" placeholder="About Paragraph 2" required onChange={(e) => setFormData({ ...formData, aboutParagraph2: e.target.value })} />
                <textarea className="input-field" name="aboutParagraph3" placeholder="About Paragraph 3 (optional)" onChange={(e) => setFormData({ ...formData, aboutParagraph3: e.target.value })} />
                <textarea className="input-field" name="aboutParagraph4" placeholder="About Paragraph 4 (optional)" onChange={(e) => setFormData({ ...formData, aboutParagraph4: e.target.value })} />
            </div>

            {/* Social Links */}
            <SocialLinks
                socialLinks={formData.socialLinks}
                setSocialLinks={setSocialLinks}
            />

            {/* Roles Input */}
            <RolesInput roles={formData.roles} setRoles={setRoles} />

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
                        name="profilePic"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </label>
                <br/>
                <label>
                    Small Profile Picture
                    <input
                        className="input-field"
                        type="file"
                        name="profilePicSmall"
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

            <button className="button" type="submit">Submit</button>
        </form>
    );
}

export default FormSection;