

//react imports
import { IconContext } from "react-icons";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import ProjectCard from "./Projects/ProjectCard.jsx";
import akpica from "../assets/images/akpica-screenshot.webp"

function Main() {
  return (
    <>
      <IconContext.Provider value={{ size: "4.5rem" }}>
        <main className="skillset_section">
          <section className="skills">
            <div className="card card_1">
              <h3 className="card_text-1">Languages:</h3>
              <div className="card_img-1">
                <FaHtml5 />
                <FaCss3Alt />
                <IoLogoJavascript />
              </div>
              <h3 className="card_text-1">Tools & Technologies:</h3>
              <div className="card_img-1">
                <FaNode />
                <TbBrandVscode />
                <FaGitAlt />
                <FaGithub />
                <FaReact />
                <RiTailwindCssLine />
                <SiMongodb />
              </div>
            </div>
          </section>

          <h3 className="project_text">
            Exciting Projects on the Horizon - Stay Tuned!
          </h3>

          <section id="projects" className="projects">
            <div className="grid_card projects_card1">
              <ProjectCard
            image={akpica}
            altTitle={"akpica-ecommerce"}
            imageUrl={"https://akpica.netlify.app/"}
            title={"akpica ecommerce"}
            description={
              "This eCommerce platform is designed to provide users with a range of features that make browsing, selecting, and purchasing products."
            }
            demoUrl={"https://akpica.netlify.app/"}
            codeUrl={"https://github.com/akiko-luka/akpica-ecommerce"}
          />
              {/* <span className="top"></span>
              <span className="right"></span>
              <span className="bottom"></span>
              <span className="left"></span>
              </article> */}
            </div>

            <div className="grid_card projects_card2">
              <span className="top"></span>
              <span className="right"></span>
              <span className="bottom"></span>
              <span className="left"></span>
            </div>

            <div className="grid_card projects_card3">
              <span className="top"></span>
              <span className="right"></span>
              <span className="bottom"></span>
              <span className="left"></span>
            </div>
          </section>
          <div className="form">
            <h3>Let's Collaborate!</h3>
            <p>Fill in the form below, and I'll get back to you!</p>
            <form id="contact" action="#" method="post">
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name here"
                required
              />

              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />

              <label for="message">How can I help you?</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here"
                rows="5"
                required
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </main>
      </IconContext.Provider>
    </>
  );
}

export default Main;
