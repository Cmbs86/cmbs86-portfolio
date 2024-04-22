import React from 'react'


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
              <a href="https://www.linkedin.com/" target="blank"
                ><i className="fa-brands fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="https://github.com/" target="blank"
                ><i className="fa-brands fa-github"></i></a>
            </li>
          </div>
        </ul>
      </nav>
  </>
  )
}

export default NavBar