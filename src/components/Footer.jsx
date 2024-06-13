import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import ContactCard from "./ContactCard.jsx";

// <FaRegEnvelope />
// <FaLinkedin />

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <IconContext.Provider value={{ className: "footer-icons" }}>
          <div className="icons-container">
            <ContactCard
              link={"https://www.linkedin.com/in/carlos-brito-de-sousa/"}
              title={"LinkedIn"}
              icon={<FaLinkedin />}
            />

            <ContactCard
              link={"mailto:carlosmbs86@outlook.ie"}
              title={"Email"}
              icon={<FaRegEnvelope />}
            />

            <ContactCard
              link={"https://github.com/Cmbs86"}
              title={"GitHub"}
              icon={<FaGithub />}
            />
          </div>
        </IconContext.Provider>
        <p className="copyright">
          {" "}
          {currentYear}&copy; Carlos Sousa | All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
