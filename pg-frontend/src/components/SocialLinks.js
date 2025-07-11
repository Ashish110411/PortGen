import React, { useState } from "react";
import "../styles/SocialLinks.css";

function SocialLinks({ socialLinks, setSocialLinks }) {
    const [errors, setErrors] = useState({});

    const placeholders = {
        linkedin: "linkedin.com/in/johndoe",
        github: "github.com/johndoe",
        instagram: "instagram.com/johndoe",
        twitter: "twitter.com/johndoe",
        whatsapp: "9876543210",
    };

    const normalizeValue = (field, value) => {
        if (!value) return "";

        if (field === "instagram" || field === "twitter") {
            const username = value.replace(/^@/, "");
            if (/^https?:\/\//i.test(value)) return value;
            return `https://${field}.com/${username}`;
        }
        if (field === "linkedin") {
            const username = value.replace(/^@/, "");
            if (/^https?:\/\//i.test(value)) return value;
            return `https://linkedin.com/in/${username}`;
        }
        if (field === "github") {
            const username = value.replace(/^@/, "");
            if (/^https?:\/\//i.test(value)) return value;
            return `https://github.com/${username}`;
        }
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
                    LinkedIn<span className="required-asterisk">*</span>
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
                {errors.linkedin && <p className="error-message">{errors.linkedin}</p>}
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
                    WhatsApp<span className="required-asterisk">*</span>
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
                {errors.whatsapp && <p className="error-message">{errors.whatsapp}</p>}
            </div>
        </div>
    );
}

export default SocialLinks;