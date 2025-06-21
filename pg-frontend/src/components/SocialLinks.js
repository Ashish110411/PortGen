import React, { useState } from "react";

function SocialLinks({ socialLinks, setSocialLinks }) {
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        // WhatsApp: if number of 10 digits, convert to link
        let newValue = value;
        if (name === "whatsapp" && /^\d{10}$/.test(value)) {
            newValue = `https://wa.me/${value}`;
        }

        setSocialLinks({
            ...socialLinks,
            [name]: newValue,
        });
    };

    const validate = () => {
        const newErrors = {};
        const urlFields = ["linkedin", "github", "website", "instagram", "whatsapp"];

        urlFields.forEach((field) => {
            const value = socialLinks[field];
            try {
                new URL(value); // Throws if invalid
            } catch {
                newErrors[field] = "Enter a valid URL";
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div className="section">
            <h2>Social Links</h2>

            {["linkedin", "github", "website", "instagram", "whatsapp"].map((field) => (
                <div key={field}>
                    <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                    <input
                        className="input-field"
                        type="text"
                        name={field}
                        value={socialLinks[field] || ""}
                        onChange={handleChange}
                        required
                    />
                    {errors[field] && <p style={{ color: "red", marginTop: "-10px" }}>{errors[field]}</p>}
                </div>
            ))}
        </div>
    );
}

export default SocialLinks;
