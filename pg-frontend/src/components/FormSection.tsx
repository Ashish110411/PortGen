import { useState } from 'react';
import SkillSelector from './SkillSelector';
import ProjectInput from './ProjectInput';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';



export default function FormSection() {
    const [formData, setFormData] = useState({
        name: '',
        shortAbout: '',
        longAbout: '',
        email: '',
        socialLinks: {
            linkedin: '',
            github: '',
            website: '',
        },
        education: [],
        projects: [],
        skills: [],
        profilePic: null,
        backgroundImg: null,
        cvFile: null,
        contactInfo: {
            fullName: '',
            email: '',
            message: ''
        }

    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        setFormData({ ...formData, [key]: e.target.files?.[0] });
    };


    // @ts-ignore
    return (
        <form className="space-y-6 p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md shadow">
            {/* Basic Info */}
            <div>
                <label className="block mb-1">Name</label>
                <input
                    className="input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div>
                <label className="block mb-1">Short About</label>
                <input
                    className="input"
                    placeholder="e.g. Full Stack Developer, AI Enthusiast..."
                    value={formData.shortAbout}
                    onChange={(e) => setFormData({ ...formData, shortAbout: e.target.value })}
                />
            </div>

            <div>
                <label className="block mb-1">Long About</label>
                <textarea
                    className="input"
                    rows={4}
                    placeholder="Tell a little about your journey, interests, and achievements..."
                    value={formData.longAbout}
                    onChange={(e) => setFormData({ ...formData, longAbout: e.target.value })}
                />
            </div>

            {/* File Uploads */}
            <div>
                <label className="block mb-1">Upload CV</label>
                <input
                    className="input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    title="Upload your resume in PDF or DOCX"
                    onChange={(e) => handleFileChange(e, 'cvFile')}
                />
            </div>
            <div>
                <label className="block mb-1">Profile Picture</label>
                <input
                    className="input"
                    type="file"
                    accept="image/*"
                    title="Upload a headshot/profile photo"
                    onChange={(e) => handleFileChange(e, 'profilePic')}
                />
            </div>
            <div>
                <label className="block mb-1">Background Image</label>
                <input
                    className="input"
                    type="file"
                    accept="image/*"
                    title="Upload a background image for the landing section"
                    onChange={(e) => handleFileChange(e, 'backgroundImg')}
                />
            </div>
            {/* Contact */}
            <div>
                <label className="block mb-1">Email</label>
                <input
                    className="input"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>

            {/* Socials */}
            <div>
                <label className="block mb-1">LinkedIn</label>
                <input
                    className="input"
                    type="text"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.socialLinks.linkedin}
                    onChange={(e) =>
                        setFormData({ ...formData, socialLinks: { ...formData.socialLinks, linkedin: e.target.value } })
                    }
                />
            </div>
            <div>
                <label className="block mb-1">GitHub</label>
                <input
                    className="input"
                    type="text"
                    placeholder="https://github.com/yourhandle"
                    value={formData.socialLinks.github}
                    onChange={(e) =>
                        setFormData({ ...formData, socialLinks: { ...formData.socialLinks, github: e.target.value } })
                    }
                />
            </div>
            <div>
                <label className="block mb-1">Website</label>
                <input
                    className="input"
                    type="text"
                    placeholder="https://yourportfolio.com"
                    value={formData.socialLinks.website}
                    onChange={(e) =>
                        setFormData({ ...formData, socialLinks: { ...formData.socialLinks, website: e.target.value } })
                    }
                />
            </div>

            {/* Skills */}
            <SkillSelector selected={formData.skills} onChange={(skills) => setFormData({ ...formData, skills })} />

            {/* Projects */}
            <ProjectInput projects={formData.projects} onChange={(projects) => setFormData({ ...formData, projects })} />
            <EducationSection
                education={formData.education}
                onChange={(education) => setFormData({ ...formData, education })}
            />
            <ContactSection
                contactInfo={formData.contactInfo}
                onChange={(contactInfo) => setFormData({ ...formData, contactInfo })}
            />

            {/* Submit */}
            <button
                type="submit"
                className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
                Generate Portfolio
            </button>
        </form>
    );
}
