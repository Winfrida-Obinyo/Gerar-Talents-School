import React, { useEffect, useState } from 'react';
import './style.css'; // Import the CSS file for styling

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/Images/image7.jpg',
    '/Images/image2.jpg',
    '/Images/image1.jpg',
    '/Images/image4.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <div className="banner">
        <div
          className="image-slider"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`
          }}
        >
          <div className="overlay"></div>
          <div className="banner-content">
            <h1>Welcome to Gerar Talents School</h1>
            <p>Empowering students to thrive in a dynamic world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


