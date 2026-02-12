import React, { useRef, useEffect } from 'react';

const CanvasBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 1.2 + 0.8; 
                this.color = `rgba(135, 80, 65, ${Math.random() * 0.15 + 0.06})`; // 60% of previous opacity
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Mouse interaction
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 250) { 
                    const angle = Math.atan2(dy, dx);
                    this.vx -= Math.cos(angle) * 0.05; 
                    this.vy -= Math.sin(angle) * 0.05;
                }

                // Limit max speed to prevent chaos
                const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                if (speed > 1.5) {
                    this.vx *= 0.95;
                    this.vy *= 0.95;
                }

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        // Initialize Particles
        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth / 5, 300); // High density
            for (let i = 0; i < particleCount; i++) {
                const p = new Particle();
                p.vx = (Math.random() - 0.5) * 0.35;
                p.vy = (Math.random() - 0.5) * 0.35;
                particles.push(p);
            }
        };

        initParticles();

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) { 
                        ctx.beginPath();
                        // Lighter connections (60% of previous)
                        ctx.strokeStyle = `rgba(135, 80, 65, ${0.2 - distance / 600})`; 
                        ctx.lineWidth = 0.4;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
                particles[i].update();
                particles[i].draw();
            }

            // Draw line to mouse
            particles.forEach(p => {
                 const dx = mouseRef.current.x - p.x;
                 const dy = mouseRef.current.y - p.y;
                 const dist = Math.sqrt(dx*dx + dy*dy);
                 if(dist < 200) {
                     ctx.beginPath();
                     ctx.strokeStyle = `rgba(209, 132, 15, ${0.25 - dist/600})`; // Lighter Amber
                     ctx.lineWidth = 0.5;
                     ctx.moveTo(p.x, p.y);
                     ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                     ctx.stroke();
                 }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none', width: '100%', height: '100%' }} />;
};

export default CanvasBackground;
