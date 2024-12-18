//react imports
import { IconContext } from "react-icons";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import ProjectCard from "./Projects/ProjectCard.jsx";
import StarterKitCard from "./starterkits/StarterKidCard.jsx";

//images
import thornsShop from "../assets/images/thornsShop.webp";
import akpica from "../assets/images/akpica-ecommerce.png";
import theprojects from "../assets/images/the-projects.jpeg";
import firstportfolio from "../assets/images/first-portfolio.png";
import akpicaBlog from "../assets/images/Akpica-blog.png";
import crusaders from "../assets/images/e-commerce_crusaders.webp";
import GridX from "../assets/images/GridX.webp";
import server from "../assets/images/server.webp";
import mern from "../assets/images/mern.png";
import react from "../assets/images/react.webp";
import thorns_card_new from "../assets/images/thorns_card_new.webp";
import guess_the_number from "../assets/images/guess_the_number.webp";
function Main() {
  return (
    <>
      <main className="skillset_section">
        <IconContext.Provider value={{ className: "skill-card-icons" }}>
          <section className="skills">
            <div className="card card_1">
              <h3 className="card_text-1">Tech Stack:</h3>
              <div className="card_img-1">
                <FaHtml5 className="icon-1" />
                <FaCss3Alt className="icon-2" />
                <IoLogoJavascript className="icon-3" />
                <FaNode className="icon-1" />
                <FaReact className="icon-1" />
                <SiTypescript className="icon-4" />
              </div>
              {/* <h3 className="card_text-1">Tools & Technologies:</h3> */}
              <div className="card_img-1">
                <TbBrandVscode className="icon-2" />
                <FaGitAlt className="icon-3" />
                <FaGithub className="icon-4" />
                <RiTailwindCssLine className="icon-4" />
                <FaSass className="icon-1" />
                <SiMongodb className="icon-1" />
                <SiExpress className="icon-3" />
                <FaBootstrap className="icon-2" />
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
              image={thorns_card_new}
              altTitle={"thorns-page"}
              imageUrl={"https://thornsandspinestattoo.de/"}
              title={"Thorns & Spines tattoo"}
              description={
                "A modern tattoo shop website built with React, Tailwind CSS, and Framer Motion, featuring smooth animations and responsive design."
              }
              codeUrl={
                "https://github.com/Cmbs86/Thorns-and-Spines-page/tree/main/thorns-n-spines-project"
              }
              demoUrl={"https://thornsandspinestattoo.de/"}
            />
          </div>
          <div className="grid_card projects_card2">
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

          <div className="grid_card projects_card3">
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

          <div className="grid_card projects_card4">
            <ProjectCard
              image={guess_the_number}
              altTitle={"the-projects"}
              imageUrl={"https://cmbs86.github.io/guess-the-number/"}
              title={"Guess the Number"}
              description={
                "A Vanilla JavaScript game upgraded with TypeScript, light/dark mode, and enhanced features for better functionality."
              }
              demoUrl={"https://cmbs86.github.io/guess-the-number/"}
              codeUrl={"https://github.com/Cmbs86/guess-the-number"}
            />
          </div>

          <div className="grid_card projects_card4">
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

          <div className="grid_card projects_card5">
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

          <div className="grid_card projects_card7">
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
        <h3 className="starter_kit_text" id="projects">
          Starter Kits:
        </h3>
        <div className="starter_kit_box">
          <p className="starter_kit">
            I've put together a range of Starter Kits to help developers avoid
            the hassles of configuration and setup. With these kits, you can
            dive straight into coding, focusing on implementing your ideas
            rather than dealing with the tedious groundwork of starting
            projects.
          </p>
        </div>
        <section className="projects-section">
          <StarterKitCard
            starterLink={"https://github.com/Cmbs86/Basic-Server"}
            starterImg={server}
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

        <section className="about_me_container" id="about">
          <div className="about_me">
            <div className="about_me_text">
              <h3>About Me:</h3>
              <p>
                JavaScript Developer with expertise in the MERN stack. I have
                strong skills in JavaScript, TypeScript, and frontend frameworks
                like React and Tailwind CSS, as well as server-side programming
                with Node.js and MongoDB. I graduated from a comprehensive
                one-year full-time Full Stack Web Development program at DCI -
                Digital Career Insitute.
              </p>
              <p>
                My background includes a technical course in environmental
                sciences, where I learned the importance of resourcefulness,
                creativity, empathy, and sustainability. Coupled with 10 years
                of hands-on experience as a chef, which taught me to learn by
                doing, I bring adaptability, critical thinking, time management,
                attention to detail, teamwork, and problem-solving skills.
              </p>
              <p>
                Outside of development, I have a passion for travel and learning
                about new cultures, having lived in three different countries.
                Music also plays a significant role in my life. I play the bass
                guitar, have performed in two bands, and am currently working on
                a new project with friends. I frequently attend music events and
                see music as an essential part of who I am.
              </p>
            </div>
          </div>
        </section>

        <h3 className="contact_me">Contact me:</h3>
      </main>
    </>
  );
}

export default Main;
