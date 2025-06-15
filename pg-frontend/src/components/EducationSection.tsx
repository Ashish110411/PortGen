import { useState } from 'react';

type Education = {
    school: string;
    degree: string;
    year: string;
};

export default function EducationSection({
                                             education,
                                             onChange
                                         }: {
    education: Education[];
    onChange: (value: Education[]) => void;
}) {
    const [entries, setEntries] = useState(education);

    const updateEntry = (index: number, field: keyof Education, value: string) => {
        const newEntries = [...entries];
        newEntries[index][field] = value;
        setEntries(newEntries);
        onChange(newEntries);
    };

    const addEntry = () => {
        const newEntry = { school: '', degree: '', year: '' };
        const updated = [...entries, newEntry];
        setEntries(updated);
        onChange(updated);
    };

    const removeEntry = (index: number) => {
        const updated = entries.filter((_, i) => i !== index);
        setEntries(updated);
        onChange(updated);
    };

    return (
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            {entries.map((entry, index) => (
                <div key={index} className="mb-4 space-y-2 border rounded p-4">
                    <input
                        type="text"
                        placeholder="University/School"
                        value={entry.school}
                        onChange={(e) => updateEntry(index, 'school', e.target.value)}
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Degree or Major"
                        value={entry.degree}
                        onChange={(e) => updateEntry(index, 'degree', e.target.value)}
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Year"
                        value={entry.year}
                        onChange={(e) => updateEntry(index, 'year', e.target.value)}
                        className="input"
                    />
                    <button
                        type="button"
                        onClick={() => removeEntry(index)}
                        className="text-red-600 text-sm"
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={addEntry}
                className="bg-blue-600 text-white px-3 py-1 rounded"
            >
                Add Education
            </button>
        </div>
    );
}
