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
import { SiExpress } from "react-icons/si";
import ProjectCard from "./Projects/ProjectCard.jsx";

//images
import akpica from "../assets/images/akpica-ecommerce.png";
import theprojects from "../assets/images/the-projects.jpeg";
import firstportfolio from "../assets/images/first-portfolio.png";
import akpicaBlog from "../assets/images/Akpica-blog.png";

function Main() {
  return (
    <>
      <main className="skillset_section">
        <IconContext.Provider value={{ className: "skill-card-icons" }}>
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
                <SiExpress />
              </div>
            </div>
          </section>
        </IconContext.Provider>

        <h3 className="project_text" id="projects">My Latest Projects:</h3>

        <section id="projects-section" className="projects-section">
        <div className="grid_card projects_card1">
            <ProjectCard
              image={akpicaBlog}
              altTitle={"akpica-blog"}
              imageUrl={"https://akpicablog.netlify.app/"}
              title={"Akpica Blog"}
              description={
                "This blog, created by web developers, provides valuable resources and insights for developers of all levels to succeed. "
              }
              demoUrl={"https://akpicablog.netlify.app/"}
              codeUrl={"https://github.com/Cmbs86/akpica-blog"}
            />
          </div>



          <div className="grid_card projects_card2">
            <ProjectCard
              image={akpica}
              altTitle={"akpica-ecommerce"}
              imageUrl={"https://akpica.netlify.app/"}
              title={"akpica ecommerce"}
              description={
                "This eCommerce platform is designed to provide users with a range of features that make browsing, selecting, and purchasing products."
              }
              demoUrl={"https://akpica.netlify.app/"}
              codeUrl={"https://github.com/Cmbs86/akpica-ecommerce"}
            />
           
          </div>

          <div className="grid_card projects_card3">
            <ProjectCard
              image={theprojects}
              altTitle={"the-projects"}
              imageUrl={"https://the-projects-js.netlify.app/#"}
              title={"The Projects"}
              description={
                "JavaScript Projects for mastering the art of web development through hands-on practice with Vanilla JavaScript."
              }
              demoUrl={"https://the-projects-js.netlify.app/#"}
              codeUrl={"https://github.com/Cmbs86/the-projects"}
            />
            
          </div>

          <div className="grid_card projects_card4">
            <ProjectCard
              image={firstportfolio}
              altTitle={"first-portfolio"}
              imageUrl={"https://cmbs86-dci-portfolio.netlify.app/"}
              title={"first DCI Project"}
              description={
                "My first project practicing HTML and CSS, showcasing foundational skills in user interface design, a key step in my web development journey. "
              }
              demoUrl={"https://cmbs86-dci-portfolio.netlify.app/"}
              codeUrl={"https://github.com/Cmbs86/first-portfolio"}
            />
          </div>

          


        </section>
        <div className="form">
          <h3>Contact me:</h3>
        </div>
      </main>
    </>
  );
}

export default Main;
