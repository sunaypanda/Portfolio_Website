import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { debounce } from "lodash";
import "./App.css";

function App() {
  const [shouldScrollToTop, setShouldScrollToTop] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const elementsToAnimate = [
        { selector: ".about_paragraph_container", classToAdd: "fade-in" },
        { selector: ".project_card", classToAdd: "fade-in" },
        { selector: ".skills_container", classToAdd: "fade-in" },
      ];
      elementsToAnimate.forEach(({ selector, classToAdd }) => {
        const elements = document.querySelectorAll(selector);

        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const isVisible =
            rect.top <= window.innerHeight - 100 && rect.bottom >= 0;

          if (isVisible) {
            element.classList.add(classToAdd);
          } else {
            element.classList.remove(classToAdd);
          }
        });
      });
    }, 100);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    if (shouldScrollToTop) {
      window.scrollTo(0, 0);
      setShouldScrollToTop(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shouldScrollToTop]);

  return (
    <div className="app">
      <nav className="navbar">
        <ScrollLink
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          offset={-10}
          activeClass="active"
        >
          Intro
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-10}
          activeClass="active"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          offset={-10}
          activeClass="active"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={30}
          activeClass="active"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-10}
          activeClass="active"
        >
          Contact
        </ScrollLink>
      </nav>
      <section className="intro" id="intro">
        <div className="intro_content">
          <h2>Hi, I am Sunay Panda</h2>
          <p>Machine learning and AI enthusiast.</p>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about_content">
          <h1>About Me</h1>
          <div className="about_paragraph_container fade-in">
            <p className="about_paragraph">
              I am a sophomore at the University of Houston and am majoring in
              Computer Engineering. I have developed a keen interest in Machine
              learning and have been working to crack into the AI realm.
            </p>
            <p className="about_paragraph_2">
              I also love watching movies and TV shows and soccer.
            </p>
            <p className="about_paragraph_3">
              Favourite Genre: Action/Suspense Thriller, Soccer Position: Left
              Winger
            </p>
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <div className="skills_content">
          <h1>Skills</h1>
          <div className="skills_container fade-in">
            <div className="skills_1">
              <ol>
                <li>Python</li>
                <li>C++</li>
                <li>TensorFlow</li>
                <li>Git</li>
                <li>Javascript</li>
              </ol>
            </div>
            <div className="skills_2">
              <ol>
                <li>SQL</li>
                <li>React JS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>System Verilog</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="projects" id="projects">
        <div className="project_content">
          <h2>Projects</h2>
          <div className="project_cards_container fade-in">
            <div className="project_card">
              <div className="status">
                <div className="status-active"></div>
                <p>Active</p>
              </div>
              <img
                src="https://miro.medium.com/v2/resize:fit:786/format:webp/0*SaNg8uUaKCMQSS5g.jpg"
                alt="Project_1_img"
              ></img>
              <h3>BitCoin Price Predicton</h3>
              <p>
                A time series model, trained over a large dataset of stock
                prices to predict future Bitcoin Value using LSTM and RNN
                architecture.
              </p>
            </div>
            <div className="project_card">
              <div className="status">
                <div className="status-active"></div>
                <p>Active</p>
              </div>
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*goFgCUHprcroxSLZvROjpg.jpeg"
                alt="Project_2_img"
              ></img>
              <h3>NLP Sentence Classifier</h3>
              <p>
                A model to classify the different types of sentences in a text
                and their importance to enable faster skim through using RNN
                architecture.
              </p>
            </div>
            <div className="project_card">
              <div className="status">
                <div className="status-complete"></div>
                <p>Completed</p>
              </div>
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*goFgCUHprcroxSLZvROjpg.jpeg"
                alt="Project_2_img"
              ></img>
              <h3>Food Classification Model</h3>
              <p>
                An image classification model to classify various food images to
                their corresponding labels using a CNN architecture.
              </p>
              <a
                href="https://github.com/sunaypanda/Food_Classification_Model/blob/25dbf930294d34b0c9df13d70a4fe72e2ccab3a2/Food_Vision_Model_B7.ipynb"
                target="blank"
              >
                <img
                  src="https://pngimg.com/uploads/github/github_PNG83.png"
                  alt="Food_Vision_Github"
                  style={{ width: "40px", height: "40px", paddingTop: "5px" }}
                  className="github_link"
                ></img>
              </a>
            </div>
            <div className="project_card">
              <div className="status">
                <div className="status-complete"></div>
                <p style={{ fontSize: "10px" }}>Completed</p>
              </div>
              <h3>Project 2: Cool Project</h3>
              <p>Another cool project description...</p>
            </div>
            <div className="project_card">
              <div className="status">
                <div className="status-complete"></div>
                <p style={{ fontSize: "10px" }}>Completed</p>
              </div>
              <h3>Project 1: Awesome Project</h3>
              <p>A description of your awesome project...</p>
            </div>
            <div className="project_card">
              <div className="status">
                <div className="status-complete"></div>
                <p style={{ fontSize: "10px" }}>Completed</p>
              </div>
              <h3>Project 2: Cool Project</h3>
              <p>Another cool project description...</p>
            </div>
            {/* Add more project cards */}
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Email : sunaypanda12@gmail.com</p>
        <a href="https://www.linkedin.com/in/sunay-panda/" target="blank">
          <img
            src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-net2o24e.png"
            alt="Linkedin_Profile"
            style={{ width: "40px", height: "40px", paddingTop: "5px" }}
            className="Linkedin_Contact"
          ></img>
        </a>
        <a href="https://github.com/sunaypanda" target="blank">
          <img
            src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"
            alt="Github_Profile"
            style={{ width: "40px", height: "40px", paddingTop: "5px" }}
            className="Github_Contact"
          ></img>
        </a>
      </section>
    </div>
  );
}

export default App;
