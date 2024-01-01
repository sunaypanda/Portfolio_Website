// src/components/Projects.js
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>
        <strong>Computer Vision Finger Counter :</strong>
      </p>
      <p>
        {" "}
        Developed a finger counter model using OpenCV and Python which works by
        analyzing video footage and isolating the hand using background
        subtraction and morphological operations. Then, using convex hulls and
        circular ROIs, it extracts hand features and calculates the number of
        fingers raised.
      </p>
      <p>
        <strong>Movie Search App :</strong>
      </p>
      <p>
        Developed a interactive movie search app using React, fetching data from
        the OMDb API. Implemented a clean UI with CSS styling, accommodating
        various screen sizes. Key components include App.js for state management
        and API requests, and MovieCard.jsx for rendering movie details.
      </p>
      <p>
        <strong>Portfolio App :</strong>
      </p>
      <p>
        Developed a responsive portfolio website using React.js, showcasing my
        skills and projects. The website features a clean design with a header
        and an 'About Me' section. Components are organized for maintainability,
        and styling is implemented using CSS.
      </p>
      <p>
        <strong>Arduino Smart Car</strong>{" "}
      </p>
      <p>
        Represented my school, built a car, using ARDUINO UNO as its core and
        react for the control app, that reused its energy to charge its battery
        and features to limit accidents. Ranked 4th out of 140+ teams.
      </p>
    </section>
  );
};

export default Projects;
