import "./projectCard.css";
import { IconContext } from "react-icons";

// icons
import { IoPlaySharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ imageUrl, image, altTitle, title, description, demoUrl, codeUrl }) => {
  return (
    <>
      <article className="card__container">
        <div className="card-proj">
          <a href={imageUrl} target="_blank">
            <img src={image} alt={altTitle} />
            <h3>{title}</h3>
          </a>
          <p>{description}</p>

          <IconContext.Provider value={{ className: "project-icons" }}>
          <div className="btn">
            <button className="code">
              <a href={codeUrl} target="_blank">
                <p>Code </p>
                <BsGithub  />
              </a>
            </button>
            
            {demoUrl && (
              <button className="demo">
                <a href={demoUrl} target="_blank">
                 <p>Live</p><IoPlaySharp />
                </a>
              </button>
            )}

          </div>
          </IconContext.Provider>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;