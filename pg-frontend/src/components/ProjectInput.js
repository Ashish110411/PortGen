// import React from "react";
//
// const projectDomains = [
//     { id: "mobdev", label: "Mobile Development" },
//     { id: "gamedev", label: "Game Development" },
//     { id: "mlai", label: "ML / AI" },
//     { id: "webdev", label: "Web Development" },
//     { id: "devops", label: "DevOps / Cloud" },
//     { id: "cybersec", label: "Cybersecurity / Blockchain" },
// ];
//
// function ProjectInput({ projects, setProjects }) {
//     const handleDomainSelectChange = (index, selectedId) => {
//         const selectedDomain = projectDomains.find((d) => d.id === selectedId);
//         if (!selectedDomain) return;
//
//         const updated = [...projects];
//         updated[index].id = selectedDomain.id;
//         updated[index].label = selectedDomain.label;
//         setProjects(updated);
//     };
//
//     const handleProjectChange = (domainIndex, projectIndex, field, value) => {
//         const updated = [...projects];
//         updated[domainIndex].data[projectIndex][field] = value;
//         setProjects(updated);
//     };
//
//     const handleTechChange = (domainIndex, projectIndex, value) => {
//         const techList = value.split(",").map((t) => t.trim());
//         const updated = [...projects];
//         updated[domainIndex].data[projectIndex].tech = techList;
//         setProjects(updated);
//     };
//
//     const addDomain = () => {
//         setProjects([
//             ...projects,
//             {
//                 id: "",
//                 label: "",
//                 data: [{ title: "", description: "", tech: [], link: "" }],
//             },
//         ]);
//     };
//
//     const removeDomain = (index) => {
//         const updated = projects.filter((_, i) => i !== index);
//         setProjects(updated);
//     };
//
//     const addProject = (domainIndex) => {
//         const updated = [...projects];
//         updated[domainIndex].data.push({
//             title: "",
//             description: "",
//             tech: [],
//             link: "",
//         });
//         setProjects(updated);
//     };
//
//     const removeProject = (domainIndex, projectIndex) => {
//         const updated = [...projects];
//         updated[domainIndex].data = updated[domainIndex].data.filter(
//             (_, i) => i !== projectIndex
//         );
//         setProjects(updated);
//     };
//
//     return (
//         <div className="project-input-container">
//             {projects.map((domain, domainIndex) => (
//                 <div key={domainIndex} className="project-domain">
//                     <div className="domain-header">
//                         <label className="form-label">
//                             Project Domain:
//                             <select
//                                 value={domain.id}
//                                 onChange={(e) =>
//                                     handleDomainSelectChange(domainIndex, e.target.value)
//                                 }
//                                 required
//                                 className="input-field domain-select"
//                             >
//                                 <option value="" disabled>
//                                     Select Domain
//                                 </option>
//                                 {projectDomains.map(({ id, label }) => (
//                                     <option key={id} value={id}>
//                                         {label}
//                                     </option>
//                                 ))}
//                             </select>
//                         </label>
//
//                         <button
//                             type="button"
//                             onClick={() => removeDomain(domainIndex)}
//                             className="remove-btn domain-remove"
//                         >
//                             Remove Domain
//                         </button>
//                     </div>
//
//                     <div className="projects-section">
//                         <h4 className="projects-title">Projects in {domain.label || "this domain"}</h4>
//
//                         {domain.data.map((proj, projIndex) => (
//                             <div key={projIndex} className="project-item">
//                                 <div className="project-fields">
//                                     <div className="form-group">
//                                         <input
//                                             type="text"
//                                             placeholder="Project Title"
//                                             value={proj.title}
//                                             onChange={(e) =>
//                                                 handleProjectChange(domainIndex, projIndex, "title", e.target.value)
//                                             }
//                                             required
//                                             className="input-field"
//                                         />
//                                     </div>
//
//                                     <div className="form-group">
//                                         <textarea
//                                             placeholder="Project Description"
//                                             value={proj.description}
//                                             onChange={(e) =>
//                                                 handleProjectChange(domainIndex, projIndex, "description", e.target.value)
//                                             }
//                                             required
//                                             className="textarea-field"
//                                             rows="3"
//                                         />
//                                     </div>
//
//                                     <div className="form-row">
//                                         <div className="form-group">
//                                             <input
//                                                 type="text"
//                                                 placeholder="Technologies used (comma separated)"
//                                                 value={proj.tech.join(", ")}
//                                                 onChange={(e) =>
//                                                     handleTechChange(domainIndex, projIndex, e.target.value)
//                                                 }
//                                                 className="input-field"
//                                             />
//                                         </div>
//
//                                         <div className="form-group">
//                                             <input
//                                                 type="text"
//                                                 placeholder="GitHub or Live Link"
//                                                 value={proj.link}
//                                                 onChange={(e) =>
//                                                     handleProjectChange(domainIndex, projIndex, "link", e.target.value)
//                                                 }
//                                                 required
//                                                 className="input-field"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 <button
//                                     type="button"
//                                     onClick={() => removeProject(domainIndex, projIndex)}
//                                     className="remove-btn project-remove"
//                                 >
//                                     Remove Project
//                                 </button>
//                             </div>
//                         ))}
//
//                         <button
//                             type="button"
//                             onClick={() => addProject(domainIndex)}
//                             className="add-btn"
//                         >
//                             + Add Project
//                         </button>
//                     </div>
//                 </div>
//             ))}
//
//             <button
//                 type="button"
//                 onClick={addDomain}
//                 className="add-btn domain-add"
//             >
//                 + Add New Domain
//             </button>
//         </div>
//     );
// }
//
// export default ProjectInput;
import React from "react";

// No pre-decided domains, user inputs custom domain name
function ProjectInput({ projects, setProjects }) {
    // Helper to slugify the domain name for id
    const slugify = (str) =>
        str
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/[^a-z0-9]/g, "");

    // Update domain name and id
    const handleDomainNameChange = (index, value) => {
        const updated = [...projects];
        updated[index].label = value;
        updated[index].id = slugify(value);
        setProjects(updated);
    };

    const handleProjectChange = (domainIndex, projectIndex, field, value) => {
        const updated = [...projects];
        updated[domainIndex].data[projectIndex][field] = value;
        setProjects(updated);
    };

    const handleTechChange = (domainIndex, projectIndex, value) => {
        const techList = value.split(",").map((t) => t.trim()).filter(Boolean);
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
        <div className="project-input-container">
            {projects.map((domain, domainIndex) => (
                <div key={domainIndex} className="project-domain">
                    <div className="domain-header">
                        <label className="form-label">
                            Project Domain:
                            <input
                                type="text"
                                value={domain.label}
                                onChange={(e) =>
                                    handleDomainNameChange(domainIndex, e.target.value)
                                }
                                required
                                className="input-field domain-input"
                                placeholder="e.g. Web Development, Game Development, ML/AI"
                            />
                        </label>
                        <span className="domain-id-hint">
                            <b>ID:</b> {domain.id || "(auto-generated from name)"}
                        </span>
                        <button
                            type="button"
                            onClick={() => removeDomain(domainIndex)}
                            className="remove-btn domain-remove"
                        >
                            Remove Domain
                        </button>
                    </div>

                    <div className="projects-section">
                        <h4 className="projects-title">Projects in {domain.label || "this domain"}</h4>

                        {domain.data.map((proj, projIndex) => (
                            <div key={projIndex} className="project-item">
                                <div className="project-fields">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Project Title"
                                            value={proj.title}
                                            onChange={(e) =>
                                                handleProjectChange(domainIndex, projIndex, "title", e.target.value)
                                            }
                                            required
                                            className="input-field"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <textarea
                                            placeholder="Project Description"
                                            value={proj.description}
                                            onChange={(e) =>
                                                handleProjectChange(domainIndex, projIndex, "description", e.target.value)
                                            }
                                            required
                                            className="textarea-field"
                                            rows="3"
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Technologies used (comma separated)"
                                                value={proj.tech.join(", ")}
                                                onChange={(e) =>
                                                    handleTechChange(domainIndex, projIndex, e.target.value)
                                                }
                                                className="input-field"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="GitHub or Live Link"
                                                value={proj.link}
                                                onChange={(e) =>
                                                    handleProjectChange(domainIndex, projIndex, "link", e.target.value)
                                                }
                                                required
                                                className="input-field"
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
                            + Add Project
                        </button>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={addDomain}
                className="add-btn domain-add"
            >
                + Add New Domain
            </button>
        </div>
    );
}

export default ProjectInput;