import React, { useState } from "react";
import "../styles/PrototypePicker.css";

const COLOR_PROTOTYPES = [
    {
        value: "green",
        label: "Royal Emerald",
        theme: "green",
        loadingImg: "green_loading.png",
        webImg: "green_webp.png",
        description: "Fresh. Bold. Growth-focused.",
        accent: "#22c55e"
    },
    {
        value: "teal",
        label: "Imperial Teal",
        theme: "teal",
        loadingImg: "teal_loading.png",
        webImg: "teal_webp.png",
        description: "Crisp. Modern. Tech-forward.",
        accent: "#14b8a6"
    },
    {
        value: "purple",
        label: "Regal Amethyst",
        theme: "purple",
        loadingImg: "purple_loading.png",
        webImg: "purple_webp.png",
        description: "Creative. Mystical. Visionary.",
        accent: "#a855f7"
    },
    {
        value: "white",
        label: "Platinum Glow",
        theme: "white",
        loadingImg: "white_loading.png",
        webImg: "white_webp.png",
        description: "Clean. Pure. Minimalist.",
        accent: "#f8fafc"
    },
    {
        value: "gold",
        label: "Majestic Gold",
        theme: "gold",
        loadingImg: "gold_loading.png",
        webImg: "gold_webp.png",
        description: "Luxe. Premium. Elite.",
        accent: "#f59e0b"
    },
    {
        value: "blue",
        label: "Sapphire Elite",
        theme: "blue",
        loadingImg: "blue_loading.png",
        webImg: "blue_webp.png",
        description: "Trusted. Classic. Reliable.",
        accent: "#3b82f6"
    },
    {
        value: "chartreuse",
        label: "Electric Chartreuse",
        theme: "chartreuse",
        loadingImg: "chartreuse_loading.png",
        webImg: "chartreuse_webp.png",
        description: "Vibrant. Energetic. Innovative.",
        accent: "#F1FFC4"
    },
    {
        value: "orange",
        label: "Blazing Sunset",
        theme: "orange",
        loadingImg: "orange_loading.png",
        webImg: "orange_webp.png",
        description: "Bold. Dynamic. Creative.",
        accent: "#f97316"
    }
];

function PrototypePicker({ value, onChange }) {
    const [modalImg, setModalImg] = useState(null);

    return (
        <div className="prototype-picker">
            <h3 className="prototype-title">Website Style Prototypes</h3>
            <p className="prototype-description">
                Preview each theme below. Select your favorite style for your portfolio.
            </p>
            <div className="prototype-grid">
                {COLOR_PROTOTYPES.map((col) => (
                    <div
                        className={`prototype-choice ${value === col.value ? 'selected' : ''}`}
                        key={col.value}
                        style={{
                            '--accent-color': col.accent,
                            '--accent-color-alpha': col.accent + '20'
                        }}
                        onClick={() => onChange(col.value)}
                    >
                        <div
                            className="prototype-img-preview"
                            onClick={(e) => {
                                e.stopPropagation();
                                setModalImg(col.webImg);
                            }}
                            title={`Click to view full "${col.label}" theme`}
                        >
                            <img
                                src={col.loadingImg}
                                alt={`${col.label} Loading`}
                                className="prototype-loading-img"
                            />
                            <div className="preview-overlay">
                                <span className="preview-text">Preview Full Theme</span>
                            </div>
                        </div>
                        <div className="prototype-info">
                            <span className="prototype-name">{col.label}</span>
                            <div className="prototype-desc">{col.description}</div>
                        </div>
                        {value === col.value && (
                            <div className="selected-badge">
                                <span>✓ Selected</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {modalImg && (
                <div className="prototype-modal" onClick={() => setModalImg(null)}>
                    <span className="prototype-close">&times;</span>
                    <div
                        className="prototype-modal-img-wrapper"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            className="prototype-modal-img"
                            src={modalImg}
                            alt="Full Website"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default PrototypePicker;