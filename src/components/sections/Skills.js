import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    { category: "Languages", items: ["Python", "C++", "C", "MATLAB", "JavaScript", "SQL", "HTML/CSS"] },
    { category: "AI & CV", items: ["OpenCV", "TensorFlow", "MediaPipe", "YOLOv8", "Open3D", "PCL", "ROS2", "MoveIt", "Pandas", "NumPy"] },
    { category: "Web & Backend", items: ["ReactJS", "Node.js", "MongoDB", "PostgreSQL", "REST APIs", "Flask"] },
    { category: "Tools & Platforms", items: ["Git", "Azure", "Arduino", "Power BI", "Tableau", "Figma"] }
];

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ position: 'relative' }}>
            {/* Background Data Stream Effect */}
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-primary)', opacity: 0.3, writingMode: 'vertical-rl' }}>
                SYSTEM_DIAGNOSTICS // PARAMETERS_LOADED
            </div>

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ 
                        fontSize: '3rem', 
                        textAlign: 'center', 
                        marginBottom: '1rem', 
                        color: 'var(--color-text)' 
                    }}>
                        <span className="mono" style={{ color: 'var(--color-accent)', fontSize: '1.5rem', display: 'block', marginBottom: '10px' }}>{'// SYSTEM_MODULES'}</span>
                        Technical Arsenal
                    </h2>
                </motion.div>

                <div className="skills-grid">
                    {skillsData.map((group, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(135, 80, 65, 0.2)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ 
                                padding: '30px', 
                                position: 'relative', 
                                overflow: 'hidden',
                                border: '1px solid rgba(135, 80, 65, 0.1)'
                            }}
                        >
                            <div className="corner-bracket top-left"></div>
                            <div className="corner-bracket bottom-right"></div>
                            
                            {/* Tech Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '10px' }}>
                                <h3 className="mono" style={{ 
                                    fontSize: '1.1rem', 
                                    color: 'var(--color-primary)', 
                                    fontWeight: 'bold'
                                }}>
                                    {group.category.toUpperCase()}
                                </h3>
                                <div style={{ width: '10px', height: '10px', background: 'var(--color-accent)', borderRadius: '50%', boxShadow: '0 0 10px var(--color-accent)' }}></div>
                            </div>
                            
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {group.items.map((skill) => (
                                    <span key={skill} style={{
                                        background: 'rgba(255,255,255,0.4)',
                                        padding: '5px 12px',
                                        fontSize: '0.85rem',
                                        color: 'var(--color-text)',
                                        border: '1px solid rgba(135, 80, 65, 0.2)',
                                        fontFamily: 'var(--font-mono)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                }
            `}</style>
        </section>
    );
};

export default Skills;
