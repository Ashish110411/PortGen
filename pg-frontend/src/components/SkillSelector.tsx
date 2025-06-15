type Skill = {
    name: string;
    icon: string;
};

type SkillGroup = {
    group: string;
    skills: Skill[];
};

const skillGroups: SkillGroup[] = [
    {
        group: 'Data Science',
        skills: [
            { name: 'NumPy', icon: '/icons/numpy.png' },
            { name: 'Pandas', icon: '/icons/pandas.png' },
            { name: 'Matplotlib', icon: '/icons/matplotlib.png' },
        ],
    },
    {
        group: 'Machine Learning',
        skills: [
            { name: 'TensorFlow', icon: '/icons/tensorflow.svg' },
            { name: 'Scikit-Learn', icon: '/icons/sklearn.svg' },
        ],
    },
    {
        group: 'Web Development',
        skills: [
            { name: 'React', icon: '/icons/react.svg' },
            { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
            { name: 'Node.js', icon: '/icons/nodejs.svg' },
        ],
    },
    {
        group: 'Languages',
        skills: [
            { name: 'Python', icon: '/icons/python.svg' },
            { name: 'Java', icon: '/icons/java.svg' },
            { name: 'C++', icon: '/icons/cpp.svg' },
        ],
    },
    {
        group: 'Creativity',
        skills: [
            { name: 'Figma', icon: '/icons/figma.svg' },
            { name: 'Blender', icon: '/icons/blender.svg' },
        ],
    },
];

type Props = {
    selected: string[];
    onChange: (skills: string[]) => void;
};

export default function SkillSelector({ selected, onChange }: Props) {
    const toggleSkill = (name: string) => {
        if (selected.includes(name)) {
            onChange(selected.filter(s => s !== name));
        } else {
            onChange([...selected, name]);
        }
    };

    return (
        <div>
            <h2 className="text-lg font-semibold mb-2">Skills</h2>
            {skillGroups.map(group => (
                <div key={group.group} className="mb-4">
                    <h3 className="font-medium text-blue-600 mb-1">{group.group}</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                        {group.skills.map(skill => (
                            <label key={skill.name} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={selected.includes(skill.name)}
                                    onChange={() => toggleSkill(skill.name)}
                                />
                                <div className={`border rounded-md p-2 w-full flex items-center gap-2 ${selected.includes(skill.name) ? 'bg-blue-100 border-blue-500' : 'border-gray-300'}`}>
                                    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                                    <span>{skill.name}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
