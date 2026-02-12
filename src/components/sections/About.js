import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: '#fffcf9' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '800px' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-text)' }}>About Me</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                        I am a Senior at the <strong>University of Houston</strong>, majoring in Computer Engineering.
                        Beyond the classroom, I am an <strong>AI Startup Founder</strong> and a developer deeply fascinated by the intelligence of machines.
                    </p>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                        My journey bridges software and hardware—from building custom <strong>vision pipelines for humanoid robots</strong> to optimizing databases for aerospace companies.
                        I thrive on solving complex problems, whether it's through code, circuitry, or data.
                    </p>
                    
                    <div style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '2rem', textAlign: 'left' }}>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>⚡ Declassified Intel</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                            <li style={{ marginBottom: '5px' }}>🎬 <strong>Favorite Movie Genre:</strong> Action/Suspense Thriller</li>
                            <li>⚽ <strong>Soccer Position:</strong> Left Wing</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
