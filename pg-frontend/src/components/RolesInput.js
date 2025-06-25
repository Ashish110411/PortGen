import React, { useState, useEffect } from "react";

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
        if (roles.includes(newRole.trim())) return; // avoid duplicates
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
            <p style={{ margin: "0 0 8px 0", color: "#666" }}>
                Enter your role(s) as you would finish the sentence: <strong>I'm a <u>_____</u></strong>
            </p>
            <div className="flex-row">
                <input
                    className="input-field"
                    type="text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="e.g. Financial Analyst, Student, Full Stack Developer"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            addRole();
                        }
                    }}
                />
                <button type="button" className="button" onClick={addRole}>
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

            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>
    );
}

export default RolesInput;