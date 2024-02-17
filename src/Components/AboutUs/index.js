// AboutUsPage.js

import React, { useState, useEffect } from 'react';
import './style.css';
import { FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";

const AboutUsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [buttonTransparent, setButtonTransparent] = useState(false); // State for button transparency
  const images = [
    '/Images/image5.jpg',
    '/Images/image6.jpg',
    '/Images/image7.jpg',
    '/Images/image4.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    setButtonTransparent(!buttonTransparent); // Toggle button transparency
  };

  return (
    <div className="about-us-page">
      <h1>What We Do</h1>
      <div className="icons-container">
        <div className="icon">
          <FaChalkboardTeacher />
          <p>Teach</p>
        </div>
        <div className="icon">
          <SiFuturelearn />
          <p>Learn</p>
        </div>
        <div className="icon">
          <FaGraduationCap />
          <p>Success</p>
        </div>
      </div>
      <div className='allcontent'>
        <div className="images">
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </div>
        <div className="text">
          <p>
            Celebrating diversity and fostering excellence, Gerar Talents School is a vibrant educational community dedicated to igniting a passion for learning and empowering students to realize their full potential. With a commitment to academic rigor, character development, and innovative teaching methodologies, we cultivate a culture of inquiry, creativity, and collaboration. Through personalized instruction, experiential learning opportunities, and a supportive environment, we inspire students to become lifelong learners, critical thinkers, and compassionate global citizens. At Gerar Talents School, we believe in nurturing the whole child, equipping them with the skills, knowledge, and values they need to thrive in a rapidly changing world.
          </p>

        </div>
        
      </div>
      <button
            className={buttonTransparent ? "transparent-button" : ""}
            onClick={handleButtonClick}
          >
            LEARN ABOUT ADMISSION BELOW
          </button>
    </div>
  );
};

export default AboutUsPage;





