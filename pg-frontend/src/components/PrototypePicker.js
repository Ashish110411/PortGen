import React, { useState } from "react";
import "../styles/PrototypePicker.css";

// Creative color names and image mappings
const COLOR_PROTOTYPES = [
    {
        value: "green",
        label: "Royal Emerald",
        theme: "green",
        loadingImg: "green_loading.png",
        webImg: "green_webp.png",
        description: "A regal green for trust, growth, and modern finance."
    },
    {
        value: "teal",
        label: "Imperial Teal",
        theme: "teal",
        loadingImg: "teal_loading.png",
        webImg: "teal_webp.png",
        description: "A noble teal, crisp and professional for digital leaders."
    },
    {
        value: "purple",
        label: "Regal Amethyst",
        theme: "purple",
        loadingImg: "purple_loading.png",
        webImg: "purple_webp.png",
        description: "A bold purple, symbolizing creativity and wisdom."
    },
    {
        value: "white",
        label: "Platinum Glow",
        theme: "white",
        loadingImg: "white_loading.png",
        webImg: "white_webp.png",
        description: "A radiant white for clarity, prestige, and minimalism."
    },
    {
        value: "gold",
        label: "Majestic Gold",
        theme: "gold",
        loadingImg: "gold_loading.png",
        webImg: "gold_webp.png",
        description: "A luxurious gold for high achievers and visionaries."
    },
    {
        value: "blue",
        label: "Sapphire Elite",
        theme: "blue",
        loadingImg: "blue_loading.png",
        webImg: "blue_webp.png",
        description: "A classic blue for trust, innovation, and excellence."
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
                    <div className="prototype-choice" key={col.value}>
                        <div
                            className="prototype-img-preview"
                            onClick={() => setModalImg(col.webImg)}
                            title={`Click to view full "${col.label}" theme`}
                        >
                            <img
                                src={col.loadingImg}
                                alt={`${col.label} Loading`}
                                className="prototype-loading-img"
                            />
                        </div>
                        <label className="prototype-checkbox-label">
                            <input
                                type="radio"
                                name="styleShade"
                                value={col.value}
                                checked={value === col.value}
                                onChange={() => onChange(col.value)}
                            />
                            <span className="prototype-name">{col.label}</span>
                        </label>
                        <div className="prototype-desc">{col.description}</div>
                    </div>
                ))}
            </div>

            {/* Modal / lightbox for full screenshot */}
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