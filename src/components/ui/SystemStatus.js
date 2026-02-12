import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SystemStatus = () => {
    const [time, setTime] = useState(new Date());
    const [stats, setStats] = useState({ gpu: 92, loss: 0.145, epoch: 1 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
            setStats(prev => ({
                gpu: Math.floor(Math.random() * 15) + 85, // High GPU usage for ML
                loss: Math.max(0.001, (prev.loss * 0.99) + (Math.random() * 0.01 - 0.005)).toFixed(4), // Decreasing loss
                epoch: prev.epoch < 1000 ? prev.epoch + 1 : 1
            }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            style={{
                position: 'fixed',
                bottom: '20px',
                left: '20px',
                zIndex: 50,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                pointerEvents: 'none',
                opacity: 0.7
            }}
            className="desktop-only"
        >
            <div style={{ display: 'flex', gap: '15px' }}>
                <span>SYS_TIME: {time.toLocaleTimeString()}</span>
                <span>MODEL: RESNET-50</span>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    GPU: 
                    <div style={{ width: '50px', height: '4px', background: 'rgba(135, 80, 65, 0.2)' }}>
                        <div style={{ width: `${stats.gpu}%`, height: '100%', background: 'var(--color-accent)' }}></div>
                    </div>
                    {stats.gpu}%
                </span>
                <span>LOSS: {stats.loss}</span>
                <span>EPOCH: {stats.epoch}</span>
            </div>
        </motion.div>
    );
};

export default SystemStatus;
