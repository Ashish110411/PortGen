import React from "react";
import { skillGroups } from "../utils/skillGroups";

function SkillSelector({ selectedSkills, setSelectedSkills }) {
    const isSkillSelected = (skillName) =>
        selectedSkills.some((skill) => skill.name === skillName);

    const handleToggle = (skillName) => {
        if (isSkillSelected(skillName)) {
            setSelectedSkills(
                selectedSkills.filter((skill) => skill.name !== skillName)
            );
        } else {
            setSelectedSkills([
                ...selectedSkills,
                {
                    name: skillName,
                    icon: `${skillName.toLowerCase().replace(/ /g, "")}.png`,
                },
            ]);
        }
    };

    return (
        <div className="section">
            <h2>Select Skills</h2>
            {Object.entries(skillGroups).map(([groupName, skills]) => (
                <div key={groupName} style={{ marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{groupName}</h3>
                    <div className="checkbox-group">
                        {skills.map((skill) => (
                            <label key={skill}>
                                <input
                                    type="checkbox"
                                    checked={isSkillSelected(skill)}
                                    onChange={() => handleToggle(skill)}
                                />
                                {" "}{skill}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillSelector;
