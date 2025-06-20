// types.ts
export type Skill = {
    name: string;
    icon: string;
};

export type SkillGroup = {
    group: string;
    skills: Skill[];
};

export type Education = {
    institution: string;
    degree: string;
    year: string;
};

export type Project = {
    title: string;
    desc: string;
    link: string;
    tech: string[];
    group: string;
};
