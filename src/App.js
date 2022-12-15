import React, { useState, useEffect } from "react";
import Home from "./Home";
import './App.css';
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

const App = () => {
  const [inputValue, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <Home handleChange={handleChange} inputValue={inputValue} />
    </div>
  )
}

export default App;