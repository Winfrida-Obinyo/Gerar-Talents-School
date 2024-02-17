import React from 'react';
import './style.css';

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="event">
        <h3>School Open House</h3>
        <p>Date: February 25, 2024</p>
        <p>Location: Main Hall</p>
        <p>Description: Join us for an open house event where prospective students and their families can tour our facilities, meet our teachers, and learn about our programs.</p>
      </div>
      <div className="event">
        <h3>Science Fair</h3>
        <p>Date: March 10, 2024</p>
        <p>Location: Gymnasium</p>
        <p>Description: Get ready for an exciting science fair showcasing innovative projects and experiments from our students. Come and explore the wonders of science!</p>
      </div>
      <div className="event">
        <h3>Sports Day</h3>
        <p>Date: March 20, 2024</p>
        <p>Location: Outdoor Field</p>
        <p>Description: It's time to celebrate sportsmanship and teamwork! Join us for a fun-filled sports day with various athletic competitions and games for all ages.</p>
      </div>
      <div className="event">
        <h3>Art Exhibition</h3>
        <p>Date: April 5, 2024</p>
        <p>Location: Art Gallery</p>
        <p>Description: Discover the creativity and talent of our students at our annual art exhibition. Explore a diverse range of artworks, from paintings to sculptures.</p>
      </div>
      <div className="event">
        <h3>Music Recital</h3>
        <p>Date: April 15, 2024</p>
        <p>Location: Auditorium</p>
        <p>Description: Join us for an enchanting evening of music as our students showcase their musical talents through solo performances and ensemble pieces.</p>
      </div>
      <div className="event">
        <h3>Career Day</h3>
        <p>Date: April 30, 2024</p>
        <p>Location: Conference Rooms</p>
        <p>Description: Explore various career pathways and gain valuable insights from professionals in different industries. Career Day is an excellent opportunity for students to envision their future careers.</p>
      </div>
    </div>
  );
};

export default UpcomingEvents;
