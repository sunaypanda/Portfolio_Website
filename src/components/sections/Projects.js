import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
    {
        title: "Humanoid Robot Vision System",
        desc: "Built a 3D perception pipeline using Intel RealSense & LiDAR. Implemented real-time point-cloud processing with Open3D & ROS2.",
        tags: ["ROS2", "OpenCV", "PCL", "Python"],
        link: "#", // Add link if available
        github: "#"
    },
    {
        title: "Sign Language Interpreter",
        desc: "Real-time ASL translation system using YOLOv8 & MediaPipe. Hackathon winner: Best Overall App.",
        tags: ["YOLOv8", "Computer Vision", "React", "Flask"],
        link: "#",
        github: "#"
    },
    {
        title: "NLP Sentence Classifier",
        desc: "Classifies sentence types in research abstracts using TF-Hub embedding & Conv1D CNN architecture.",
        tags: ["TensorFlow", "NLP", "Python"],
        link: "#",
        github: "https://github.com/sunaypanda/NLP_Classifier"
    },
    {
        title: "CoogQuest",
        desc: "Gamified campus event solution with leaderboard and social features. Ideathon 3rd Place.",
        tags: ["React", "Gamification", "UI/UX"],
        link: "#",
        github: "#"
    },
    {
        title: "Food Image Classifier",
        desc: "Image classification model for food items using CNN trained on Food 101 dataset.",
        tags: ["CNN", "Deep Learning", "TensorFlow"],
        link: "#",
        github: "https://github.com/sunaypanda/Food_Classification_Model"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="mono" style={{ color: 'var(--color-accent)', letterSpacing: '2px' }}>[ CLASSIFICATION: PUBLIC ]</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Mission Repository</h2>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-panel hover-trigger"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ 
                                y: -10, 
                                scale: 1.02,
                                rotateX: 5,
                                rotateY: 5,
                                boxShadow: '0 20px 40px rgba(135, 80, 65, 0.2)'
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            style={{ 
                                padding: '30px', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'space-between',
                                position: 'relative',
                                minHeight: '300px',
                                transformStyle: 'preserve-3d',
                                perspective: '1000px'
                            }}
                        >
                            {/* Computer Vision / YOLO Bounding Box Effect */}
                            <div className="corner-bracket top-left"></div>
                            <div className="corner-bracket top-right"></div>
                            <div className="corner-bracket bottom-left"></div>
                            <div className="corner-bracket bottom-right"></div>
                            
                            <div style={{ position: 'absolute', top: '-12px', left: '20px', background: 'var(--color-accent)', padding: '2px 8px', fontSize: '0.8rem', color: 'white', opacity: 0, transition: 'opacity 0.3s' }} className="confidence-score">
                                CONFIDENCE: 98%
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--color-primary)' }}>{project.title}</h3>
                                <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6', marginBottom: '20px' }}>
                                    {project.desc}
                                </p>
                            </div>

                            <div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>#{tag}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    {project.github !== "#" && (
                                        <a href={project.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {project.link !== "#" && (
                                        <a href={project.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
                                            <FaLink /> Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <style>{`
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 40px;
                }
                .hover-trigger:hover .confidence-score {
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    );
};

export default Projects;
