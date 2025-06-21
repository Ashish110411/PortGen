import React from "react";

const availableComponents = [
    "HeroSection",
    "About",
    "Skills",
    "Education",
    "Works"
];

function ComponentSelector({ selectedComponents, setSelectedComponents }) {
    const handleChange = (component) => {
        if (selectedComponents.includes(component)) {
            setSelectedComponents(
                selectedComponents.filter((c) => c !== component)
            );
        } else {
            setSelectedComponents([...selectedComponents, component]);
        }
    };

    return (
        <div className="section">
            <h2>Select Components</h2>
            <div className="checkbox-group">
                {availableComponents.map((component) => (
                    <label key={component}>
                        <input
                            type="checkbox"
                            checked={selectedComponents.includes(component)}
                            onChange={() => handleChange(component)}
                        />
                        {" "}{component}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default ComponentSelector;
