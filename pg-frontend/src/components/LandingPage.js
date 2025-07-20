import React from 'react';
import {
    Star,
    ArrowRight,
    ExternalLink,
    ArrowDownLeft,
    ArrowLeft,
    ArrowRight as LucideArrowRight,
    User,
    Link,
    File,
    List,
    Book,
    Briefcase,
    Palette
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const FEATURES = [
    {
        icon: <svg width="28" height="28" fill="none"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#f0c35b" strokeWidth="2" strokeLinejoin="round" /></svg>,
        title: "Lightning Fast",
        desc: "Generate portfolio websites in minutes with our optimized build system."
    },
    {
        icon: <svg width="28" height="28" fill="none"><circle cx="12" cy="12" r="10" stroke="#f0c35b" strokeWidth="2" /><path d="M8 12a4 4 0 0 1 8 0" stroke="#f0c35b" strokeWidth="2" /></svg>,
        title: "Beautiful Themes",
        desc: "Choose from 8 stunning color themes to make your portfolio stand out."
    },
    {
        icon: <svg width="28" height="28" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#f0c35b" strokeWidth="2" /><path d="M8 12l4 4 4-4" stroke="#f0c35b" strokeWidth="2" /><path d="M12 8v8" stroke="#f0c35b" strokeWidth="2" /></svg>,
        title: "Complete Package",
        desc: "Download your full portfolio as a ZIP file with all assets ready for deployment."
    },
    {
        icon: <svg width="28" height="28" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#f0c35b" strokeWidth="2" /><path d="M8 8h8M8 12h8M8 16h4" stroke="#f0c35b" strokeWidth="2" /></svg>,
        title: "Modern Tech Stack",
        desc: "Built with React, responsive design, and modern web technologies for optimal performance."
    }
];

const THEMES = [
    { name: "Royal Emerald", color: "#33e58a" },
    { name: "Imperial Teal", color: "#2dd4bf" },
    { name: "Regal Amethyst", color: "#8b5cf6" },
    { name: "Platinum Glow", color: "#f0f6fc" },
    { name: "Majestic Gold", color: "#fbbf24" },
    { name: "Sapphire Elite", color: "#1f6feb" },
    { name: "Electric Chartreuse", color: "#F1FFC4" },
    { name: "Blazing Sunset", color: "#ff6b6b" }
];

// How it works steps: 7 steps, split as [0,1,2,3] in first row, [4,5,6] in second row (reversed)
const journeySteps = [
    {
        icon: <User size={30} />,
        title: "Fill Your Information",
        desc: "Enter your personal and professional basics."
    },
    {
        icon: <Link size={30} />,
        title: "Social Links",
        desc: "Add your LinkedIn, GitHub, and other social handles."
    },
    {
        icon: <File size={30} />,
        title: "Resume & Pic Upload",
        desc: "Upload your latest resume and profile/photo."
    },
    {
        icon: <List size={30} />,
        title: "Select Skills",
        desc: "Pick relevant skills from multiple domains."
    },
    {
        icon: <Book size={30} />,
        title: "Add Education/Exp/Certs",
        desc: "Add your academics, work experience & certifications."
    },
    {
        icon: <Briefcase size={30} />,
        title: "Domain Projects",
        desc: "Showcase your projects, by domain."
    },
    {
        icon: <Palette size={30} />,
        title: "Choose Your Style",
        desc: <>Pick a theme.<br />
            <a href="https://portgen-prototype.netlify.app/" target="_blank" rel="noopener noreferrer" className="how-proto-link">Visit prototype</a>
        </>
    }
];
const journeyStepsFirstRow = journeySteps.slice(0, 4);
const journeyStepsSecondRow = journeySteps.slice(4, 7).reverse();

function highlightLastWord(str) {
    const words = str.trim().split(" ");
    if (words.length === 0) return str;
    const last = words.pop();
    return (
        <span>
            {words.join(" ")}{" "}
            <span className="lp-title-highlight">{last}</span>
        </span>
    );
}

export default function LandingPage() {
    const navigate = useNavigate();
    const goToGenerator = () => navigate('/generator');

    // For themes (3,3,2) layout
    const themeRows = [
        THEMES.slice(0, 3),
        THEMES.slice(3, 6),
        THEMES.slice(6, 8)
    ];

    return (
        <div className="lp-root">
            {/* Header */}
            <header className="lp-header">
                <div className="lp-header-inner">
                    <div className="lp-logo-row">
                        <img src="/pglogo.png" alt="PortGen Logo" className="lp-logo-img" />
                        <span className="lp-logo-text">PortGen</span>
                    </div>
                    <nav className="lp-nav">
                        <a
                            href="https://github.com/Ashish110411/PortGen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lp-btn lp-btn-outline"
                        >
                            <Star size={16} /> Star Repo
                        </a>
                        <button className="lp-btn lp-btn-main" onClick={goToGenerator}>
                            Get Started <ArrowRight size={16} />
                        </button>
                    </nav>
                </div>
            </header>

            {/* Main Heading */}
            <section className="lp-hero-center">
                <h1 className="main-hero-title">
                    Create Stunning Portfolio Websites with
                    <br />
                    <span className="main-hero-highlight">Zero Coding</span>
                </h1>
                <blockquote className="lp-hero-quote">
                    "An introduction is not a song you sing alone; it's the echo others choose to carry your name upon."
                </blockquote>
                <div className="lp-hero-author">- Ashish Choudhary</div>
            </section>

            {/* Main Section: LHS Prototype, RHS Themes */}
            <section className="lp-main-split">
                <div className="lp-main-lhs">
                    <div className="lp-proto-preview">
                        <div className="lp-proto-frame">
                            <a
                                href="https://portgen-prototype.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lp-proto-link"
                            >
                                <iframe
                                    src="https://portgen-prototype.netlify.app/"
                                    title="Live Portfolio Preview"
                                    className="lp-proto-iframe"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                        <div className="lp-proto-controls">
                            <a
                                href="https://portgen-prototype.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lp-btn lp-btn-outline"
                            >
                                <ExternalLink size={16} /> View Full Site
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lp-main-rhs">
                    <div className="lp-themes-section">
                        <h2 className="lp-section-title lp-title-center">
                            {highlightLastWord("Themes Showcase")}
                        </h2>
                        <div className="lp-themes-matrix">
                            {themeRows.map((row, rowIdx) => (
                                <div className="lp-themes-matrix-row" key={rowIdx}>
                                    {row.map((theme, idx) => (
                                        <div
                                            key={idx}
                                            className="lp-theme-card"
                                            style={{
                                                "--theme-main": theme.color
                                            }}
                                        >
                                            <div className="lp-theme-color" style={{ backgroundColor: theme.color }}></div>
                                            <div className="lp-theme-name">{theme.name}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features - 1 row */}
            <section className="lp-features-section">
                <h2 className="lp-section-title lp-title-center">
                    {highlightLastWord("Key Features")}
                </h2>
                <div className="lp-features-grid-1row">
                    {FEATURES.map((f, idx) => (
                        <div key={idx} className="lp-feature-card">
                            <div className="lp-feature-icon">{f.icon}</div>
                            <div className="lp-feature-title">{f.title}</div>
                            <div className="lp-feature-desc">{f.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Journey Steps (How it Works) */}
            <div className="journey-steps-center">
                <div className="journey-steps-title">
                    {highlightLastWord("How it Works")}
                </div>
                <div className="journey-steps-flow">
                    {/* Top Row: 1 -> 2 -> 3 -> 4 */}
                    <div className="journey-steps-row journey-steps-row-top">
                        {journeyStepsFirstRow.map((step, idx) => (
                            <React.Fragment key={idx}>
                                <div className="journey-step-box">
                                    <span className="journey-step-icon yellow-icon">{step.icon}</span>
                                    <div className="journey-step-title yellow-text">{step.title}</div>
                                    <div className="journey-step-desc">{step.desc}</div>
                                </div>
                                {idx < journeyStepsFirstRow.length - 1 && (
                                    <span className="journey-step-arrow"><LucideArrowRight size={32} /></span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="journey-steps-down-arrow">
                        <ArrowDownLeft size={32} />
                    </div>
                    {/* Bottom Row: 7 <- 6 <- 5 */}
                    <div className="journey-steps-row journey-steps-row-bottom">
                        {journeyStepsSecondRow.map((step, idx) => (
                            <React.Fragment key={idx}>
                                <div className="journey-step-box">
                                    <span className="journey-step-icon yellow-icon">{step.icon}</span>
                                    <div className="journey-step-title yellow-text">{step.title}</div>
                                    <div className="journey-step-desc">{step.desc}</div>
                                </div>
                                {idx < journeyStepsSecondRow.length - 1 && (
                                    <span className="journey-step-arrow"><ArrowLeft size={32} /></span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <section className="lp-cta-section">
                <div className="lp-cta-inner">
                    <h2 className="lp-cta-title lp-title-center">
                        {highlightLastWord("Ready to Build Your Portfolio?")}
                    </h2>
                    <p className="lp-cta-desc">
                        Transform your professional story into a stunning website that stands out.
                    </p>
                    <button onClick={goToGenerator} className="lp-btn lp-btn-main lp-btn-large">
                        Start Creating Your Portfolio
                        <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="lp-footer">
                <div className="lp-footer-inner">
                    <div className="lp-footer-brand">
                        <div className="lp-logo-row">
                            <img src="/pglogo.png" alt="PortGen Logo" className="lp-logo-img" />
                            <span className="lp-logo-text">PortGen</span>
                        </div>
                        <div className="lp-footer-desc">
                            Professional portfolio website generator for modern developers and creators.
                        </div>
                    </div>
                    <div className="lp-footer-links">
                        <div className="lp-footer-col">
                            <div className="lp-footer-heading">Connect</div>
                            <ul className="lp-footer-list">
                                <li><a href="https://github.com/Ashish110411/PortGen" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/ashish110411/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li><a href="mailto:ashishchaudhary110411@gmail.com">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="lp-footer-bottom">
                    © 2025 PortGen. Built with ❤️ by Ashish Choudhary
                </div>
            </footer>
        </div>
    );
}