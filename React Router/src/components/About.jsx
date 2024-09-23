import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div>About Page</div>
      <br />
      <button onClick={handleClick}>Move to Dashboard Page</button>
    </>
  );
};

export default About;
