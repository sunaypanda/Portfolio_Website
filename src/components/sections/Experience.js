import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Founder",
            company: "StayzyAI",
            period: "Aug 2024 – Present",
            description: [
                "Built and deployed an AI-driven guest communication and operations platform integrating automation, analytics, and workflow tooling for short-term rentals.",
                // Add more details if user provides them later, currently kept concise to resume
            ]
        },
        {
            role: "Engineering Intern",
            company: "C-Cubed Aerospace",
            period: "Jan 2024 – Feb 2024",
            description: [
                "Optimized 10+ Excel databases with up to 50,000 rows each, improving data retrieval efficiency by 30%.",
                "Automated reporting with Power BI and Power Automate, cutting report generation time by 40%.",
                "Designed dynamic dashboards in Power BI, providing real-time insights and interactive visuals."
            ]
        },
        {
            role: "Desk Assistant",
            company: "University of Houston - Student Housing",
            period: "Jan 2023 - Present",
            description: [
                "Manage student data, check ins-outs for 1000+ students living on campus.",
                "Aid residents with housing concerns and facilitate interactions with Residential Coordinators."
            ]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span className="mono" style={{ color: 'var(--color-accent)', display: 'block', marginBottom: '0.5rem' }}>&gt; EXECUTE PROTOCOL: CAREER_PATH</span>
                    <h2 style={{ fontSize: '3rem', color: 'var(--color-text)' }}>System Log</h2>
                </motion.div>

                <div className="timeline" style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', borderLeft: '1px dashed var(--color-primary)', paddingLeft: '20px' }}>
                    {/* Removed central line, using border-left for terminal tree look */}

                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{ 
                                marginBottom: '40px',
                                position: 'relative'
                            }}
                        >
                            {/* Node Connector */}
                            <div style={{
                                position: 'absolute',
                                left: '-26px',
                                top: '25px',
                                width: '12px',
                                height: '12px',
                                background: 'var(--color-bg)',
                                border: '2px solid var(--color-accent)',
                                zIndex: 1
                            }}></div>
                            
                            {/* Horizontal line to card */}
                            <div style={{ position: 'absolute', left: '-20px', top: '30px', width: '20px', height: '1px', background: 'var(--color-primary)', opacity: 0.5 }}></div>

                            <div className="glass-panel" style={{ 
                                padding: '25px',
                                background: 'rgba(255, 255, 255, 0.5)',
                                borderLeft: '3px solid var(--color-primary)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '15px', alignItems: 'center' }}>
                                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>{exp.role.toUpperCase()}</h3>
                                    <span className="mono" style={{ background: 'var(--color-text)', color: 'white', padding: '2px 8px', fontSize: '0.8rem' }}>{exp.period}</span>
                                </div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '15px', fontWeight: 'bold', color: 'var(--color-text)' }}>@ {exp.company}</h4>
                                <ul style={{ listStyle: 'none' }}>
                                    {exp.description.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '8px', position: 'relative', paddingLeft: '20px', color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>&gt;</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
