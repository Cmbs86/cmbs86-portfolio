import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <nav className="nav-container">
        <ul className="navbar">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <div className="icons">
            <li>
              <a href="https://www.linkedin.com/in/carlos-brito-de-sousa/" target="blank"
                ><i className="fa-brands fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="https://github.com/Cmbs86" target="blank"
                ><i className="fa-brands fa-github"></i></a>
            </li>
          </div>
        </ul>
      </nav>
  </>
  )
}

export default NavBar