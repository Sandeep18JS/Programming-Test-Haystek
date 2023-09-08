import React from 'react';
import './index.css'

const PersonDisplay = ({ person, count }) => {
  return (
    <div className="person-container">
      {person ? (
        <div className="content">
          <div className='count'><h1>{count}</h1></div>
          <div className="info">
            <p className='name'>Name: {person.name}</p>
            <p className='location'>Location: {person.location}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PersonDisplay;

