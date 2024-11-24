"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/GbCderr14/" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/gaurang-bhutani-009752250/" },
    { icon: <SiLeetcode />, path: "https://leetcode.com/u/gaurangbhutani14/" },
    { icon: <SiCodechef />, path: "https://www.codechef.com/users/gb1_coder/" },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    
                </Link>
            ))}
        </div>
    );
};

export default Social;
