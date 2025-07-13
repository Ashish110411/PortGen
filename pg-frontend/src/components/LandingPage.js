import React from 'react';
import { Globe, Zap, Download, Star, ArrowRight, Code, Palette, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/generator');
    };

    const features = [
        {
            icon: <Zap size={24} />,
            title: "Lightning Fast",
            description: "Generate professional portfolio websites in minutes with our optimized build system."
        },
        {
            icon: <Palette size={24} />,
            title: "Beautiful Themes",
            description: "Choose from 8 stunning color themes designed to make your portfolio stand out."
        },
        {
            icon: <Download size={24} />,
            title: "Complete Package",
            description: "Download your full portfolio as a ZIP file with all assets ready for deployment."
        },
        {
            icon: <Code size={24} />,
            title: "Modern Tech Stack",
            description: "Built with React, responsive design, and modern web technologies for optimal performance."
        }
    ];

    const themes = [
        { name: "Royal Emerald", color: "#33e58a" },
        { name: "Imperial Teal", color: "#2dd4bf" },
        { name: "Regal Amethyst", color: "#8b5cf6" },
        { name: "Platinum Glow", color: "#f0f6fc" },
        { name: "Majestic Gold", color: "#fbbf24" },
        { name: "Sapphire Elite", color: "#1f6feb" },
        { name: "Electric Chartreuse", color: "#F1FFC4" },
        { name: "Blazing Sunset", color: "#ff6b6b" }
    ];

    return (
        <div className="landing-page">
            {/* Header */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <img
                                src="/pglogo.png"
                                alt="PortGen Logo"
                                className="logo-icon"
                            />
                            <h1 className="logo-text">PortGen</h1>
                        </div>

                        <nav className="nav">
                            <a href="#features" className="nav-link">Features</a>
                            <a href="#themes" className="nav-link">Themes</a>
                            <a href="#how-it-works" className="nav-link">How it Works</a>
                            <a
                                href="https://github.com/Ashish110411/PortGen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link star-repo"
                            >
                                <Star size={16} />
                                Star Repo
                            </a>
                            <button onClick={handleGetStarted} className="btn-primary">
                                Get Started
                                <ArrowRight size={16} />
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <blockquote className="hero-quote">
                            "An introduction is not a song you sing alone; it's the echo others choose to carry your name upon."
                        </blockquote>
                        <div className="hero-author">
                            <a
                                href="https://www.linkedin.com/in/ashish110411/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="author-link"
                            >
                                - Ashish Choudhary
                            </a>
                        </div>

                        <h1 className="hero-title">
                            Create Stunning Portfolio Websites with
                            <span className="hero-highlight">Zero Coding</span>
                        </h1>
                        <p className="hero-description">
                            Transform your career story into a beautiful, professional portfolio website.
                            My intuitive builder generates complete, responsive websites ready for deployment
                            in minutes, not hours.
                        </p>
                        <div className="hero-actions">
                            <button onClick={handleGetStarted} className="btn-primary btn-large">
                                Start Building Now
                                <ArrowRight size={20} />
                            </button>
                            <a
                                href="https://portgen-prototype.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary btn-large"
                            >
                                <ExternalLink size={20} />
                                View Live Demo
                            </a>
                        </div>
                        {/* Live Preview - UPDATED with full clickable frame */}
                        <div className="hero-preview">
                            <div className="device-frame">
                                <a
                                    href="https://portgen-prototype.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="device-screen-link"
                                >
                                    <iframe
                                        src="https://portgen-prototype.netlify.app/"
                                        title="Live Portfolio Preview"
                                        className="device-screen"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                            <div className="preview-controls">
                                <a
                                    href="https://portgen-prototype.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                >
                                    <ExternalLink size={16} />
                                    View Full Site
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="social-links">
                            <a
                                href="https://www.linkedin.com/in/ashish110411/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn Profile"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/Ashish110411"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub Profile"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a
                                href="https://ashish110411.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Portfolio Website"
                            >
                                <Globe size={28} />
                            </a>
                            <a
                                href="mailto:ashishchaudhary110411@gmail.com"
                                title="Email"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Powerful Features for Perfect Portfolios</h2>
                        <p className="section-description">
                            Everything you need to create, customize, and deploy professional portfolio websites.
                        </p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Theme Showcase Section - NEW */}
            <section id="themes" className="themes">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Choose Your Perfect Theme</h2>
                        <p className="section-description">
                            8 beautifully crafted themes to match your personal brand and style.
                        </p>
                    </div>
                    <div className="themes-showcase">
                        {themes.map((theme, index) => (
                            <div key={index} className="theme-card">
                                <div
                                    className="theme-color"
                                    style={{ backgroundColor: theme.color }}
                                ></div>
                                <h4 className="theme-name">{theme.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="how-it-works">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">How It Works</h2>
                        <p className="section-description">
                            Create your professional portfolio in three simple steps.
                        </p>
                    </div>
                    <div className="steps-grid">
                        {[
                            {
                                step: "01",
                                title: "Fill Your Information",
                                description: "Enter your personal details, skills, education, work experience, and projects through our intuitive form."
                            },
                            {
                                step: "02",
                                title: "Choose Your Style",
                                description: "Select from 8 beautiful themes and customize colors to match your personal brand."
                            },
                            {
                                step: "03",
                                title: "Download & Deploy",
                                description: "Get your complete website package as a ZIP file, ready for hosting on any platform."
                            }
                        ].map((step, index) => (
                            <div key={index} className="step-card">
                                <div className="step-number">{step.step}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Build Your Perfect Portfolio?</h2>
                        <p className="cta-description">
                            Transform your professional story into a stunning website that stands out.
                        </p>
                        <button onClick={handleGetStarted} className="btn-primary btn-large">
                            Start Creating Your Portfolio
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <div className="logo">
                                    <img
                                        src="/pglogo.png"
                                        alt="PortGen Logo"
                                        className="logo-icon"
                                    />
                                    <span className="logo-text">PortGen</span>
                                </div>
                            </div>
                            <p className="footer-description">
                                Professional portfolio website generator for modern developers and creators.
                            </p>
                        </div>
                        <div className="footer-links">
                            <div className="footer-column">
                                <h4 className="footer-heading">Connect</h4>
                                <ul className="footer-list">
                                    <li><a href="https://github.com/Ashish110411/PortGen" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                    <li><a href="https://www.linkedin.com/in/ashish110411/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                    <li><a href="mailto:ashishchaudhary110411@gmail.com">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2025 PortGen. Built with ❤️ by Ashish Choudhary</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;