import React from "react";
import { skillGroups } from "../utils/skillGroups";

// Chip component for skills (selected: blue border/bg, unselected: gray)
function SkillChip({ skill, selected, onClick }) {
    return (
        <button
            type="button"
            className={`skill-chip${selected ? " selected" : ""}`}
            style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "0 8px 8px 0",
                border: selected ? "2px solid #3074f2" : "1px solid #b5c6e0",
                background: selected ? "#e9f1ff" : "#f6f8fa",
                borderRadius: "18px",
                padding: "3px 12px 3px 7px",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                outline: "none",
                transition: "all .15s",
                boxShadow: selected ? "0 2px 8px #3074f222" : "none",
                userSelect: "none"
            }}
            onClick={onClick}
            tabIndex={0}
        >
            <img
                src={skill.icon === "gear.svg" ? `/gear.svg` : `/all pngs/${skill.icon}`}
                alt={skill.name}
                style={{
                    width: "19px",
                    height: "19px",
                    marginRight: "6px",
                    verticalAlign: "middle",
                    filter: selected ? "none" : "grayscale(60%) brightness(0.8)",
                    opacity: selected ? 1 : 0.7,
                }}
                onError={e => { e.target.style.display = "none"; }}
            />
            {skill.name}
            {selected && (
                <span
                    className="chip-close"
                    style={{
                        marginLeft: "7px",
                        color: "#db2c2c",
                        fontWeight: "bold",
                        fontSize: "1.09em",
                        lineHeight: 1,
                        cursor: "pointer"
                    }}
                >
                    ×
                </span>
            )}
        </button>
    );
}

function SkillSelector({ selectedSkills, setSelectedSkills }) {
    // Helper: is selected (for both predefined and customs)
    const isSkillSelected = (skill, groupName) =>
        selectedSkills.some(
            (s) =>
                s.name === skill.name &&
                s.icon === skill.icon
        );

    // Toggle: if chip is selected, remove it; else, add it
    const handleToggle = (skill) => {
        if (isSkillSelected(skill)) {
            setSelectedSkills(selectedSkills.filter(
                (s) =>
                    !(s.name === skill.name && s.icon === skill.icon)
            ));
        } else {
            setSelectedSkills([
                ...selectedSkills,
                skill
            ]);
        }
    };

    return (
        <div className="section">
            <h2>Select Skills</h2>
            {Object.entries(skillGroups).map(([groupName, skills]) => (
                <div key={groupName} style={{ marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{groupName}</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                        {skills
                            .filter((skill) => !skill.isCustom && skill.name.toLowerCase() !== "other")
                            .map((skill) => (
                                <SkillChip
                                    key={groupName + skill.name}
                                    skill={skill}
                                    selected={isSkillSelected(skill)}
                                    onClick={() => handleToggle(skill)}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillSelector;