import React, { useState, useEffect } from "react";
import "../styles/RolesInput.css";

function RolesInput({ roles, setRoles }) {
    const [newRole, setNewRole] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (roles.length === 0) {
            setError("At least one role is required.");
        } else {
            setError("");
        }
    }, [roles]);

    const addRole = () => {
        if (newRole.trim() === "") return;
        if (roles.includes(newRole.trim())) return;
        setRoles([...roles, newRole.trim()]);
        setNewRole("");
    };

    const removeRole = (index) => {
        const updated = roles.filter((_, i) => i !== index);
        setRoles(updated);
    };

    return (
        <div className="section">
            <h2>Roles</h2>
            <p className="role-description">
                Enter your role(s) as you would finish the sentence:
                <br />
                <span className="role-prompt">
            I'm a </span>
            </p>
            <div className="flex-row">
                <input
                    className="input-field"
                    type="text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="Financial Analyst, Web Developer...."
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            addRole();
                        }
                    }}
                />
                <button type="button" className="add-btn" onClick={addRole}>
                    Add
                </button>
            </div>

            <div className="roles-list">
                {roles.map((role, index) => (
                    <div key={index} className="roles-list-item">
                        {role}
                        <button type="button" onClick={() => removeRole(index)} title="Remove role">
                            ×
                        </button>
                    </div>
                ))}
            </div>

            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default RolesInput;