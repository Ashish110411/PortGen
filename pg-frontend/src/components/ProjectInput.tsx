// import React, { useState } from 'react';
import { useState } from 'react';

type Project = {
    name: string;
    description: string;
    github: string;
    group: string; // e.g., WebDev, ML, DS
};

type Props = {
    projects: Project[];
    onChange: (projects: Project[]) => void;
};

const groups = ['WebDev', 'Data Science', 'ML', 'Game Dev', 'Android'];

export default function ProjectInput({ projects, onChange }: Props) {
    const [localProject, setLocalProject] = useState<Project>({
        name: '',
        description: '',
        github: '',
        group: groups[0]
    });

    const addProject = () => {
        if (localProject.name && localProject.github) {
            onChange([...projects, localProject]);
            setLocalProject({ name: '', description: '', github: '', group: groups[0] });
        }
    };

    const removeProject = (index: number) => {
        const updated = [...projects];
        updated.splice(index, 1);
        onChange(updated);
    };

    return (
        <div>
            <h2 className="text-lg font-semibold mb-2">Projects</h2>
            <div className="space-y-2 mb-4">
                <input
                    className="input"
                    placeholder="Project Name"
                    value={localProject.name}
                    onChange={e => setLocalProject({ ...localProject, name: e.target.value })}
                />
                <input
                    className="input"
                    placeholder="GitHub Link"
                    value={localProject.github}
                    onChange={e => setLocalProject({ ...localProject, github: e.target.value })}
                />
                <textarea
                    className="input"
                    placeholder="Description"
                    rows={2}
                    value={localProject.description}
                    onChange={e => setLocalProject({ ...localProject, description: e.target.value })}
                />
                <select
                    className="input"
                    value={localProject.group}
                    onChange={e => setLocalProject({ ...localProject, group: e.target.value })}
                >
                    {groups.map(g => <option key={g}>{g}</option>)}
                </select>
                <button type="button" onClick={addProject} className="bg-green-600 text-white px-3 py-1 rounded">
                    + Add Project
                </button>
            </div>

            <ul className="space-y-1">
                {projects.map((proj, index) => (
                    <li key={index} className="border p-2 rounded-md">
                        <div className="flex justify-between">
                            <span><strong>{proj.name}</strong> ({proj.group})</span>
                            <button onClick={() => removeProject(index)} className="text-red-500">Remove</button>
                        </div>
                        <p className="text-sm">{proj.description}</p>
                        <a className="text-blue-600 text-sm" href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
