import React, { useState } from "react";
import "../styles/Works.css";
import { motion } from "framer-motion";
import { tabData } from "../data/WorkData";
import WorkCard from "./WorkCard";

const Works = () => {
	const [activeTab, setActiveTab] = useState("financial");

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1
			}
		}
	};

	const headingVariants = {
		hidden: { y: -30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6, ease: "easeOut" }
		}
	};

	const tabVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5, ease: "easeOut" }
		}
	};

	const contentVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" }
		}
	};

	return (
		<section className="works" id="works">
			<div className="container">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="works-wrapper"
				>
					{/* Section Header */}
					<motion.div variants={headingVariants} className="heading">
						<span className="heading-sub-text">Professional Portfolio</span>
						<h2 className="heading-text">My Work & Projects</h2>
						<div className="heading-divider"></div>
					</motion.div>

					{/* Tab Navigation */}
					<motion.div variants={tabVariants} className="tabs-container">
						<div className="tabs">
							{tabData.map((tab) => (
								<button
									key={tab.id}
									className={`tab ${activeTab === tab.id ? "active" : ""}`}
									onClick={() => setActiveTab(tab.id)}
								>
									<span className="tab-label">{tab.label}</span>
								</button>
							))}
						</div>
					</motion.div>

					{/* Project Cards */}
					<motion.div
						key={activeTab}
						variants={contentVariants}
						initial="hidden"
						animate="visible"
						className="works-content"
					>
						<div className="works-box">
							{tabData
								.find((tab) => tab.id === activeTab)
								?.data?.map((project, index) => (
									<WorkCard 
										key={`${activeTab}-${index}`} 
										w={project} 
										tabId={activeTab}
										index={index}
									/>
								))}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Works;