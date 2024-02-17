import React from 'react';
import './style.css';

const Extracurricular = () => {
  return (
    <div className="extracurricular-container">
      <h2>Extra Curricular Activities</h2>
      <div className="extracurricular">
        <div className="extracurricular-item">
          <img src="/Images/cbc.jpg" alt="Competence Based Curriculum" />
          <p>Competence Based Curriculum</p>
        </div>
        <div className="extracurricular-item">
          <img src="/Images/clubs.jpg" alt="Clubs and Membership" />
          <p>Clubs and Membership</p>
        </div>
        <div className="extracurricular-item">
          <img src="/Images/Trips.jpg" alt="Academic Trips" />
          <p>Academic Trips</p>
        </div>
        <div className="extracurricular-item">
          <img src="/Images/computer classes.jpg" alt="Computer Classes" />
          <p>Computer Classes</p>
        </div>
        <div className="extracurricular-item">
          <img src="/Images/football.jpg" alt="Football" />
          <p>Outdoor sports & games</p>
        </div>
        <div className="extracurricular-item">
          <img src="/Images/chase.jpg" alt="Chase" />
          <p>Indoor games</p>
        </div>
      </div>
    </div>
  );
};

export default Extracurricular;



