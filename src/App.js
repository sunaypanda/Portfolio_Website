import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { debounce } from "lodash";
import "./App.css";
import {
  bitcoin_predict,
  movie_website,
  nlp_classifier,
  food_classifier,
  github_project,
  portfolio_img,
  finger_counter,
} from "./image_import.js";

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
              <img src={bitcoin_predict} alt="Project_1_img"></img>
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
              <img src={nlp_classifier} alt="Project_2_img"></img>
              <h3>NLP Sentence Classification</h3>
              <p>
                A model to classify the different types of sentences in a text
                and their importance to enable faster skim through using RNN
                architecture.
              </p>
            </div>
            <div className="project_card">
              <div className="status" style={{ marginBottom: "20px" }}>
                <div className="status-complete"></div>
                <p style={{ fontSize: "10px" }}>Completed</p>
              </div>
              <img
                src={food_classifier}
                alt="Project_3_img"
                style={{ width: "250px", height: "165px" }}
              ></img>
              <h3>Food Image Classification</h3>
              <p>
                An image classification model to classify various food images to
                their corresponding labels using a CNN architecture.
              </p>
              <a
                href="https://github.com/sunaypanda/Food_Classification_Model"
                target="blank"
              >
                <img
                  src={github_project}
                  alt="Food_Vision_Github"
                  style={{ width: "35px", height: "35px", paddingTop: "5px" }}
                  className="github_link"
                ></img>
              </a>
            </div>
            <div className="project_card">
              <div className="status" style={{ marginBottom: "20px" }}>
                <div className="status-complete"></div>
                <p style={{ fontSize: "10px" }}>Completed</p>
              </div>
              <img
                src={finger_counter}
                alt="Project_4_img"
                style={{ width: "250px", height: "165px" }}
              ></img>
              <h3>Finger Counting Model</h3>
              <p>
                A real time computer vision model that employs background
                seperation, hand segmentation and finger counting using convex
                hull analysis.
              </p>
              <a
                href="https://github.com/sunaypanda/Finger_Count_Model"
                target="blank"
              >
                <img
                  src={github_project}
                  alt="Finger_Count_Github"
                  style={{ width: "35px", height: "35px", paddingTop: "5px" }}
                  className="github_link"
                ></img>
              </a>
            </div>
            <div className="project_card">
              <div className="status" style={{ marginBottom: "20px" }}>
                <div className="status-complete"></div>
                <p style={{ fontSize: "10px" }}>Completed</p>
              </div>
              <img
                src={movie_website}
                alt="Project_5_img"
                style={{ width: "250px", height: "165px" }}
              ></img>
              <h3>Movie Search Website</h3>
              <p>
                A React Application built using JS, HTML and CSS, that pulls
                search data and displayes movie cards from a real time open
                movie database.
              </p>
              <a href="https://github.com/sunaypanda/Movie-App" target="blank">
                <img
                  src={github_project}
                  alt="Movie_Search_Github"
                  style={{ width: "35px", height: "35px", paddingTop: "5px" }}
                  className="github_link"
                ></img>
              </a>
            </div>
            <div className="project_card">
              <div className="status" style={{ marginBottom: "20px" }}>
                <div className="status-complete"></div>
                <p style={{ fontSize: "10px" }}>Completed</p>
              </div>
              <img
                src={portfolio_img}
                alt="Project_6_img"
                style={{ width: "250px", height: "165px" }}
              ></img>
              <h3>Portfolio Website</h3>
              <p>
                A React Application built using JS, HTML and CSS, to create a
                portfolio displaying my skills, and projects that I am currently
                working on and have completed.
              </p>
              <a
                href="https://github.com/sunaypanda/Portfolio_Website"
                target="blank"
              >
                <img
                  src={github_project}
                  alt="Portfolio_Github"
                  style={{ width: "35px", height: "35px", paddingTop: "5px" }}
                  className="github_link"
                ></img>
              </a>
            </div>
            {/* More project cards */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
