import React, { useState } from "react";

function SocialLinks({ socialLinks, setSocialLinks }) {
    const [errors, setErrors] = useState({});

    const placeholders = {
        linkedin: "https://linkedin.com/in/johndoe or johndoe",
        github: "https://github.com/johndoe or johndoe",
        instagram: "https://instagram.com/johndoe or @johndoe",
        twitter: "https://twitter.com/johndoe or @johndoe",
        whatsapp: "9876543210 or https://wa.me/919876543210",
    };

    // Accepts either username or link and normalizes it
    const normalizeValue = (field, value) => {
        if (!value) return "";

        // For Instagram and Twitter: allow @ but remove it for links
        if (field === "instagram") {
            if (/^https?:\/\//i.test(value)) return value;
            return `https://instagram.com/${value.replace(/^@/, "")}`;
        }
        if (field === "twitter") {
            if (/^https?:\/\//i.test(value)) return value;
            return `https://twitter.com/${value.replace(/^@/, "")}`;
        }

        // For LinkedIn and GitHub: never allow @, strip it if found
        if (field === "linkedin") {
            if (/^https?:\/\//i.test(value)) return value;
            return `https://linkedin.com/in/${value.replace(/^@/, "")}`;
        }
        if (field === "github") {
            if (/^https?:\/\//i.test(value)) return value;
            return `https://github.com/${value.replace(/^@/, "")}`;
        }

        // WhatsApp
        if (field === "whatsapp") {
            if (/^\d{10}$/.test(value)) {
                return `https://wa.me/91${value}`;
            }
            if (/^https?:\/\//i.test(value)) return value;
            return value;
        }

        return value;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSocialLinks({
            ...socialLinks,
            [name]: value,
        });
    };

    // On blur, normalize value and set it
    const handleBlur = (e) => {
        const { name, value } = e.target;
        const normalized = normalizeValue(name, value);
        setSocialLinks({
            ...socialLinks,
            [name]: normalized,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!socialLinks.linkedin || socialLinks.linkedin.trim() === "") {
            newErrors.linkedin = "LinkedIn is required";
        }
        if (!socialLinks.whatsapp || socialLinks.whatsapp.trim() === "") {
            newErrors.whatsapp = "WhatsApp is required";
        }
        if (socialLinks.whatsapp && !/^\d{10}$/.test(socialLinks.whatsapp) && !/^https:\/\/wa\.me\//.test(socialLinks.whatsapp)) {
            newErrors.whatsapp = "Enter a 10-digit number or a valid WhatsApp link";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div className="section">
            <h2>Social Links</h2>
            <div>
                <label htmlFor="linkedin">
                    LinkedIn <span style={{ color: "red" }}>*</span>
                </label>
                <input
                    className="input-field"
                    type="text"
                    name="linkedin"
                    value={socialLinks.linkedin || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder={placeholders.linkedin}
                />
                {errors.linkedin && <p style={{ color: "red", marginTop: "-10px" }}>{errors.linkedin}</p>}
            </div>
            <div>
                <label htmlFor="github">GitHub</label>
                <input
                    className="input-field"
                    type="text"
                    name="github"
                    value={socialLinks.github || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholders.github}
                />
            </div>
            <div>
                <label htmlFor="instagram">Instagram</label>
                <input
                    className="input-field"
                    type="text"
                    name="instagram"
                    value={socialLinks.instagram || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholders.instagram}
                />
            </div>
            <div>
                <label htmlFor="twitter">Twitter</label>
                <input
                    className="input-field"
                    type="text"
                    name="twitter"
                    value={socialLinks.twitter || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholders.twitter}
                />
            </div>
            <div>
                <label htmlFor="whatsapp">
                    WhatsApp <span style={{ color: "red" }}>*</span>
                </label>
                <input
                    className="input-field"
                    type="text"
                    name="whatsapp"
                    value={socialLinks.whatsapp || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder={placeholders.whatsapp}
                />
                {errors.whatsapp && <p style={{ color: "red", marginTop: "-10px" }}>{errors.whatsapp}</p>}
            </div>
        </div>
    );
}

export default SocialLinks;