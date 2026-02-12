import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    // Primary cursor (immediate)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    // Secondary cursor (smooth spring)
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.hover-trigger')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Primary Dot - Instant Follow */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    mixBlendMode: 'difference'
                }}
            />

            {/* Secondary Ring - Smooth Follow */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: '24px', // Reduced from 40px
                    height: '24px', // Reduced from 40px
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 1.5 : 1, // Scale UP on hover instead of down, for emphasis
                        rotate: isHovering ? 135 : 45,
                        borderColor: isHovering ? 'var(--color-primary)' : 'var(--color-accent)',
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '1px solid var(--color-accent)',
                        borderRadius: '2px', 
                    }}
                />
            </motion.div>
        </>
    );
};

export default CustomCursor;
