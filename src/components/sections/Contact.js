import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="glass-panel"
                    style={{
                        padding: '60px',
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div className="scan-line"></div>
                    
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Get In Touch</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--color-text-light)' }}>
                        Whether you want to discuss robotics, AI, or potential collaborations, my inbox is always open.
                    </p>

                    <a href="mailto:sunaypanda12@gmail.com" className="btn-primary" style={{
                        background: 'var(--color-primary)',
                        color: 'white',
                        padding: '18px 40px',
                        borderRadius: '40px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '40px',
                        boxShadow: '0 10px 20px rgba(135, 80, 65, 0.3)',
                        transition: 'transform 0.3s ease'
                    }}>
                        <FaPaperPlane /> Say Hello
                    </a>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                        <SocialLink href="https://www.linkedin.com/in/sunay-panda/" icon={<FaLinkedin />} label="LinkedIn" />
                        <SocialLink href="https://github.com/sunaypanda" icon={<FaGithub />} label="GitHub" />
                        <SocialLink href="mailto:sunaypanda12@gmail.com" icon={<FaEnvelope />} label="Email" />
                    </div>
                </motion.div>
                
                <footer style={{ textAlign: 'center', marginTop: '60px', color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                    <p className="mono">Designed & Built by Sunay Panda. System Status: Operational.</p>
                </footer>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a href={href} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        color: 'var(--color-text)',
        fontSize: '1.5rem',
        transition: 'color 0.3s'
    }}
    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text)'}
    >
        {icon}
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{label}</span>
    </a>
)

export default Contact;
