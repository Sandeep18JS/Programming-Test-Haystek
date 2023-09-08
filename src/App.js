import React, { useState, useEffect } from 'react';
import PersonDisplay from './components/PersonDisplay/index.js';
import NextButton from './components/NextButton/index.js';
import './App.css';

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [displayedPeople, setDisplayedPeople] = useState([]);
  const [startIndex, setStartIndex] = useState(0);


  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data));
  }, []);

  useEffect(() => {
    const endIndex = startIndex + 3;
    setDisplayedPeople(jsonData.slice(startIndex, endIndex));
  }, [startIndex, jsonData]);

  const nextPeople = () => {
    if (startIndex + 3 < jsonData.length) {
      setStartIndex(startIndex + 3);
    } else {
      alert('No more people!');
    }
  };



  return (
    <div className="App">
      <h1 className='h1'>PEOPLE DATA</h1>
      <NextButton onClick={nextPeople} />
      <div>
        {displayedPeople.map((person, index) => (
          <PersonDisplay key={index} person={person} count={startIndex + index + 1} />
        ))}
      </div>
      <p className='p'>CURRENTLY  {displayedPeople.length} PEOPLE SHOWING</p>

    </div>
  );
}

export default App;
