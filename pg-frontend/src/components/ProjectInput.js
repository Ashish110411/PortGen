import React from "react";

function ProjectInput({ projects, setProjects }) {
    const slugify = (str) =>
        str
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/[^a-z0-9]/g, "");

    const handleDomainNameChange = (index, value) => {
        const updated = [...projects];

        // Generate the ID from the new value
        const generatedId = slugify(value);

        // Check if the generated ID would exceed 35 characters
        if (generatedId.length > 35) {
            // If it would exceed, don't update the state
            return;
        }

        // Update both label and id if within limit
        updated[index].label = value;
        updated[index].id = generatedId;
        setProjects(updated);
    };

    const handleProjectChange = (domainIndex, projectIndex, field, value) => {
        const updated = [...projects];
        updated[domainIndex].data[projectIndex][field] = value;
        setProjects(updated);
    };

    // Updated tech change handler to preserve raw input
    const handleTechChange = (domainIndex, projectIndex, value) => {
        const updated = [...projects];
        // Store the raw string value for display
        updated[domainIndex].data[projectIndex].techString = value;
        // Parse and store the tech array for data processing
        const techList = value.split(",").map((t) => t.trim()).filter(Boolean);
        updated[domainIndex].data[projectIndex].tech = techList;
        setProjects(updated);
    };

    const addDomain = () => {
        setProjects([
            ...projects,
            {
                id: "",
                label: "",
                data: [{ title: "", description: "", tech: [], techString: "", link: "" }],
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
            techString: "",
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
        <div className="section">
            <h2>Projects</h2>
            <p className="section-description">
                Organize your projects by domains or categories. Each domain can contain multiple projects.
                For example, you might have domains like "Web Development", "Mobile Apps", "Data Science", etc.
            </p>

            <div className="project-input-container">
                {projects.map((domain, domainIndex) => (
                    <div key={domainIndex} className="project-domain">
                        <div className="domain-header">
                            <div className="domain-input-wrapper">
                                <label className="form-label">
                                    Project Domain:
                                </label>
                                <input
                                    type="text"
                                    value={domain.label}
                                    onChange={(e) =>
                                        handleDomainNameChange(domainIndex, e.target.value)
                                    }
                                    required
                                    className="input-field domain-input"
                                    placeholder="Web Development, Game Dev, ML & AI..."
                                />
                                <div className="character-info">
                                    <span className="character-limit">Domain ID max 35 characters</span>
                                    <span className={`character-count ${domain.id && domain.id.length === 35 ? 'character-limit-reached' : ''}`}>
                                        : {domain.id ? domain.id.length : 0}/35
                                    </span>
                                </div>
                                <div className="domain-id-display">
                                    <span className="domain-id-label">Domain ID:</span>
                                    <span className="domain-id-value">{domain.id || "enter-domain-name"}</span>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => removeDomain(domainIndex)}
                                className="remove-btn domain-remove"
                            >
                                Remove Domain
                            </button>
                        </div>

                        <div className="projects-section">
                            <h4 className="projects-title">
                                Projects in <span className="domain-name-highlight">{domain.label || "this domain"}</span>
                            </h4>

                            {domain.data.map((proj, projIndex) => (
                                <div key={projIndex} className="project-item">
                                    <div className="project-fields">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Enter your amazing project title here..."
                                                value={proj.title}
                                                onChange={(e) =>
                                                    handleProjectChange(domainIndex, projIndex, "title", e.target.value)
                                                }
                                                required
                                                className="input-field project-title-input"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <textarea
                                                placeholder="Describe your project in detail - what it does, key features, impact..."
                                                value={proj.description}
                                                onChange={(e) =>
                                                    handleProjectChange(domainIndex, projIndex, "description", e.target.value)
                                                }
                                                required
                                                className="textarea-field project-description-input"
                                                rows="3"
                                            />
                                        </div>

                                        <div className="project-links-row">
                                            <div className="tech-input-group">
                                                <input
                                                    type="text"
                                                    placeholder="React, Node.js, Python, MongoDB..."
                                                    value={proj.techString || proj.tech.join(", ")}
                                                    onChange={(e) =>
                                                        handleTechChange(domainIndex, projIndex, e.target.value)
                                                    }
                                                    className="input-field tech-stack-input"
                                                />
                                            </div>

                                            <div className="github-link-input">
                                                <input
                                                    type="text"
                                                    placeholder="GitHub Repo URL or Live Demo URL"
                                                    value={proj.link}
                                                    onChange={(e) =>
                                                        handleProjectChange(domainIndex, projIndex, "link", e.target.value)
                                                    }
                                                    required
                                                    className="input-field github-link-input"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => removeProject(domainIndex, projIndex)}
                                        className="remove-btn project-remove"
                                    >
                                        Remove Project
                                    </button>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={() => addProject(domainIndex)}
                                className="add-btn"
                            >
                                Add Project
                            </button>
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={addDomain}
                    className="add-btn domain-add"
                >
                    Add New Domain
                </button>
            </div>
        </div>
    );
}

export default ProjectInput;