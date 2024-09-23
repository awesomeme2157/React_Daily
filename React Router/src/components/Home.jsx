import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div>Home Page</div>
      <br />
      <button onClick={handleClick}>Move to About Page</button>
    </>
  );
};

export default Home;
