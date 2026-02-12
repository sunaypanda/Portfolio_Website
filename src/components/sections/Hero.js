import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    // Variants for stagger animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="home" className="section" style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            paddingTop: '80px',
            position: 'relative'
        }}>
            {/* Background Robot/Vision Elements (Abstract) */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1, opacity: 0.1 }}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-primary)" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <motion.div 
                className="container hero-content" 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ maxWidth: '1200px', width: '100%' }}
            >
                <div className="text-content" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {/* HUD Header effect */}
                    <motion.div variants={itemVariants} className="mono" style={{ 
                        color: 'var(--color-accent)', 
                        marginBottom: '1rem', 
                        fontSize: '1rem',
                        border: '1px solid var(--color-accent)',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <span style={{ width: '8px', height: '8px', background: 'var(--color-accent)', borderRadius: '50%', display: 'block', animation: 'pulse 2s infinite' }}></span>
                        SYSTEM ONLINE
                    </motion.div>

                    <motion.h1 variants={itemVariants} style={{ 
                        fontSize: 'clamp(3rem, 8vw, 6rem)', 
                        fontWeight: '800', 
                        color: 'var(--color-text)',
                        lineHeight: '1.1',
                        marginBottom: '10px'
                    }}>
                        Sunay Panda
                    </motion.h1>

                    <motion.div variants={itemVariants} style={{ height: '3rem', marginBottom: '2rem' }}>
                        <TypeAnimation
                            sequence={[
                                'Computer Engineering Senior',
                                2000,
                                'AI Startup Founder',
                                2000,
                                'Computer Vision Engineer',
                                2000,
                                'Machine Learning Specialist',
                                2000,
                                'Generative AI Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--color-primary)', fontWeight: '500', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </motion.div>

                    <motion.p variants={itemVariants} style={{ 
                        fontSize: '1.2rem', 
                        maxWidth: '600px', 
                        lineHeight: '1.6', 
                        color: 'var(--color-text-light)', 
                        marginBottom: '3rem' 
                    }}>
                        Passionate about exploring the intersection of <strong>Computer Vision</strong>, <strong>Machine Learning</strong>, and <strong>Generative AI</strong>. 
                        Building intelligent systems that perceive and interact with the world.
                    </motion.p>

                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px' }}>
                        <motion.a 
                            href="#contact" 
                            className="btn-primary" 
                            whileHover={{ 
                                scale: 1.05, 
                                boxShadow: '0 0 20px rgba(135, 80, 65, 0.6)',
                                backgroundColor: 'transparent',
                                color: 'var(--color-primary)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'var(--color-primary)',
                                color: 'white',
                                padding: '15px 30px',
                                borderRadius: '30px',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                border: '2px solid var(--color-primary)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            Initialize Protocol <span className="mono">-&gt;</span>
                        </motion.a>
                        
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <SocialIcon href="https://github.com/sunaypanda" icon={<FaGithub />} />
                            <SocialIcon href="https://www.linkedin.com/in/sunay-panda" icon={<FaLinkedin />} />
                            <SocialIcon href="mailto:sunaypanda12@gmail.com" icon={<FaEnvelope />} />
                        </div>
                    </motion.div>
                </div>

                {/* Floating Graphic Element - Profile Picture */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ 
                        position: 'relative',
                        zIndex: 1,
                        marginTop: '2rem',
                        marginBottom: '2rem'
                    }}
                    className="profile-container"
                >
                    <div style={{
                        width: '380px',
                        height: '380px',
                        borderRadius: '50%',
                        position: 'relative',
                        padding: '10px',
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(135,80,65,0.3)',
                        boxShadow: '0 0 50px rgba(135,80,65,0.15)'
                    }}>
                        {/* Rotating Data Rings - Thinner and Slower */}
                        <div className="ring" style={{ width: '100%', height: '100%', border: '1px solid rgba(135, 80, 65, 0.2)', borderRadius: '50%', position: 'absolute', top: 0, left: 0, animation: 'spin-slow 40s linear infinite', opacity: 0.4, borderLeft: 'transparent', borderRight: 'transparent' }}></div>
                        <div className="ring" style={{ width: '108%', height: '108%', border: '1px dashed rgba(209, 132, 15, 0.3)', borderRadius: '50%', position: 'absolute', top: '-4%', left: '-4%', animation: 'spin-reverse 50s linear infinite', opacity: 0.3 }}></div>
                        
                        {/* HUD Floating Badge - Connected via line */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            style={{
                                position: 'absolute',
                                top: '20%',
                                right: '-120px', // Floating to the right
                                width: '100px',
                                zIndex: 10
                            }}
                            className="desktop-only"
                        >
                            {/* Connecting Line */}
                            <div style={{ position: 'absolute', left: '-20px', top: '10px', width: '20px', height: '1px', background: 'var(--color-accent)', opacity: 0.6 }}></div>
                            
                            {/* The Badge */}
                            <div style={{
                                border: '1px solid var(--color-accent)',
                                background: 'rgba(18, 16, 16, 0.8)',
                                padding: '8px',
                                fontSize: '0.7rem',
                                color: 'var(--color-accent)',
                                fontFamily: 'var(--font-mono)',
                                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                                backdropFilter: 'blur(4px)'
                            }}>
                                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>TARGET LOCKED</div>
                                <div style={{ fontSize: '0.6rem', opacity: 0.8 }}>ACCURACY: 99.9%</div>
                                <div style={{ width: '100%', height: '2px', background: 'var(--color-primary)', marginTop: '4px', animation: 'load-bar 2s infinite ease-in-out' }}></div>
                            </div>
                        </motion.div>

                        {/* Subtle Face Detection Box - Visible mainly on hover/active */}
                        <div className="face-scanner" style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '220px',
                            height: '220px',
                            zIndex: 5,
                            pointerEvents: 'none',
                            opacity: 0.4
                        }}>
                             <div className="corner" style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderTop: '1px solid var(--color-text)', borderLeft: '1px solid var(--color-text)' }}></div>
                             <div className="corner" style={{ position: 'absolute', top: 0, right: 0, width: '10px', height: '10px', borderTop: '1px solid var(--color-text)', borderRight: '1px solid var(--color-text)' }}></div>
                             <div className="corner" style={{ position: 'absolute', bottom: 0, left: 0, width: '10px', height: '10px', borderBottom: '1px solid var(--color-text)', borderLeft: '1px solid var(--color-text)' }}></div>
                             <div className="corner" style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderBottom: '1px solid var(--color-text)', borderRight: '1px solid var(--color-text)' }}></div>
                        </div>

                         {/* Subtle Scanning Overlay reflection */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            background: 'linear-gradient(180deg, transparent 40%, rgba(209, 132, 15, 0.1) 50%, transparent 60%)',
                            backgroundSize: '100% 200%',
                            animation: 'scan-subtle 4s linear infinite',
                            zIndex: 6,
                            pointerEvents: 'none'
                        }}></div>

                        {/* The Image */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            position: 'relative',
                            zIndex: 2,
                            border: '2px solid rgba(253, 237, 225, 0.1)',
                            filter: 'grayscale(20%) contrast(1.1)' // Slight tech filter
                        }}>
                            <img 
                                src={require('../../Red Labs Headshots 23-modified (1).png')} 
                                alt="Sunay Panda" 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <style>{`
                .hero-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }
                
                @media (min-width: 992px) {
                    .hero-content {
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        text-align: left;
                    }
                    .text-content { // Target the text wrapper
                        max-width: 50% !important;
                        align-items: flex-start !important;
                    }
                    .profile-container {
                        margin-top: 0 !important;
                    }
                }

                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes load-bar {
                     0%, 100% { width: 10%; transform: translateX(0); }
                     50% { width: 80%; transform: translateX(10%); }
                }
                @keyframes scan-subtle {
                    0% { background-position: 0% 0%; }
                    100% { background-position: 0% 200%; }
                }
                @keyframes scan-vertical {
                    0% { top: 0%; opacity: 0; }
                    20% { opacity: 0.8; }
                    80% { opacity: 0.8; }
                    100% { top: 100%; opacity: 0; }
                }
                @keyframes spin {
                    100% { transform: rotate(360deg); }
                }
                @keyframes spin-slow {
                    100% { transform: rotate(360deg); }
                }
                @keyframes spin-reverse {
                    100% { transform: rotate(-360deg); }
                }
                @keyframes pulse {
                    0% { opacity: 1; box-shadow: 0 0 0 0 rgba(209, 132, 15, 0.7); }
                    70% { opacity: 0.5; box-shadow: 0 0 0 10px rgba(209, 132, 15, 0); }
                    100% { opacity: 0; box-shadow: 0 0 0 0 rgba(209, 132, 15, 0); }
                }
                .btn-primary:hover {
                    background: transparent;
                    color: var(--color-primary);
                }
            `}</style>
        </section>
    );
};

const SocialIcon = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
        fontSize: '1.8rem',
        color: 'var(--color-text)',
        transition: 'color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}
    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text)'}
    >
        {icon}
    </a>
);

export default Hero;
