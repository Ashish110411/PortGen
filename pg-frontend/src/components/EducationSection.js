import React from "react";
import "../styles/EducationSection.css";

const monthsArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const currentYear = new Date().getFullYear();
const yearsArray = [];
for (let year = currentYear; year >= 1950; year--) {
    yearsArray.push(String(year));
}

function calculateDuration(startMonth, startYear, endMonth, endYear, present) {
    if (!startMonth || !startYear) return "";
    const startDate = new Date(`${startMonth} 1, ${startYear}`);
    const endDate = present
        ? new Date()
        : (endMonth && endYear ? new Date(`${endMonth} 1, ${endYear}`) : null);

    if (!endDate || endDate < startDate) return "";

    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months += endDate.getMonth() - startDate.getMonth();

    if (months < 0) return "";

    const years = Math.floor(months / 12);
    const remMonths = months % 12;

    let result = "";
    if (years > 0) result += `${years} year${years > 1 ? "s" : ""} `;
    if (remMonths > 0) result += `${remMonths} month${remMonths > 1 ? "s" : ""}`;
    return result.trim();
}

function EducationSection({
                              educationList,
                              setEducationList,
                              workExperience,
                              setWorkExperience,
                              certifications,
                              setCertifications
                          }) {
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

    const handleWorkExperienceChange = (index, field, value) => {
        const updated = [...workExperience];
        updated[index][field] = value;

        if (field === "present" && value === true) {
            updated[index]["endMonth"] = "";
            updated[index]["endYear"] = "";
        }
        setWorkExperience(updated);
    };

    const addWorkExperience = () => {
        setWorkExperience([
            ...workExperience,
            {
                company: "", position: "",
                startMonth: "", startYear: "",
                endMonth: "", endYear: "",
                present: false,
                location: "", description: ""
            },
        ]);
    };

    const removeWorkExperience = (index) => {
        const updated = workExperience.filter((_, i) => i !== index);
        setWorkExperience(updated);
    };

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
        <div className="education-main-section">
            <div className="edu-subsection">
                <h2>Education</h2>
                <p className="edu-section-description">List your degrees, diplomas, and formal education</p>

                {educationList.map((entry, index) => (
                    <div key={index} className="education-row">
                        <div className="edu-form-group">
                            <label className="edu-form-label">Institution Name<span className="required-asterisk">*</span></label>
                            <input
                                className="edu-input-field"
                                type="text"
                                placeholder="Harvard University"
                                value={entry.institution}
                                onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                                required
                            />
                        </div>
                        <div className="edu-form-group">
                            <label className="edu-form-label">Degree/Program<span className="required-asterisk">*</span></label>
                            <input
                                className="edu-input-field"
                                type="text"
                                placeholder="B.Tech Computer Science"
                                value={entry.degree}
                                onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                                required
                            />
                        </div>
                        <div className="edu-form-group">
                            <label className="edu-form-label">Year/Duration<span className="required-asterisk">*</span></label>
                            <input
                                className="edu-input-field"
                                type="text"
                                placeholder="2018-2022"
                                value={entry.year}
                                onChange={(e) => handleEducationChange(index, "year", e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="edu-remove-btn"
                            onClick={() => removeEducation(index)}
                        >
                            Remove Education
                        </button>
                    </div>
                ))}

                <button type="button" className="edu-add-btn" onClick={addEducation}>
                    Add Education Entry
                </button>
            </div>

            <div className="edu-subsection">
                <h2>Work Experience</h2>
                <p className="edu-section-description">Add your professional work experience and past roles</p>

                {workExperience.map((entry, index) => (
                    <div key={index} className="work-experience-row">
                        <div className="edu-form-group">
                            <label className="edu-form-label">Company Name<span className="required-asterisk">*</span></label>
                            <input
                                className="edu-input-field"
                                type="text"
                                placeholder="Google"
                                value={entry.company}
                                onChange={(e) => handleWorkExperienceChange(index, "company", e.target.value)}
                            />
                        </div>
                        <div className="edu-form-group">
                            <label className="edu-form-label">Job Position/Title<span className="required-asterisk">*</span></label>
                            <input
                                className="edu-input-field"
                                type="text"
                                placeholder="Software Engineer"
                                value={entry.position}
                                onChange={(e) => handleWorkExperienceChange(index, "position", e.target.value)}
                            />
                        </div>

                        <div className="work-date-row">
                            <div className="work-date-col">
                                <label className="edu-form-label">Start Month<span className="required-asterisk">*</span></label>
                                <select
                                    className="edu-input-field"
                                    value={entry.startMonth}
                                    onChange={(e) => handleWorkExperienceChange(index, "startMonth", e.target.value)}
                                >
                                    <option value="">Month</option>
                                    {monthsArray.map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="work-date-col">
                                <label className="edu-form-label">Start Year<span className="required-asterisk">*</span></label>
                                <select
                                    className="edu-input-field"
                                    value={entry.startYear}
                                    onChange={(e) => handleWorkExperienceChange(index, "startYear", e.target.value)}
                                >
                                    <option value="">Year</option>
                                    {yearsArray.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="work-date-row">
                            <div className="work-date-col">
                                <label className="edu-form-label">End Month<span className="required-asterisk">*</span></label>
                                <select
                                    className="edu-input-field"
                                    value={entry.endMonth}
                                    onChange={(e) => handleWorkExperienceChange(index, "endMonth", e.target.value)}
                                    disabled={entry.present}
                                >
                                    <option value="">Month</option>
                                    {monthsArray.map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="work-date-col">
                                <label className="edu-form-label">End Year<span className="required-asterisk">*</span></label>
                                <select
                                    className="edu-input-field"
                                    value={entry.endYear}
                                    onChange={(e) => handleWorkExperienceChange(index, "endYear", e.target.value)}
                                    disabled={entry.present}
                                >
                                    <option value="">Year</option>
                                    {yearsArray.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="work-date-col work-present-checkbox">
                                <label className="present-label">
                                    <input
                                        type="checkbox"
                                        checked={entry.present}
                                        onChange={(e) => handleWorkExperienceChange(index, "present", e.target.checked)}
                                    /> Present
                                </label>
                            </div>
                        </div>

                        <div className="edu-form-group">
                            <label className="edu-form-label">Duration</label>
                            <input
                                className="edu-input-field"
                                type="text"
                                value={calculateDuration(
                                    entry.startMonth,
                                    entry.startYear,
                                    entry.endMonth,
                                    entry.endYear,
                                    entry.present
                                )}
                                disabled
                                placeholder="Calculated automatically"
                            />
                        </div>
                        <div className="edu-form-group">
                            <label className="edu-form-label">Location</label>
                            <input
                                className="edu-input-field"
                                type="text"
                                placeholder="San Francisco, CA"
                                value={entry.location}
                                onChange={(e) => handleWorkExperienceChange(index, "location", e.target.value)}
                            />
                        </div>
                        <div className="edu-form-group">
                            <label className="edu-form-label">Job Description</label>
                            <textarea
                                className="edu-textarea-field"
                                placeholder="Brief description of your role and responsibilities"
                                value={entry.description}
                                onChange={(e) => handleWorkExperienceChange(index, "description", e.target.value)}
                                rows="3"
                            />
                        </div>
                        <button
                            type="button"
                            className="edu-remove-btn"
                            onClick={() => removeWorkExperience(index)}
                        >
                            Remove Work Experience
                        </button>
                    </div>
                ))}

                <button type="button" className="edu-add-btn" onClick={addWorkExperience}>
                    Add Work Experience
                </button>
            </div>

            <div className="edu-subsection">
                <h2>Professional Certifications</h2>
                <p className="edu-section-description">List your professional certifications, licenses, and credentials</p>

                {certifications.map((entry, index) => (
                    <div key={index} className="certification-row">
                        <div className="edu-form-group">
                            <label className="edu-form-label">Certification Title<span className="required-asterisk">*</span></label>
                            <input
                                className="edu-input-field"
                                type="text"
                                placeholder="AWS Certified Solutions Architect"
                                value={entry.title}
                                onChange={(e) => handleCertificationChange(index, "title", e.target.value)}
                            />
                        </div>
                        <div className="edu-form-group">
                            <label className="edu-form-label">Issuing Organization<span className="required-asterisk">*</span></label>
                            <input
                                className="edu-input-field"
                                type="text"
                                placeholder="Amazon Web Services"
                                value={entry.institution}
                                onChange={(e) => handleCertificationChange(index, "institution", e.target.value)}
                            />
                        </div>
                        <div className="edu-form-group">
                            <label className="edu-form-label">Year Obtained<span className="required-asterisk">*</span></label>
                            <input
                                className="edu-input-field"
                                type="text"
                                placeholder="2023"
                                value={entry.year}
                                onChange={(e) => handleCertificationChange(index, "year", e.target.value)}
                            />
                        </div>
                        <button
                            type="button"
                            className="edu-remove-btn"
                            onClick={() => removeCertification(index)}
                        >
                            Remove Certification
                        </button>
                    </div>
                ))}

                <button type="button" className="edu-add-btn" onClick={addCertification}>
                    Add Certification
                </button>
            </div>
        </div>
    );
}

export default EducationSection;