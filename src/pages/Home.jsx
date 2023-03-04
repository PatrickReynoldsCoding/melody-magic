import React, { useState } from "react";
import { printFretboard } from "../utils/fretboard";
import "../App.css";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   printFretboard(inputValue);
  //   setInputValue("");
  // };

  return (
    <div className="my-component-container">
      hello
      {/* <div className="tab-container"></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter a value"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="about-section">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div> */}
    </div>
  );
};

export default Home;
