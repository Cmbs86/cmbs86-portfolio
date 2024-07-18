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
import StarterKitCard from "./starterkits/StarterKidCard.jsx";

//images
import akpica from "../assets/images/akpica-ecommerce.png";
import theprojects from "../assets/images/the-projects.jpeg";
import firstportfolio from "../assets/images/first-portfolio.png";
import akpicaBlog from "../assets/images/Akpica-blog.png";
import crusaders from "../assets/images/e-commerce_crusaders.webp";
import GridX from "../assets/images/GridX.webp";
import basicServer from "../assets/images/basic-server.png";
import mern from "../assets/images/mern.png";
import react from "../assets/images/react.webp";
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

        <h3 className="project_text" id="projects">
          My Latest Projects:
        </h3>

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

          <div className="grid_card projects_card3">
            <ProjectCard
              image={crusaders}
              altTitle={"crusaders-ecommerce"}
              imageUrl={"https://crusaders-ecommerce.netlify.app/"}
              title={"Crusaders E-commerce"}
              description={
                "This online store, created using HTML, CSS, and JavaScript, includes product viewing, a cart for purchases, and an adaptable layout."
              }
              demoUrl={"https://crusaders-ecommerce.netlify.app/"}
              codeUrl={"https://github.com/Cmbs86/ecommerce-crusaders"}
            />
          </div>

          <div className="grid_card projects_card3">
            <ProjectCard
              image={GridX}
              altTitle={"GridX"}
              imageUrl={"https://gridxportfolio.netlify.app/"}
              title={"GridX Portfolio"}
              description={
                "GridX is a mobile-friendly portfolio template featuring a sleek design and fluid animations, constructed using HTML, CSS, and JavaScript"
              }
              demoUrl={"https://gridxportfolio.netlify.app/"}
              codeUrl={"https://github.com/Cmbs86/gridX?tab=readme-ov-file"}
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
        <h3 className="project_text" id="projects">
          Starter Kits
        </h3>

        <p className="starter_kit">
          I've put together a range of Starter Kits to help developers avoid the
          hassles of configuration and setup. With these kits, you can dive
          straight into coding, focusing on implementing your ideas rather than
          dealing with the tedious groundwork of starting projects.
        </p>
        <section className="projects-section">
          <StarterKitCard
            starterLink={"https://github.com/Cmbs86/Basic-Server"}
            starterImg={basicServer}
            altTitle={"Basic Server"}
          />

          <StarterKitCard
            starterLink={"https://github.com/Cmbs86/MERN/blob/main/mern.png"}
            starterImg={mern}
            altTitle={"Mern Starter kit"}
          />

          <StarterKitCard
            starterLink={"https://github.com/Cmbs86/rvct"}
            starterImg={react}
            altTitle={"React Vite Clean Template"}
          />
        </section>
        <h3 className="project_text" id="projects">
          Contact me:
        </h3>
      </main>
    </>
  );
}

export default Main;
