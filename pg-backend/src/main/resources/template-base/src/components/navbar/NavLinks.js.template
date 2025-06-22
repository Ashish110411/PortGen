import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";

const socials = [
    { name: "instagram", icon: <FaInstagram />, label: "Instagram" },
    { name: "linkedin", icon: <FaLinkedin />, label: "LinkedIn" },
    { name: "github", icon: <BsGithub />, label: "GitHub" },
    { name: "email", icon: <BiEnvelope />, label: "Email" },
];

const NavLinks = ({
    handleNav,
    socialLinks = {}
}) => (
    <ul className='nav-links'>
        {socials.map(social => {
            const value = socialLinks[social.name];
            const isEmail = social.name === "email";
            const hasValue = value && !value.startsWith("{{");
            const link = isEmail ? `mailto:${value}` : value;
            return (
                <li key={social.name} onClick={hasValue ? handleNav : undefined}>
                    {hasValue ? (
                        <a
                            href={link}
                            target={isEmail ? undefined : "_blank"}
                            rel={isEmail ? undefined : "noopener noreferrer"}
                            className='nav-link'
                            title={social.label}
                        >
                            {social.icon}
                        </a>
                    ) : (
                        <span className='nav-link nav-link--disabled' title={social.label} style={{opacity:0.35, pointerEvents:'none'}}>
                            {social.icon}
                        </span>
                    )}
                </li>
            );
        })}
    </ul>
);

export default NavLinks;