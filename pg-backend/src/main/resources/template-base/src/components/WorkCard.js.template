import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLink, FiCalendar, FiMapPin } from "react-icons/fi";

const WorkCard = ({ w, tabId, index }) => {
	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 30,
			scale: 0.95
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
				delay: index * 0.1
			}
		}
	};

	// Function to format description with line breaks
	const formatDescription = (text) => {
		if (!text) return "No description available.";
		return text;
	};

	return (
		<motion.div
			variants={cardVariants}
			className="works-card"
			whileHover={{
				y: -8,
				scale: 1.02,
				transition: { duration: 0.3 }
			}}
			whileTap={{ scale: 0.98 }}
		>
			<div className="works-container">
				{/* Works-specific Card Header - Only Badge */}
				<div className="works-card-header">
					<span className={`works-type-badge ${tabId}`}>
						{tabId === 'financial' && '💰'}
						{tabId === 'government' && '🏛️'}
						{tabId === 'advisory' && '📊'}
						{tabId === 'achievements' && '🏆'}
					</span>
				</div>

				{/* Works-specific Title and Links Row */}
				<div className="works-title-links-row">
					<h3 className="works-title">{w.title || "Untitled Project"}</h3>
					{(w.github || w.link) && (
						<div className="works-links">
							{w.github && (
								<a
									className="works-link"
									href={w.github}
									target="_blank"
									rel="noopener noreferrer"
									title="View on GitHub"
									onClick={e => e.stopPropagation()}
								>
									<FiGithub />
								</a>
							)}
							{w.link && (
								<a
									className="works-link"
									href={w.link}
									target="_blank"
									rel="noopener noreferrer"
									title="Open project link"
									onClick={e => e.stopPropagation()}
								>
									<FiLink />
								</a>
							)}
						</div>
					)}
				</div>

				{/* Card Content */}
				<div className="card-content">
					<div className="work-desc-container">
						<p className="work-desc">
							{formatDescription(w.description)}
						</p>
					</div>

					{/* Project Details */}
					{(w.duration || w.location || w.value) && (
						<div className="project-details">
							{w.duration && (
								<div className="detail-item">
									<FiCalendar className="detail-icon" />
									<span>{w.duration}</span>
								</div>
							)}
							{w.location && (
								<div className="detail-item">
									<FiMapPin className="detail-icon" />
									<span>{w.location}</span>
								</div>
							)}
							{w.value && (
								<div className="detail-item">
									<span className="value-label">Value:</span>
									<span className="value-amount">{w.value}</span>
								</div>
							)}
						</div>
					)}
				</div>

				{/* Card Footer */}
				<div className="card-footer">
					{/* Tech Stack */}
					{w.tech && Array.isArray(w.tech) && w.tech.length > 0 && (
						<div className="tech-stack">
							<div className="tech-stack-label">Tech Stack</div>
							<div className="tech-tags">
								{w.tech.map((tech, i) => (
									<span key={i} className="tech-tag">{tech}</span>
								))}
							</div>
						</div>
					)}

					{/* Footer Bottom */}
					<div className="footer-bottom">
						{/* Skills Tags */}
						{w.skills && Array.isArray(w.skills) && w.skills.length > 0 && (
							<div className="skills-tags">
								{w.skills.map((skill, i) => (
									<span key={i} className="skill-tag">{skill}</span>
								))}
							</div>
						)}

						{/* Status Badge */}
						{w.status && (
							<div className={`status-badge ${w.status.toLowerCase().replace(' ', '-')}`}>
								{w.status}
							</div>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default WorkCard;