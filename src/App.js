<<<<<<< HEAD
import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import CanvasBackground from './components/ui/CanvasBackground';
import CustomCursor from './components/ui/CustomCursor';
import SystemStatus from './components/ui/SystemStatus';
import './styles/GlobalStyles.css';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <CanvasBackground />
      <SystemStatus />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
=======
import React, { useState, useEffect } from 'react';
import './App.css';

export default function Main() {
  const text = "Sunay Panda";
  











  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-visible');
          } else {
            entry.target.classList.remove('fade-visible');
          }
        });
      },
      { threshold: 0.1 } // Adjust for when the effect should start
    );

    // Select all elements with the .fade class
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);




  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      toggleMenu(); // Optional: closes the menu after scrolling
    }
  };
  







  const renderTextWithAnimation = (text) => {
    return text.split('').map((char, index) => {
      const animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds
      const animationDuration = '2s'; // Duration of the animation
      const animationTimingFunction = 'ease-in-out'; // Timing function
      const animationIterationCount = '1'; // Infinite loop for demonstration

      const style = {
        animationName: 'wiggle',
        animationDuration,
        animationTimingFunction,
        animationIterationCount,
        animationDelay,
        animationFillMode: 'forwards', // Retain the final state of the animation
        display: char === ' ' ? 'inline' : 'inline-block', // Preserve space as inline element
      };

      return (
        <span key={index} className="wiggle" style={style}>
          {char}
        </span>
      );
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div  id="home" className="main-container">
        <div className="navbar">
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>

          {/* Overlay menu */}
          {isOpen && (
            <div className="menu">
              <button className="close-btn" onClick={toggleMenu}>
                ✕
              </button>
              <div className="menu-content">
                <span onClick={() => scrollToSection("home")}>Home</span>
                <span onClick={() => scrollToSection("about")}>About Me</span>
                <span onClick={() => scrollToSection("skills")}>Skills</span>
                <span onClick={() => scrollToSection("experience")}>Experience</span>
                <span onClick={() => scrollToSection("awards")}>Awards</span>
                <span onClick={() => scrollToSection("projects")}>Projects</span>
                <span onClick={() => scrollToSection("contact")}>Contact</span>
              </div>
            </div>
          )}
        </div>

        <div className="section">
          <span onClick={() => scrollToSection("home")} className="text" style={{ cursor: 'pointer' }}>Home</span>
          <span onClick={() => scrollToSection("about")} className="text-2" style={{ cursor: 'pointer' }}>About Me</span>
          <span onClick={() => scrollToSection("skills")} className="text-3" style={{ cursor: 'pointer' }}>Skills</span>
          <span onClick={() => scrollToSection("experience")} className="text-4" style={{ cursor: 'pointer' }}>Experience</span>
          <span onClick={() => scrollToSection("awards")} className="text-x" style={{ cursor: 'pointer' }}>Awards</span>
          <span onClick={() => scrollToSection("projects")} className="text-5" style={{ cursor: 'pointer' }}>Projects</span>
          <span onClick={() => scrollToSection("contact")} className="text-6" style={{ cursor: 'pointer' }}>Contact</span>
        </div>
          <div className="group">
                <div className='wrapper'>
                <div className="text-7">{renderTextWithAnimation(text)}</div>          
                    <span className='text-8'>
                        Passionate about exploring the space of Machine Learning, Generative
                        AI and Computer Vision.
                    </span>
                    <div onClick={() => scrollToSection("contact")} className='box' style={{ cursor: 'pointer' }}>
                        <span className='text-9'>Get in Touch</span>
                    </div>
                </div>
                <div className='group-2'>
                    <div className='pic' />
                </div>
            </div>
            <div id="about" className='group-3 fade'>
                <span className='text-a'>About Me </span>
                <span className='text-b'>
                    <br />
                    I am a Junior at the University of Houston, majoring in Computer
                    Engineering.
                    <br />
                    <br />
                    I am an AI Startup Founder.
                    <br />
                    <br />I have a keen interest in Machine learning, Generative AI and
                    Computer Vision, and have been working to crack into the AI realm.
                    <br />
                    <br />I also love watching movies and TV shows and Soccer.
                    <br />
                    <br />
                    Favorite Genre: Action/Suspense Thriller
                    <br />
                    Soccer Position: Left Wing
                </span>
            </div>
            <div id="skills" className='group-4 fade'>
                <span className='text-c'>Skills</span>
                <div className='group-5 fade'>
                    <div className='group-6'>
                        <div className='pic-2' />
                        <span className='text-d'>Python</span>
                    </div>
                    <div className='section-2'>
                        <div className='img' />
                        <span className='text-e'>TensorFlow</span>
                    </div>
                    <div className='section-3'>
                        <div className='img-2' />
                        <span className='text-f'>ReactJS</span>
                    </div>
                    <div className='box-2'>
                        <div className='pic-3' />
                        <span className='text-10'>Pandas</span>
                    </div>
                    <div className='box-3'>
                        <div className='pic-4' />
                        <span className='text-11'>MATLAB</span>
                    </div>
                    <div className='group-7'>
                        <div className='pic-5' />
                        <span className='text-12'>C</span>
                    </div>
                    <div className='wrapper-2'>
                        <div className='img-3' />
                        <span className='text-13'>JavaScript</span>
                    </div>
                    <div className='group-8'>
                        <div className='pic-6' />
                        <span className='text-14'>PostgreSQL</span>
                    </div>
                    <div className='wrapper-3'>
                        <div className='img-4' />
                        <span className='text-15'>MongoDB</span>
                    </div>
                    <div className='box-5'>
                        <div className='pic-7' />
                        <span className='text-16'>C++</span>
                    </div>
                    <div className='box-6'>
                        <div className='pic-8' />
                        <span className='text-17'>NodeJS</span>
                    </div>
                    <div className='section-4'>
                        <div className='pic-9' />
                        <span className='text-18'>HTML</span>
                    </div>
                    <div className='wrapper-4'>
                        <div className='img-5' />
                        <span className='text-19'>CSS</span>
                    </div>
                    <div className='box-7'>
                        <div className='pic-a' />
                        <span className='text-1a'>Figma</span>
                    </div>
                    <div className='section-5'>
                        <div className='img-6' />
                        <span className='text-1b'>PowerBI</span>
                    </div>
                    <div className='box-8'>
                        <div className='img-7' />
                        <span className='text-1c'>Arduino</span>
                    </div>
                </div>
            </div>
            <div id="experience" className='box-9 fade'>
                <span className='text-1d'>Experience</span>
                <div className='section-6 fade'>
                    <div className='pic-b' />
                    <div className='box-a'>
                        <span className='text-1e'>Stayzy</span>
                        <span className='text-1f'>Founder</span>
                        <span className='text-20'>
                            Developing an AI assistant to automate guest communication
                            <br />
                            and streamline operations at Short Term Rentals.
                            <br />
                            Provide 24/7 conversational AI customer support, maintenance automation
                            and upselling.
                            <br />
                        </span>
                    </div>
                </div>
                <div className='wrapper-5 fade'>
                    <div className='box-b'>
                        <span className='text-21'>C Cubed Aerosapce</span>
                        <span className='text-22'>Data Engineering Intern</span>
                        <span className='text-23'>
                            Streamlined and optimized multiple databases to enhance efficiency
                            and facilitate seamless tracking of parts, classifications and
                            quantities.
                            <br />
                            Implemented automation through Power BI for data analysis and
                            supplier evaluation to enhance the accuracy and speed of dynamic
                            report generation.
                            <br />
                        </span>
                    </div>
                    <div className='pic-c' />
                </div>
                <div className='wrapper-6 fade'>
                    <div className='pic-d' />
                    <div className='box-c'>
                        <span className='text-24'>
                            University of Houston
                        </span>
                        <span className='text-25'>Desk Assistant</span>
                        <span className='text-26'>
                            Working as a Desk Assistant at CV1 ( UH on campus Housing). <br />
                            Provide assistance to residents with housing concerns and help
                            with lockout situations.
                        </span>
                    </div>
                    
                </div>
            </div>
            <div id='awards' className='wrapper-7 fade'>
                <span className='text-27'>Awards</span>
                <div className='wrapper-8 fade'>
                    <span className='text-28'>Best Overall App</span>
                    <span className='text-29'>UTSA Rowdy Hacks ‘24</span>
                    <span className='text-2a'>
                        Developed a real time ASL sign language translator using OpenCV and
                        Media Pipe Libraries and a custom trained Yolov8 model based on the
                        Random Forest Classifier.
                        <br />
                        <br />
                        Competed against 87 teams with 550+ participants.
                    </span>
                </div>
                <div className='box-d fade'>
                    <span className='text-2b'>
                        Best Campus Solution
                        <br />
                        (3rd Place)
                    </span>
                    <span className='text-2c'>UH Ideathon ‘24</span>
                    <span className='text-2d'>
                        Developed a gamified solution to provide redeemable points at campus
                        events to encourage student attendance.
                        <br />
                        <br />
                        Competed against the Top 6 selected out of 56 teams with 200+
                        members at the University of Houston.
                    </span>
                </div>
            </div>
            <div id="projects" className='section-7 fade'>
                <span className='text-2e'>Projects</span>
                <div className='wrapper-9 fade'>
                    <div className='section-8 fade' style={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/sunaypanda/NLP_Classifier', '_blank')}
                    >
                        <div className='img-8' />
                        <div className='wrapper-a'>
                            <span className='text-2f'>NLP Sentence Classification</span>
                            <span className='text-30'>
                                A model to classify the different types of sentences in a text
                                and their importance to enable faster skim through using TF-IDF
                                classifier and embedding.
                            </span>
                        </div>
                    </div>
                    <div className='group-9 fade' style={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/sunaypanda/Finger_Count_Model', '_blank')}>
                        <div className='img-9' />
                        <div className='box-e'>
                            <span className='text-31'>Finger Counting Model</span>
                            <span className='text-32'>
                                A real time computer vision model that employs background
                                seperation, hand segmentation and convex hull analysis to detect
                                the number of fingers raised.
                            </span>
                        </div>
                    </div>
                    
                    <div className='group-b fade' style={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/sunaypanda/Food_Classification_Model', '_blank')}>
                        <div className='img-a' />
                        <div className='box-f'>
                            <span className='text-35'>Food Image Classification</span>
                            <span className='text-36'>
                                An image classification model to classify various food images to
                                their corresponding labels using a CNN architecture.
                            </span>
                        </div>
                    </div>
                    <div className='box-10 fade' style={{ cursor: 'pointer' }} onClick={() => window.open('https://movie-search-sunay.netlify.app', '_blank')}>
                        <div className='pic-f' />
                        <div className='wrapper-c'>
                            <span className='text-37'>Movie Search Website</span>
                            <span className='text-38'>
                                A React Application built using JS, HTML and CSS, that pulls
                                search data and displays movie cards from a real time open movie
                                database.
                            </span>
                        </div>
                    </div>
                    <div className='group-a fade' style={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/sunaypanda/Portfolio_Website', '_blank')}>
                        <div className='pic-e' />
                        <div className='wrapper-b'>
                            <span className='text-33'>Portfolio Website</span>
                            <span className='text-34'>
                                A React Application written with JS, HTML and CSS, and designed
                                using Figma to create a portfolio displaying my skills, and
                                projects.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className='box-11 fade'>
                <span className='text-39'>Get in Touch</span>
                <div className='section-9 fade'>
                    <div className='img-b' style={{ cursor: 'pointer' }} onClick={() => window.open('mailto:sunaypanda12@gmail.com', '_blank')}/>
                    <span className='text-3a' style={{ cursor: 'pointer' }} onClick={() => window.open('mailto:sunaypanda12@gmail.com', '_blank')}>sunaypanda12@gmail.com</span>
                </div>
                <div className='section-a fade'>
                    <div className='img-c' style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/sunay-panda/', '_blank')}/>
                    <div className='img-d' style={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/sunaypanda', '_blank')}/>
                    <div className='pic-10' style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.instagram.com/sunaypanda01/', '_blank')}/>
                    </div>
            </div>
        </div>
    </div>
    );
}
>>>>>>> bf6f8522f9840aa59014be2f88c07c4d26c7d69c
