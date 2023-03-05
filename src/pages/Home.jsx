import React, { useState, useEffect } from "react";
import { printFretboard } from "../utils/fretboard";
import "../App.css";

export const Home = () => {
  const [currentTab, setCurrentTab] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    while (true) {
      const array = printFretboard([
        0,
        0,
        2,
        4,
        0,
        2,
        4,
        7,
        7,
        7,
        6,
        4,
        2,
        0,
        "-",
        0,
        2,
        4,
        0,
        2,
        4,
        7,
        7,
        7,
        9,
        7,
        4,
        2,
      ]);
      if (!array.length) break;
      setCurrentTab(array);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <div className="my-component-container">
      <div className="tab-container">{currentTab}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a tab array"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="about-section">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Home;
