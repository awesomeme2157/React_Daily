import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [colour, setColour] = useState("#000000");

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleColour = () => {
    setColour(generateRandom());
  };

  const generateRandom = () => {
    const letters = "0123456789ABCDEF";
    let colour = "#";
    for (let i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
  };

  return (
    <div
      className="counter-container"
      style={{ backgroundColor: colour }}
      onClick={handleColour}
    >
      <button onClick={handleCount}>Click Me</button>
      <p style={{ color: "white" }}>You have clicked {count} times</p>{" "}
    </div>
  );
};

export default Counter;
