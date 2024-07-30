import Avatar from "../assets/images/avatar.webp";
function Intro() {
  return (
    <>
      <div className="introduction" id="intro">
        <div className="general_intro_box">
          <div className="img-square">
            <div className="img-box">
              <img src={Avatar} alt="avatar" />
            </div>
          </div>

          <div className="intro_header_box">
            <h1 className="introduction_header">
              Hi, I'm Carlos Sousa.
              <br />A Full Stack Web Developer, born in Sao Paulo, Brazil.
            </h1>
          </div>
        </div>

        <p className="introduction_text">
          Having spent around 12 years in Europe, life took me in many
          interesting directions. It was in Berlin, however, that I finally
          reconnected with my passion for web development. A passion that began
          years ago in Brazil.
        </p>
      </div>
    </>
  );
}

export default Intro;
