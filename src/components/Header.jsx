// src/components/Header.js
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Header.css"


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Vinay Daharwal</h1>
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      
    </header>
    
  );
};

export default Header;

/* 

<div className="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/vinay-daharwal/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="resume-link.pdf" target="_blank" rel="noopener noreferrer">
          
        </a>
      </div>

*/
