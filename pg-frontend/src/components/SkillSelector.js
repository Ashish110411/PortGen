import React from "react";
import { skillGroups } from "../utils/skillGroups";

function SkillChip({ skill, selected, onClick }) {
    return (
        <button
            type="button"
            className={`skill-chip${selected ? " selected" : ""}`}
            onClick={onClick}
            tabIndex={0}
        >
            <img
                src={skill.icon === "gear.svg" ? `/gear.svg` : `/all pngs/${skill.icon}`}
                alt={skill.name}
                className="skill-chip-icon"
                onError={e => { e.target.style.display = "none"; }}
            />
            {skill.name}
            {selected}
        </button>
    );
}

function SkillSelector({ selectedSkills, setSelectedSkills }) {
    const isSkillSelected = (skill) =>
        selectedSkills.some(
            (s) =>
                s.name === skill.name &&
                s.icon === skill.icon
        );

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
                <div key={groupName} className="skill-group">
                    <h3>{groupName}</h3>
                    <div className="skills-chip-list">
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