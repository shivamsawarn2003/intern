import React, { useState, useEffect } from 'react';
import './About.css'; 

const About = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="about-container">
            <div className="left-section">
                <h1 className="about-heading">About Us,</h1>
            </div>
            <div className="right-section" style={{ backgroundPositionY: -scrollY / 2 }}>
                <div className="about-content">
                    <p>Introducing <strong>Skater Republic,</strong></p>
                    <p>the thrilling upcoming arcade game that puts you right in the heart of a dynamic skateboarding adventure! Explore expansive skateparks, bustling cityscapes, and renowned real-life locations for an immersive experience like no other. Featuring intuitive controls, a sophisticated trick system, and a compelling progression framework, players will find themselves immersed in a world where every achievement feels truly gratifying. Keep an eye out as we work diligently to bring this extraordinary gaming experience to life</p>
                </div>
            </div>
        </div>
    );
};

export default About;
