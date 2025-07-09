// import React from "react";
//
// function EducationSection({ educationList, setEducationList }) {
//     const handleChange = (index, field, value) => {
//         const updated = [...educationList];
//         updated[index][field] = value;
//         setEducationList(updated);
//     };
//
//     const addEducation = () => {
//         setEducationList([
//             ...educationList,
//             { institution: "", degree: "", year: "" },
//         ]);
//     };
//
//     const removeEducation = (index) => {
//         const updated = educationList.filter((_, i) => i !== index);
//         setEducationList(updated);
//     };
//
//     return (
//         <div className="section">
//             <h2>Education</h2>
//
//             {educationList.map((entry, index) => (
//                 <div key={index} style={{ marginBottom: "20px" }}>
//                     <input
//                         className="input-field"
//                         type="text"
//                         placeholder="University / Institute / School"
//                         value={entry.institution}
//                         onChange={(e) => handleChange(index, "institution", e.target.value)}
//                         required
//                     />
//                     <input
//                         className="input-field"
//                         type="text"
//                         placeholder="Degree / Program / Class 12 / Class 10"
//                         value={entry.degree}
//                         onChange={(e) => handleChange(index, "degree", e.target.value)}
//                         required
//                     />
//                     <input
//                         className="input-field"
//                         type="text"
//                         placeholder="Completion Year (tentative or actual)"
//                         value={entry.year}
//                         onChange={(e) => handleChange(index, "year", e.target.value)}
//                         required
//                     />
//                     <button
//                         type="button"
//                         className="remove-btn"
//                         onClick={() => removeEducation(index)}
//                     >
//                         Remove
//                     </button>
//                 </div>
//             ))}
//
//             <button type="button" className="add-btn" onClick={addEducation}>
//                 Add Education
//             </button>
//         </div>
//     );
// }
//
// export default EducationSection;
import React from "react";

function EducationSection({
                              educationList,
                              setEducationList,
                              workExperience,
                              setWorkExperience,
                              certifications,
                              setCertifications
                          }) {
    // Education handlers
    const handleEducationChange = (index, field, value) => {
        const updated = [...educationList];
        updated[index][field] = value;
        setEducationList(updated);
    };

    const addEducation = () => {
        setEducationList([
            ...educationList,
            { institution: "", degree: "", year: "" },
        ]);
    };

    const removeEducation = (index) => {
        const updated = educationList.filter((_, i) => i !== index);
        setEducationList(updated);
    };

    // Work Experience handlers
    const handleWorkExperienceChange = (index, field, value) => {
        const updated = [...workExperience];
        updated[index][field] = value;
        setWorkExperience(updated);
    };

    const addWorkExperience = () => {
        setWorkExperience([
            ...workExperience,
            { company: "", position: "", duration: "", location: "", description: "", year: "" },
        ]);
    };

    const removeWorkExperience = (index) => {
        const updated = workExperience.filter((_, i) => i !== index);
        setWorkExperience(updated);
    };

    // Certifications handlers
    const handleCertificationChange = (index, field, value) => {
        const updated = [...certifications];
        updated[index][field] = value;
        setCertifications(updated);
    };

    const addCertification = () => {
        setCertifications([
            ...certifications,
            { title: "", institution: "", year: "" },
        ]);
    };

    const removeCertification = (index) => {
        const updated = certifications.filter((_, i) => i !== index);
        setCertifications(updated);
    };

    return (
        <div className="section">
            {/* ========== EDUCATION SECTION ========== */}
            <div className="subsection">
                <h2>Education</h2>
                <p className="section-description">List your degrees, diplomas, and formal education</p>

                {educationList.map((entry, index) => (
                    <div key={index} className="education-row" style={{ marginBottom: "20px" }}>
                        <div className="form-group">
                            <label className="form-label">Institution Name</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="Harvard University, IIT Delhi, etc."
                                value={entry.institution}
                                onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Degree/Program</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="MBA Finance, B.Tech Computer Science, etc."
                                value={entry.degree}
                                onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Year/Duration</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="2020, 2018-2022, etc."
                                value={entry.year}
                                onChange={(e) => handleEducationChange(index, "year", e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="remove-btn"
                            onClick={() => removeEducation(index)}
                        >
                            Remove Education
                        </button>
                    </div>
                ))}

                <button type="button" className="add-btn" onClick={addEducation}>
                    Add Education Entry
                </button>
            </div>

            {/* ========== WORK EXPERIENCE SECTION ========== */}
            <div className="subsection">
                <h2>Work Experience (Optional)</h2>
                <p className="section-description">Add your professional work experience and past roles</p>

                {workExperience.map((entry, index) => (
                    <div key={index} className="work-experience-row" style={{ marginBottom: "20px" }}>
                        <div className="form-group">
                            <label className="form-label">Company Name</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="Google, Microsoft, ABC Corp, etc."
                                value={entry.company}
                                onChange={(e) => handleWorkExperienceChange(index, "company", e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Job Position/Title</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="Software Engineer, Marketing Manager, etc."
                                value={entry.position}
                                onChange={(e) => handleWorkExperienceChange(index, "position", e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Duration</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="Jan 2020 - Dec 2022, 2 years, etc."
                                value={entry.duration}
                                onChange={(e) => handleWorkExperienceChange(index, "duration", e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Location (Optional)</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="San Francisco, CA or Remote"
                                value={entry.location}
                                onChange={(e) => handleWorkExperienceChange(index, "location", e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Job Description (Optional)</label>
                            <textarea
                                className="textarea-field"
                                placeholder="Brief description of your role and key responsibilities..."
                                value={entry.description}
                                onChange={(e) => handleWorkExperienceChange(index, "description", e.target.value)}
                                rows="3"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Year/Period</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="2020-2022, 2023, etc."
                                value={entry.year}
                                onChange={(e) => handleWorkExperienceChange(index, "year", e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="remove-btn"
                            onClick={() => removeWorkExperience(index)}
                        >
                            Remove Work Experience
                        </button>
                    </div>
                ))}

                <button type="button" className="add-btn" onClick={addWorkExperience}>
                    Add Work Experience
                </button>
            </div>

            {/* ========== CERTIFICATIONS SECTION ========== */}
            <div className="subsection">
                <h2>Professional Certifications (Optional)</h2>
                <p className="section-description">List your professional certifications, licenses, and credentials</p>

                {certifications.map((entry, index) => (
                    <div key={index} className="certification-row" style={{ marginBottom: "20px" }}>
                        <div className="form-group">
                            <label className="form-label">Certification Title</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="Certified Financial Planner (CFP), AWS Certified Solutions Architect, etc."
                                value={entry.title}
                                onChange={(e) => handleCertificationChange(index, "title", e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Issuing Organization</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="Financial Planning Association, Amazon Web Services, etc."
                                value={entry.institution}
                                onChange={(e) => handleCertificationChange(index, "institution", e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Year Obtained</label>
                            <input
                                className="input-field"
                                type="text"
                                placeholder="2023, 2021, etc."
                                value={entry.year}
                                onChange={(e) => handleCertificationChange(index, "year", e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="remove-btn"
                            onClick={() => removeCertification(index)}
                        >
                            Remove Certification
                        </button>
                    </div>
                ))}

                <button type="button" className="add-btn" onClick={addCertification}>
                    Add Certification
                </button>
            </div>
        </div>
    );
}

export default EducationSection;