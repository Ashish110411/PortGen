import React from "react";

const projectDomains = [
    { id: "mobdev", label: "Mobile Development" },
    { id: "gamedev", label: "Game Development" },
    { id: "mlai", label: "ML / AI" },
    { id: "webdev", label: "Web Development" },
    { id: "devops", label: "DevOps / Cloud" },
    { id: "cybersec", label: "Cybersecurity / Blockchain" },
];

function ProjectInput({ projects, setProjects }) {
    const handleDomainSelectChange = (index, selectedId) => {
        const selectedDomain = projectDomains.find((d) => d.id === selectedId);
        if (!selectedDomain) return;

        const updated = [...projects];
        updated[index].id = selectedDomain.id;
        updated[index].label = selectedDomain.label;
        setProjects(updated);
    };

    const handleProjectChange = (domainIndex, projectIndex, field, value) => {
        const updated = [...projects];
        updated[domainIndex].data[projectIndex][field] = value;
        setProjects(updated);
    };

    const handleTechChange = (domainIndex, projectIndex, value) => {
        const techList = value.split(",").map((t) => t.trim());
        const updated = [...projects];
        updated[domainIndex].data[projectIndex].tech = techList;
        setProjects(updated);
    };

    const addDomain = () => {
        setProjects([
            ...projects,
            {
                id: "",
                label: "",
                data: [{ title: "", description: "", tech: [], link: "" }],
            },
        ]);
    };

    const removeDomain = (index) => {
        const updated = projects.filter((_, i) => i !== index);
        setProjects(updated);
    };

    const addProject = (domainIndex) => {
        const updated = [...projects];
        updated[domainIndex].data.push({
            title: "",
            description: "",
            tech: [],
            link: "",
        });
        setProjects(updated);
    };

    const removeProject = (domainIndex, projectIndex) => {
        const updated = [...projects];
        updated[domainIndex].data = updated[domainIndex].data.filter(
            (_, i) => i !== projectIndex
        );
        setProjects(updated);
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <h2>Projects</h2>

            {projects.map((domain, domainIndex) => (
                <div key={domainIndex} style={{ marginBottom: "15px" }}>
                    <label>
                        Domain:{" "}
                        <select
                            value={domain.id}
                            onChange={(e) =>
                                handleDomainSelectChange(domainIndex, e.target.value)
                            }
                            required
                        >
                            <option value="" disabled>
                                Select Domain
                            </option>
                            {projectDomains.map(({ id, label }) => (
                                <option key={id} value={id}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </label>

                    <div style={{ marginTop: "10px" }}>
                        <h3>Projects</h3>
                        {domain.data.map((proj, projIndex) => (
                            <div
                                key={projIndex}
                                style={{ marginBottom: "10px", paddingLeft: "10px" }}
                            >
                                <input
                                    type="text"
                                    placeholder="Project Title"
                                    value={proj.title}
                                    onChange={(e) =>
                                        handleProjectChange(domainIndex, projIndex, "title", e.target.value)
                                    }
                                    required
                                    style={{ width: "100%", marginBottom: "6px" }}
                                />
                                <textarea
                                    placeholder="Project Description"
                                    value={proj.description}
                                    onChange={(e) =>
                                        handleProjectChange(domainIndex, projIndex, "description", e.target.value)
                                    }
                                    required
                                    style={{ width: "100%", marginBottom: "6px" }}
                                />
                                <input
                                    type="text"
                                    placeholder="Tech (comma separated)"
                                    value={proj.tech.join(", ")}
                                    onChange={(e) =>
                                        handleTechChange(domainIndex, projIndex, e.target.value)
                                    }
                                    style={{ width: "100%", marginBottom: "6px" }}
                                />
                                <input
                                    type="text"
                                    placeholder="GitHub or Live Link"
                                    value={proj.link}
                                    onChange={(e) =>
                                        handleProjectChange(domainIndex, projIndex, "link", e.target.value)
                                    }
                                    required
                                    style={{ width: "100%", marginBottom: "6px" }}
                                />
                                <button
                                    type="button"
                                    onClick={() => removeProject(domainIndex, projIndex)}
                                    style={{
                                        backgroundColor: "#e53e3e",
                                        color: "white",
                                        border: "none",
                                        padding: "6px 12px",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Remove Project
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={() => addProject(domainIndex)}
                            style={{
                                backgroundColor: "#3182ce",
                                color: "white",
                                border: "none",
                                padding: "8px 16px",
                                borderRadius: "4px",
                                cursor: "pointer",
                                marginTop: "6px",
                            }}
                        >
                            + Add Project
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={() => removeDomain(domainIndex)}
                        style={{
                            backgroundColor: "#e53e3e",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            marginTop: "10px",
                        }}
                    >
                        Remove Domain
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={addDomain}
                style={{
                    backgroundColor: "#3182ce",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                + Add New Domain
            </button>
        </div>
    );
}

export default ProjectInput;
