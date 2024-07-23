import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import ContactCard from './ContactCard';

function NavBar() {
  return (
    <>
      <nav className="nav-container">
        <ul className="navbar">
        <li><a href="#intro">Intro</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <IconContext.Provider value={{className: "nav-icons" }}>
          <div className="icons">
            
            <li>
                <ContactCard
                link="https://www.linkedin.com/in/carlos-brito-de-sousa/"
                title="LinkedIn"
                icon={<FaLinkedin />}
                />
            </li>
            <li>
                <ContactCard
                link={"https://github.com/Cmbs86"}
                title={"GitHub"}
                icon={<FaGithub />}
                />
                
            </li>
          </div>
          </IconContext.Provider>
        </ul>
      </nav>
  </>
  )
}

export default NavBar