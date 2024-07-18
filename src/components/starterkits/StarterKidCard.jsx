
import "./starterKitCard.css";

const StarterKitCard = ({ starterLink, starterImg, altTitle }) => {
    return (
      <article>
        <a href={starterLink} target="_blank" rel="noreferrer">
          <div className="img_box">
            <img
              src={starterImg}
              alt={altTitle}
              className="img_card"
            />
          </div>
        </a>
      </article>
    );
  };
  
  export default StarterKitCard;