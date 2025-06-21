// // import React, { useState } from "react";
// //
// // // Dummy skill groups example — replace with your real skill data
// // const skillGroups = {
// //     "Web Development": [
// //         { name: "React", icon: "react.png" },
// //         { name: "Angular", icon: "angular.png" },
// //     ],
// //     "Mobile Development": [
// //         { name: "Flutter", icon: "flutter.png" },
// //         { name: "React Native", icon: "rn.png" },
// //     ],
// //     "ML / AI": [
// //         { name: "TensorFlow", icon: "tensorflow.png" },
// //         { name: "PyTorch", icon: "pytorch.png" },
// //     ],
// // };
// //
// // // ProjectInput from your last version with domain dropdown
// // const projectDomains = [
// //     { id: "mobdev", label: "Mobile Development" },
// //     { id: "gamedev", label: "Game Development" },
// //     { id: "mlai", label: "ML / AI" },
// //     { id: "webdev", label: "Web Development" },
// //     { id: "devops", label: "DevOps / Cloud" },
// //     { id: "cybersec", label: "Cybersecurity / Blockchain" },
// // ];
// //
// // // ProjectInput component (simplified for brevity)
// // function ProjectInput({ projects, setProjects }) {
// //     // ...same as before (you can reuse the last ProjectInput code I gave you)
// //     // For brevity, I’ll assume you plug your latest ProjectInput.js here.
// //     return <div>{/* Your ProjectInput JSX here */}</div>;
// // }
// //
// // function PortfolioForm() {
// //     const [form, setForm] = useState({
// //         name: "",
// //         about: "",
// //         aboutParagraph1: "",
// //         aboutParagraph2: "",
// //         aboutParagraph3: "",
// //         aboutParagraph4: "",
// //         email: "",
// //         altEmail: "",
// //         socialLinks: {
// //             linkedin: "",
// //             github: "",
// //             website: "",
// //             instagram: "",
// //             whatsapp: "",
// //         },
// //         roles: [""],
// //         selectedComponents: [
// //             "HeroSection",
// //             "About",
// //             "Skills",
// //             "Education",
// //             "Works",
// //         ],
// //         skills: [],
// //         educationList: [],
// //         projects: [],
// //     });
// //
// //     const [files, setFiles] = React.useState({
// //         profilePic: null,
// //         profilePicSmall: null,
// //         resume: null,
// //     });
// //
// //     const handleFileChange = (e) => {
// //         const { name, files: selectedFiles } = e.target;
// //         setFiles((prev) => ({
// //             ...prev,
// //             [name]: selectedFiles[0],
// //         }));
// //     };
// //
// //
// //     // Helpers for updating nested state
// //     const updateSocialLink = (key, value) =>
// //         setForm((f) => ({
// //             ...f,
// //             socialLinks: { ...f.socialLinks, [key]: value },
// //         }));
// //
// //     const updateRoles = (index, val) => {
// //         const updatedRoles = [...form.roles];
// //         updatedRoles[index] = val;
// //         setForm({ ...form, roles: updatedRoles });
// //     };
// //
// //     const addRole = () => setForm({ ...form, roles: [...form.roles, ""] });
// //     const removeRole = (index) =>
// //         setForm({ ...form, roles: form.roles.filter((_, i) => i !== index) });
// //
// //     const toggleComponent = (comp) => {
// //         if (form.selectedComponents.includes(comp)) {
// //             setForm({
// //                 ...form,
// //                 selectedComponents: form.selectedComponents.filter((c) => c !== comp),
// //             });
// //         } else {
// //             setForm({
// //                 ...form,
// //                 selectedComponents: [...form.selectedComponents, comp],
// //             });
// //         }
// //     };
// //
// //     // Skills selection handler (checkboxes)
// //     const toggleSkill = (groupName, skillName) => {
// //         const skillObj = { name: skillName, icon: skillName.toLowerCase() + ".png" };
// //
// //         const skillExists = form.skills.some((s) => s.name === skillName);
// //         if (skillExists) {
// //             setForm({
// //                 ...form,
// //                 skills: form.skills.filter((s) => s.name !== skillName),
// //             });
// //         } else {
// //             setForm({ ...form, skills: [...form.skills, skillObj] });
// //         }
// //     };
// //
// //     // Education handlers (simple add/remove, inputs)
// //     const updateEducation = (index, field, val) => {
// //         const updatedEd = [...form.educationList];
// //         updatedEd[index] = { ...updatedEd[index], [field]: val };
// //         setForm({ ...form, educationList: updatedEd });
// //     };
// //     const addEducation = () =>
// //         setForm({ ...form, educationList: [...form.educationList, { institution: "", degree: "", year: "" }] });
// //     const removeEducation = (index) =>
// //         setForm({ ...form, educationList: form.educationList.filter((_, i) => i !== index) });
// //
// //     // Projects use your ProjectInput component (assume it's plugged)
// //     const setProjects = (projects) => setForm({ ...form, projects });
// //
// //     // Form submit handler
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //
// //         // Whatsapp auto-link fix
// //         let whatsappLink = form.socialLinks.whatsapp.trim();
// //         if (/^\d{10}$/.test(whatsappLink)) {
// //             whatsappLink = "https://wa.me/" + whatsappLink;
// //         }
// //
// //         const portfolioData = {
// //             ...form,
// //             socialLinks: { ...form.socialLinks, whatsapp: whatsappLink },
// //         };
// //
// //         console.log("Files selected:", files);
// //         console.log("Portfolio JSON:", JSON.stringify(portfolioData)); // <-- should not be undefined
// //
// //         // Prepare multipart form data
// //         const multipartFormData = new FormData();
// //         const jsonBlob = new Blob([JSON.stringify(portfolioData)], { type: "application/json" });
// //         multipartFormData.append("portfolio", jsonBlob);
// //
// //         // Append files
// //         if (files.profilePic) multipartFormData.append("profilePic", files.profilePic);
// //         if (files.profilePicSmall) multipartFormData.append("profilePicSmall", files.profilePicSmall);
// //         if (files.resume) multipartFormData.append("resume", files.resume);
// //
// //         // ... rest of fetch request
// //     };
// //
// //
// //     return (
// //         <form onSubmit={handleSubmit} style={{ maxWidth: 800, margin: "auto" }}>
// //             <h1>Portfolio Form</h1>
// //
// //             {/* Basic Info */}
// //             <label>Name*:</label>
// //             <input
// //                 type="text"
// //                 value={form.name}
// //                 onChange={(e) => setForm({ ...form, name: e.target.value })}
// //                 required
// //                 style={{ width: "100%", marginBottom: 12 }}
// //             />
// //
// //             <label>About* (short):</label>
// //             <textarea
// //                 value={form.about}
// //                 onChange={(e) => setForm({ ...form, about: e.target.value })}
// //                 required
// //                 style={{ width: "100%", marginBottom: 12, minHeight: 50 }}
// //             />
// //
// //             <label>About Paragraph 1*:</label>
// //             <textarea
// //                 value={form.aboutParagraph1}
// //                 onChange={(e) => setForm({ ...form, aboutParagraph1: e.target.value })}
// //                 required
// //                 style={{ width: "100%", marginBottom: 12, minHeight: 60 }}
// //             />
// //
// //             <label>About Paragraph 2*:</label>
// //             <textarea
// //                 value={form.aboutParagraph2}
// //                 onChange={(e) => setForm({ ...form, aboutParagraph2: e.target.value })}
// //                 required
// //                 style={{ width: "100%", marginBottom: 12, minHeight: 60 }}
// //             />
// //
// //             <label>About Paragraph 3 (optional):</label>
// //             <textarea
// //                 value={form.aboutParagraph3}
// //                 onChange={(e) => setForm({ ...form, aboutParagraph3: e.target.value })}
// //                 style={{ width: "100%", marginBottom: 12, minHeight: 60 }}
// //             />
// //
// //             <label>About Paragraph 4 (optional):</label>
// //             <textarea
// //                 value={form.aboutParagraph4}
// //                 onChange={(e) => setForm({ ...form, aboutParagraph4: e.target.value })}
// //                 style={{ width: "100%", marginBottom: 12, minHeight: 60 }}
// //             />
// //
// //             {/* Emails */}
// //             <label>Email*:</label>
// //             <input
// //                 type="email"
// //                 value={form.email}
// //                 onChange={(e) => setForm({ ...form, email: e.target.value })}
// //                 required
// //                 style={{ width: "100%", marginBottom: 12 }}
// //             />
// //             <label>Alternate Email (optional):</label>
// //             <input
// //                 type="email"
// //                 value={form.altEmail}
// //                 onChange={(e) => setForm({ ...form, altEmail: e.target.value })}
// //                 style={{ width: "100%", marginBottom: 12 }}
// //             />
// //
// //             {/* Social Links */}
// //             <h2>Social Links* (all required)</h2>
// //             {["linkedin", "github", "website", "instagram", "whatsapp"].map((key) => (
// //                 <div key={key}>
// //                     <label>{key}:</label>
// //                     <input
// //                         type="text"
// //                         value={form.socialLinks[key]}
// //                         onChange={(e) => updateSocialLink(key, e.target.value)}
// //                         required
// //                         style={{ width: "100%", marginBottom: 12 }}
// //                     />
// //                 </div>
// //             ))}
// //
// //             {/* Roles */}
// //             <h2>Roles* (at least 1 required)</h2>
// //             {form.roles.map((role, index) => (
// //                 <div key={index} style={{ marginBottom: 6 }}>
// //                     <input
// //                         type="text"
// //                         value={role}
// //                         onChange={(e) => updateRoles(index, e.target.value)}
// //                         required
// //                         style={{ width: "80%", marginRight: 8 }}
// //                     />
// //                     {form.roles.length > 1 && (
// //                         <button
// //                             type="button"
// //                             onClick={() => removeRole(index)}
// //                             style={{ cursor: "pointer" }}
// //                         >
// //                             Remove
// //                         </button>
// //                     )}
// //                 </div>
// //             ))}
// //             <button type="button" onClick={addRole}>
// //                 + Add Role
// //             </button>
// //
// //             {/* Selected Components */}
// //             <h2>Selected Components</h2>
// //             {["HeroSection", "About", "Skills", "Education", "Works"].map((comp) => (
// //                 <label key={comp} style={{ display: "block", marginBottom: 4 }}>
// //                     <input
// //                         type="checkbox"
// //                         checked={form.selectedComponents.includes(comp)}
// //                         onChange={() => toggleComponent(comp)}
// //                     />{" "}
// //                     {comp}
// //                 </label>
// //             ))}
// //
// //             {/* Skills */}
// //             <h2>Skills</h2>
// //             {Object.entries(skillGroups).map(([group, skills]) => (
// //                 <div key={group} style={{ marginBottom: 12 }}>
// //                     <strong>{group}</strong>
// //                     {skills.map(({ name, icon }) => (
// //                         <label key={name} style={{ marginLeft: 12, display: "inline-block" }}>
// //                             <input
// //                                 type="checkbox"
// //                                 checked={form.skills.some((s) => s.name === name)}
// //                                 onChange={() => toggleSkill(group, name)}
// //                             />{" "}
// //                             {name}
// //                         </label>
// //                     ))}
// //                 </div>
// //             ))}
// //
// //             {/* Education */}
// //             <h2>Education</h2>
// //             {form.educationList.map((edu, index) => (
// //                 <div key={index} style={{ marginBottom: 10 }}>
// //                     <input
// //                         type="text"
// //                         placeholder="Institution"
// //                         value={edu.institution}
// //                         onChange={(e) => updateEducation(index, "institution", e.target.value)}
// //                         required
// //                         style={{ width: "32%", marginRight: "2%" }}
// //                     />
// //                     <input
// //                         type="text"
// //                         placeholder="Degree"
// //                         value={edu.degree}
// //                         onChange={(e) => updateEducation(index, "degree", e.target.value)}
// //                         required
// //                         style={{ width: "32%", marginRight: "2%" }}
// //                     />
// //                     <input
// //                         type="text"
// //                         placeholder="Year"
// //                         value={edu.year}
// //                         onChange={(e) => updateEducation(index, "year", e.target.value)}
// //                         required
// //                         style={{ width: "30%" }}
// //                     />
// //                     <button
// //                         type="button"
// //                         onClick={() => removeEducation(index)}
// //                         style={{ marginLeft: 10, cursor: "pointer" }}
// //                     >
// //                         Remove
// //                     </button>
// //                 </div>
// //             ))}
// //             <button type="button" onClick={addEducation}>
// //                 + Add Education
// //             </button>
// //
// //             <h2>Uploads</h2>
// //
// //             <label>Profile Picture:</label>
// //             <input
// //                 type="file"
// //                 name="profilePic"
// //                 accept="image/*"
// //                 onChange={handleFileChange}
// //             />
// //
// //             <label>Small Profile Picture:</label>
// //             <input
// //                 type="file"
// //                 name="profilePicSmall"
// //                 accept="image/*"
// //                 onChange={handleFileChange}
// //             />
// //
// //             <label>Resume (PDF/DOCX):</label>
// //             <input
// //                 type="file"
// //                 name="resume"
// //                 accept=".pdf,.doc,.docx"
// //                 onChange={handleFileChange}
// //             />
// //
// //
// //             {/* Projects */}
// //             <ProjectInput projects={form.projects} setProjects={setProjects} />
// //
// //             <button
// //                 type="submit"
// //                 style={{
// //                     marginTop: 20,
// //                     padding: "12px 24px",
// //                     backgroundColor: "#3182ce",
// //                     color: "white",
// //                     border: "none",
// //                     borderRadius: 4,
// //                     cursor: "pointer",
// //                     fontSize: 16,
// //                 }}
// //             >
// //                 Submit Portfolio
// //             </button>
// //         </form>
// //     );
// // }
// //
// // export default PortfolioForm;
// import React, { useState } from "react";
// import ProjectInput from "./ProjectInput"; // Make sure this component is ready and imported
//
// // Dummy skill groups example
// const skillGroups = {
//     "Web Development": [
//         { name: "React", icon: "react.png" },
//         { name: "Angular", icon: "angular.png" },
//     ],
//     "Mobile Development": [
//         { name: "Flutter", icon: "flutter.png" },
//         { name: "React Native", icon: "rn.png" },
//     ],
//     "ML / AI": [
//         { name: "TensorFlow", icon: "tensorflow.png" },
//         { name: "PyTorch", icon: "pytorch.png" },
//     ],
// };
//
// function PortfolioForm() {
//     const [form, setForm] = useState({
//         name: "",
//         about: "",
//         aboutParagraph1: "",
//         aboutParagraph2: "",
//         aboutParagraph3: "",
//         aboutParagraph4: "",
//         email: "",
//         altEmail: "",
//         socialLinks: {
//             linkedin: "",
//             github: "",
//             website: "",
//             instagram: "",
//             whatsapp: "",
//         },
//         roles: [""],
//         selectedComponents: [
//             "HeroSection",
//             "About",
//             "Skills",
//             "Education",
//             "Works",
//         ],
//         skills: [],
//         educationList: [],
//         projects: [],
//     });
//
//     const [files, setFiles] = useState({
//         profilePic: null,
//         profilePicSmall: null,
//         resume: null,
//     });
//
//     const handleFileChange = (e) => {
//         const { name, files: selectedFiles } = e.target;
//         setFiles((prev) => ({
//             ...prev,
//             [name]: selectedFiles[0],
//         }));
//     };
//
//     // Helpers for updating nested state
//     const updateSocialLink = (key, value) =>
//         setForm((f) => ({
//             ...f,
//             socialLinks: { ...f.socialLinks, [key]: value },
//         }));
//
//     const updateRoles = (index, val) => {
//         const updatedRoles = [...form.roles];
//         updatedRoles[index] = val;
//         setForm({ ...form, roles: updatedRoles });
//     };
//
//     const addRole = () => setForm({ ...form, roles: [...form.roles, ""] });
//     const removeRole = (index) =>
//         setForm({ ...form, roles: form.roles.filter((_, i) => i !== index) });
//
//     const toggleComponent = (comp) => {
//         if (form.selectedComponents.includes(comp)) {
//             setForm({
//                 ...form,
//                 selectedComponents: form.selectedComponents.filter((c) => c !== comp),
//             });
//         } else {
//             setForm({
//                 ...form,
//                 selectedComponents: [...form.selectedComponents, comp],
//             });
//         }
//     };
//
//     // Skills selection handler (checkboxes)
//     const toggleSkill = (groupName, skillName) => {
//         const skillObj = { name: skillName, icon: skillName.toLowerCase() + ".png" };
//         const skillExists = form.skills.some((s) => s.name === skillName);
//         if (skillExists) {
//             setForm({
//                 ...form,
//                 skills: form.skills.filter((s) => s.name !== skillName),
//             });
//         } else {
//             setForm({ ...form, skills: [...form.skills, skillObj] });
//         }
//     };
//
//     // Education handlers (add/remove, inputs)
//     const updateEducation = (index, field, val) => {
//         const updatedEd = [...form.educationList];
//         updatedEd[index] = { ...updatedEd[index], [field]: val };
//         setForm({ ...form, educationList: updatedEd });
//     };
//     const addEducation = () =>
//         setForm({
//             ...form,
//             educationList: [...form.educationList, { institution: "", degree: "", year: "" }],
//         });
//     const removeEducation = (index) =>
//         setForm({ ...form, educationList: form.educationList.filter((_, i) => i !== index) });
//
//     // Projects setter passed to ProjectInput
//     const setProjects = (projects) => setForm({ ...form, projects });
//
//     // Form submit handler with multipart/form-data (files + JSON)
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         // Whatsapp auto-link fix
//         let whatsappLink = form.socialLinks.whatsapp.trim();
//         if (/^\d{10}$/.test(whatsappLink)) {
//             whatsappLink = "https://wa.me/" + whatsappLink;
//         }
//
//         const portfolioData = {
//             ...form,
//             socialLinks: { ...form.socialLinks, whatsapp: whatsappLink },
//         };
//
//         console.log("Files selected:", files);
//         console.log("Portfolio JSON:", JSON.stringify(portfolioData));
//
//         const multipartFormData = new FormData();
//         const jsonBlob = new Blob([JSON.stringify(portfolioData)], { type: "application/json" });
//         multipartFormData.append("data", jsonBlob);
//
//         if (files.profilePic) multipartFormData.append("profileImage", files.profilePic);
//         if (files.resume) multipartFormData.append("resume", files.resume);
//
//         try {
//             const response = await fetch("http://localhost:8080/api/portfolio/generate", {
//                 method: "POST",
//                 body: multipartFormData,
//             });
//
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//
//             const blob = await response.blob();
//             // For example: download the zip file
//             const url = window.URL.createObjectURL(blob);
//             const a = document.createElement("a");
//             a.href = url;
//             a.download = "portfolio.zip";
//             document.body.appendChild(a);
//             a.click();
//             a.remove();
//             window.URL.revokeObjectURL(url);
//         } catch (error) {
//             console.error("Error submitting portfolio:", error);
//             alert("Failed to submit portfolio. See console for details.");
//         }
//     };
//
//
//     return (
//         <form onSubmit={handleSubmit} style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
//             <h1>Portfolio Form</h1>
//
//             {/* Basic Info */}
//             <label>Name*:</label>
//             <input
//                 type="text"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 required
//                 className="input-field"
//             />
//
//             <label>About* (short):</label>
//             <textarea
//                 value={form.about}
//                 onChange={(e) => setForm({ ...form, about: e.target.value })}
//                 required
//                 className="textarea-field"
//             />
//
//             <label>About Paragraph 1*:</label>
//             <textarea
//                 value={form.aboutParagraph1}
//                 onChange={(e) => setForm({ ...form, aboutParagraph1: e.target.value })}
//                 required
//                 className="textarea-field"
//             />
//
//             <label>About Paragraph 2*:</label>
//             <textarea
//                 value={form.aboutParagraph2}
//                 onChange={(e) => setForm({ ...form, aboutParagraph2: e.target.value })}
//                 required
//                 className="textarea-field"
//             />
//
//             <label>About Paragraph 3 (optional):</label>
//             <textarea
//                 value={form.aboutParagraph3}
//                 onChange={(e) => setForm({ ...form, aboutParagraph3: e.target.value })}
//                 className="textarea-field"
//             />
//
//             <label>About Paragraph 4 (optional):</label>
//             <textarea
//                 value={form.aboutParagraph4}
//                 onChange={(e) => setForm({ ...form, aboutParagraph4: e.target.value })}
//                 className="textarea-field"
//             />
//
//             {/* Emails */}
//             <label>Email*:</label>
//             <input
//                 type="email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 required
//                 className="input-field"
//             />
//             <label>Alternate Email (optional):</label>
//             <input
//                 type="email"
//                 value={form.altEmail}
//                 onChange={(e) => setForm({ ...form, altEmail: e.target.value })}
//                 className="input-field"
//             />
//
//             {/* Social Links */}
//             <h2>Social Links* (all required)</h2>
//             {["linkedin", "github", "website", "instagram", "whatsapp"].map((key) => (
//                 <div key={key}>
//                     <label>{key}:</label>
//                     <input
//                         type="text"
//                         value={form.socialLinks[key]}
//                         onChange={(e) => updateSocialLink(key, e.target.value)}
//                         required
//                         className="input-field"
//                     />
//                 </div>
//             ))}
//
//             {/* Roles */}
//             <h2>Roles* (at least 1 required)</h2>
//             {form.roles.map((role, index) => (
//                 <div key={index} className="role-row">
//                     <input
//                         type="text"
//                         value={role}
//                         onChange={(e) => updateRoles(index, e.target.value)}
//                         required
//                         className="input-field role-input"
//                     />
//                     {form.roles.length > 1 && (
//                         <button
//                             type="button"
//                             onClick={() => removeRole(index)}
//                             className="remove-btn"
//                         >
//                             Remove
//                         </button>
//                     )}
//                 </div>
//             ))}
//             <button type="button" onClick={addRole} className="add-btn">
//                 + Add Role
//             </button>
//
//             {/* Selected Components */}
//             <h2>Selected Components</h2>
//             {["HeroSection", "About", "Skills", "Education", "Works"].map((comp) => (
//                 <label key={comp} className="checkbox-label">
//                     <input
//                         type="checkbox"
//                         checked={form.selectedComponents.includes(comp)}
//                         onChange={() => toggleComponent(comp)}
//                     />{" "}
//                     {comp}
//                 </label>
//             ))}
//
//             {/* Skills */}
//             <h2>Skills</h2>
//             {Object.entries(skillGroups).map(([group, skills]) => (
//                 <div key={group} className="skill-group">
//                     <strong>{group}</strong>
//                     {skills.map(({ name, icon }) => (
//                         <label key={name} className="checkbox-label skill-checkbox">
//                             <input
//                                 type="checkbox"
//                                 checked={form.skills.some((s) => s.name === name)}
//                                 onChange={() => toggleSkill(group, name)}
//                             />{" "}
//                             {name}
//                         </label>
//                     ))}
//                 </div>
//             ))}
//
//             {/* Education */}
//             <h2>Education</h2>
//             {form.educationList.map((edu, index) => (
//                 <div key={index} className="education-row">
//                     <input
//                         type="text"
//                         placeholder="Institution"
//                         value={edu.institution}
//                         onChange={(e) => updateEducation(index, "institution", e.target.value)}
//                         required
//                         className="input-field edu-input"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Degree"
//                         value={edu.degree}
//                         onChange={(e) => updateEducation(index, "degree", e.target.value)}
//                         required
//                         className="input-field edu-input"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Year"
//                         value={edu.year}
//                         onChange={(e) => updateEducation(index, "year", e.target.value)}
//                         required
//                         className="input-field edu-input"
//                     />
//                     <button
//                         type="button"
//                         onClick={() => removeEducation(index)}
//                         className="remove-btn"
//                     >
//                         Remove
//                     </button>
//                 </div>
//             ))}
//             <button type="button" onClick={addEducation} className="add-btn">
//                 + Add Education
//             </button>
//
//             {/* Uploads */}
//             <h2>Uploads</h2>
//             <label>Profile Picture:</label>
//             <input
//                 type="file"
//                 name="profilePic"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="file-input"
//             />
//             <label>Small Profile Picture:</label>
//             <input
//                 type="file"
//                 name="profilePicSmall"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="file-input"
//             />
//             <label>Resume (PDF/DOCX):</label>
//             <input
//                 type="file"
//                 name="resume"
//                 accept=".pdf,.doc,.docx"
//                 onChange={handleFileChange}
//                 className="file-input"
//             />
//
//             {/* Projects */}
//             <h2>Projects</h2>
//             <ProjectInput projects={form.projects} setProjects={setProjects} />
//
//             <button type="submit" className="submit-btn">
//                 Submit Portfolio
//             </button>
//         </form>
//     );
// }
//
// export default PortfolioForm;
import React, { useState } from "react";
import ProjectInput from "./ProjectInput"; // Make sure this component is ready and imported

// Dummy skill groups example
const skillGroups = {
    "Web Development": [
        { name: "HTML", icon: "html.png" },
        { name: "CSS", icon: "css.png" },
    ],
    "Mobile Development": [
        { name: "Java", icon: "java.png" },
        { name: "python", icon: "python.png" },
    ],
    "ML / AI": [
        { name: "TensorFlow", icon: "tensorflow.png" },
        { name: "Seaborn", icon: "seaborn.png" },
    ],
};

function PortfolioForm() {
    const [form, setForm] = useState({
        name: "",
        about: "",
        aboutParagraph1: "",
        aboutParagraph2: "",
        aboutParagraph3: "",
        aboutParagraph4: "",
        email: "",
        altEmail: "",
        socialLinks: {
            linkedin: "",
            github: "",
            website: "",
            instagram: "",
            whatsapp: "",
        },
        roles: [""],
        selectedComponents: [
            "HeroSection",
            "About",
            "Skills",
            "Education",
            "Works",
        ],
        skills: [],
        educationList: [],
        projects: [],
    });

    const [files, setFiles] = useState({
        profilePic: null,
        resume: null,
    });

    const handleFileChange = (e) => {
        const { name, files: selectedFiles } = e.target;
        setFiles((prev) => ({
            ...prev,
            [name]: selectedFiles[0],
        }));
    };

    // Helpers for updating nested state
    const updateSocialLink = (key, value) =>
        setForm((f) => ({
            ...f,
            socialLinks: { ...f.socialLinks, [key]: value },
        }));

    const updateRoles = (index, val) => {
        const updatedRoles = [...form.roles];
        updatedRoles[index] = val;
        setForm({ ...form, roles: updatedRoles });
    };

    const addRole = () => setForm({ ...form, roles: [...form.roles, ""] });
    const removeRole = (index) =>
        setForm({ ...form, roles: form.roles.filter((_, i) => i !== index) });

    const toggleComponent = (comp) => {
        if (form.selectedComponents.includes(comp)) {
            setForm({
                ...form,
                selectedComponents: form.selectedComponents.filter((c) => c !== comp),
            });
        } else {
            setForm({
                ...form,
                selectedComponents: [...form.selectedComponents, comp],
            });
        }
    };

    // Skills selection handler (checkboxes)
    const toggleSkill = (groupName, skillName) => {
        const skillObj = { name: skillName, icon: skillName.toLowerCase() + ".png" };
        const skillExists = form.skills.some((s) => s.name === skillName);
        if (skillExists) {
            setForm({
                ...form,
                skills: form.skills.filter((s) => s.name !== skillName),
            });
        } else {
            setForm({ ...form, skills: [...form.skills, skillObj] });
        }
    };

    // Education handlers (add/remove, inputs)
    const updateEducation = (index, field, val) => {
        const updatedEd = [...form.educationList];
        updatedEd[index] = { ...updatedEd[index], [field]: val };
        setForm({ ...form, educationList: updatedEd });
    };
    const addEducation = () =>
        setForm({
            ...form,
            educationList: [...form.educationList, { institution: "", degree: "", year: "" }],
        });
    const removeEducation = (index) =>
        setForm({ ...form, educationList: form.educationList.filter((_, i) => i !== index) });

    // Projects setter passed to ProjectInput
    const setProjects = (projects) => setForm({ ...form, projects });

    // Form submit handler with multipart/form-data (files + JSON)
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Whatsapp auto-link fix
        let whatsappLink = form.socialLinks.whatsapp.trim();
        if (/^\d{10}$/.test(whatsappLink)) {
            whatsappLink = "https://wa.me/" + whatsappLink;
        }

        const portfolioData = {
            ...form,
            socialLinks: { ...form.socialLinks, whatsapp: whatsappLink },
        };

        console.log("Files selected:", files);
        console.log("Portfolio JSON:", JSON.stringify(portfolioData));

        const multipartFormData = new FormData();
        const jsonBlob = new Blob([JSON.stringify(portfolioData)], { type: "application/json" });
        multipartFormData.append("data", jsonBlob);

        if (files.profilePic) multipartFormData.append("profileImage", files.profilePic);
        if (files.resume) multipartFormData.append("resume", files.resume);

        try {
            const response = await fetch("http://localhost:8080/api/portfolio/generate", {
                method: "POST",
                body: multipartFormData,
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const blob = await response.blob();
            // Download the zip file
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "portfolio.zip";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error submitting portfolio:", error);
            alert("Failed to submit portfolio. See console for details.");
        }
    };


    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
            <h1>Portfolio Form</h1>

            {/* Basic Info */}
            <label>Name*:</label>
            <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="input-field"
            />

            <label>About* (short):</label>
            <textarea
                value={form.about}
                onChange={(e) => setForm({ ...form, about: e.target.value })}
                required
                className="textarea-field"
            />

            <label>About Paragraph 1*:</label>
            <textarea
                value={form.aboutParagraph1}
                onChange={(e) => setForm({ ...form, aboutParagraph1: e.target.value })}
                required
                className="textarea-field"
            />

            <label>About Paragraph 2*:</label>
            <textarea
                value={form.aboutParagraph2}
                onChange={(e) => setForm({ ...form, aboutParagraph2: e.target.value })}
                required
                className="textarea-field"
            />

            <label>About Paragraph 3 (optional):</label>
            <textarea
                value={form.aboutParagraph3}
                onChange={(e) => setForm({ ...form, aboutParagraph3: e.target.value })}
                className="textarea-field"
            />

            <label>About Paragraph 4 (optional):</label>
            <textarea
                value={form.aboutParagraph4}
                onChange={(e) => setForm({ ...form, aboutParagraph4: e.target.value })}
                className="textarea-field"
            />

            {/* Emails */}
            <label>Email*:</label>
            <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="input-field"
            />
            <label>Alternate Email (optional):</label>
            <input
                type="email"
                value={form.altEmail}
                onChange={(e) => setForm({ ...form, altEmail: e.target.value })}
                className="input-field"
            />

            {/* Social Links */}
            <h2>Social Links* (all required)</h2>
            {["linkedin", "github", "website", "instagram", "whatsapp"].map((key) => (
                <div key={key}>
                    <label>{key}:</label>
                    <input
                        type="text"
                        value={form.socialLinks[key]}
                        onChange={(e) => updateSocialLink(key, e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
            ))}

            {/* Roles */}
            <h2>Roles* (at least 1 required)</h2>
            {form.roles.map((role, index) => (
                <div key={index} className="role-row">
                    <input
                        type="text"
                        value={role}
                        onChange={(e) => updateRoles(index, e.target.value)}
                        required
                        className="input-field role-input"
                    />
                    {form.roles.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeRole(index)}
                            className="remove-btn"
                        >
                            Remove
                        </button>
                    )}
                </div>
            ))}
            <button type="button" onClick={addRole} className="add-btn">
                + Add Role
            </button>

            {/* Selected Components */}
            <h2>Selected Components</h2>
            {["HeroSection", "About", "Skills", "Education", "Works"].map((comp) => (
                <label key={comp} className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={form.selectedComponents.includes(comp)}
                        onChange={() => toggleComponent(comp)}
                    />{" "}
                    {comp}
                </label>
            ))}

            {/* Skills */}
            <h2>Skills</h2>
            {Object.entries(skillGroups).map(([group, skills]) => (
                <div key={group} className="skill-group">
                    <strong>{group}</strong>
                    {skills.map(({ name, icon }) => (
                        <label key={name} className="checkbox-label skill-checkbox">
                            <input
                                type="checkbox"
                                checked={form.skills.some((s) => s.name === name)}
                                onChange={() => toggleSkill(group, name)}
                            />{" "}
                            {name}
                        </label>
                    ))}
                </div>
            ))}

            {/* Education */}
            <h2>Education</h2>
            {form.educationList.map((edu, index) => (
                <div key={index} className="education-row">
                    <input
                        type="text"
                        placeholder="Institution"
                        value={edu.institution}
                        onChange={(e) => updateEducation(index, "institution", e.target.value)}
                        required
                        className="input-field edu-input"
                    />
                    <input
                        type="text"
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) => updateEducation(index, "degree", e.target.value)}
                        required
                        className="input-field edu-input"
                    />
                    <input
                        type="text"
                        placeholder="Year"
                        value={edu.year}
                        onChange={(e) => updateEducation(index, "year", e.target.value)}
                        required
                        className="input-field edu-input"
                    />
                    <button
                        type="button"
                        onClick={() => removeEducation(index)}
                        className="remove-btn"
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" onClick={addEducation} className="add-btn">
                + Add Education
            </button>

            {/* Uploads */}
            <h2>Uploads</h2>
            <label>Profile Picture:</label>
            <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
            />

            <label>Resume (PDF/DOCX):</label>
            <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="file-input"
            />

            {/* Projects */}
            <h2>Projects</h2>
            <ProjectInput projects={form.projects} setProjects={setProjects} />

            <button type="submit" className="submit-btn">
                Submit Portfolio
            </button>
        </form>
    );
}

export default PortfolioForm;
