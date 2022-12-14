import React, { useState } from "react";
import './App.css';

const App = () => {
  const [heading, setHeading] = useState('Magnificent Monkeys');

  const handleClick = () => {
    setHeading('Radical Rhinos');
  }

  return (
    <div className="App">
      <button type="button" onClick={handleClick}>Click Me</button>
      <h1>{heading}</h1>
    </div>
  );
}

export default App;
