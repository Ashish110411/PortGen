import React from "react";

function EducationSection({ educationList, setEducationList }) {
    const handleChange = (index, field, value) => {
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

    return (
        <div className="section">
            <h2>Education</h2>

            {educationList.map((entry, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Institution"
                        value={entry.institution}
                        onChange={(e) => handleChange(index, "institution", e.target.value)}
                        required
                    />
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Degree"
                        value={entry.degree}
                        onChange={(e) => handleChange(index, "degree", e.target.value)}
                        required
                    />
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Year"
                        value={entry.year}
                        onChange={(e) => handleChange(index, "year", e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className="button"
                        onClick={() => removeEducation(index)}
                        style={{ backgroundColor: "red", marginTop: "5px" }}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button type="button" className="button" onClick={addEducation}>
                Add Education
            </button>
        </div>
    );
}

export default EducationSection;
