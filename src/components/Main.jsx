import React from "react";
import HtmlLogo from "../assets/images/html.png";
import CssLogo from "../assets/images/css.png";
import SassLogo from "../assets/images/sass.png"
import VsCodeLogo from "../assets/images/visual-studio-code.png"
import GitHubLogo from "../assets/images/github.png"
import GitLogo from "../assets/images/git.png"
import JSLogo from "../assets/images/javascript.png"
import NodeLogo from "../assets/images/node-js.png"
import ReactLogo from "../assets/images/react.png"

function Main() {
  return (
    <>
      <main className="skillset_section">
        <section className="skills">
          <div className="card card_1">
            <h3 className="card_text-1">Languages in my toolkit:</h3>
            <div className="card_img-1">
              <img src={HtmlLogo} alt="html icon" />
              <img src={CssLogo} alt="css icon" />
              <img src={SassLogo} alt="sass icon" />
            </div>
            <h3 className="card_text-1">Crafting with:</h3>
            <div className="card_img-1">
              <img
                src={VsCodeLogo}
                alt="vscode icon"
              />
              <img src={GitHubLogo} alt="github icon" />
              <img src={GitLogo} alt="git icon" />
            </div>
          </div>
          <div className="card card_2">
            <h3 className="card_text-2">
              Languages and Devtools I'm exploring:
            </h3>
            <div className="card_img-2">
              <img src={JSLogo} alt="javascript icon" />
              <img src={NodeLogo} alt="node icon" />
              <img src={ReactLogo} alt="react icon" />
            </div>
          </div>
        </section>

        <h3 className="project_text">
          Exciting Projects on the Horizon - Stay Tuned!
        </h3>

        <section id="projects" className="projects">
          <div className="grid_card projects_card1">
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            {/* </article> */}
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
    </>
  );
}

export default Main;
