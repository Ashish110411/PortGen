import React from "react";
import { skillGroups } from "../utils/skillGroups";

function SkillSelector({ selectedSkills, setSelectedSkills }) {
    const isSkillSelected = (skillName) =>
        selectedSkills.some((skill) => skill.name === skillName);

    const handleToggle = (skill) => {
        if (isSkillSelected(skill.name)) {
            setSelectedSkills(selectedSkills.filter((s) => s.name !== skill.name));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
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
                            <label key={skill.name} style={{ marginRight: "16px" }}>
                                <input
                                    type="checkbox"
                                    checked={isSkillSelected(skill.name)}
                                    onChange={() => handleToggle(skill)}
                                />
                                {" "}
                                <img
                                    src={`/all pngs/${skill.icon}`}
                                    alt={skill.name}
                                    style={{ width: "20px", height: "20px", verticalAlign: "middle", marginRight: "4px" }}
                                    onError={e => { e.target.style.display = "none"; }}
                                />
                                {skill.name}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillSelector;