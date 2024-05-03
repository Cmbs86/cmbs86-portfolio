import Avatar from "../assets/images/avatar.png"
function Intro() {
  return (
    <>
      <div id="about" className="introduction">
        <h1 className="introduction_header">
          <img src={Avatar} alt="avatar" />
          Hi, I'm Carlos Sousa.
          <br />A 38-year-old Junior Full Stack Web Developer.
        </h1>
        <p className="introduction_text">
          Transitioning from an 8-year career as a cook, I've found my passion
          in crafting digital experiences as a web developer. My expertise lies
          in the MERN stack: using React.js for dynamic frontends, Node.js and
          Express.js for robust backends, and MongoDB for flexible data storage.
          <br />
          <br />
          When it comes to creating interactive web functionality, I turn to
          JavaScript, weaving together engaging user experiences. From the
          layout to the visual appeal, I meticulously shape the structure with
          HTML and breathe life into designs with CSS. Drawing from my culinary
          background, I bring creativity, attention to detail, and a love for
          problem-solving into every line of code. Continuously studying and
          learning new technologies is a core part of my journey.
          <br />
          <br />
          Outside the world of coding, you'll often find me lost in the rhythms
          of my bass guitar. I've played in 2 band projects in the past and
          currently working on another musical venture. Let's collaborate and
          turn your ideas into beautifully functional web solutions.
        </p>
      </div>
    </>
  );
}

export default Intro;
