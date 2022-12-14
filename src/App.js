import React, { useState } from "react";
import './App.css';

const App = () => {
  const [heading, setHeading] = useState('Magnificent Monkeys');

  const handleClick = () => {
    setHeading('Radical Rhinos');
  }

  return (
    <div className="App">
      <ul className="animals">
        <li>Sharks</li>
        <li>Whales</li>
        <li>Octopus</li>
        <li>Dolphins</li>
        <li>Turtles</li>
      </ul>
    </div>
  );
}

export default App;
