import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div>Dashboard Page</div>
      <br />
      <button onClick={handleClick}>Move to Home page</button>
      <Outlet />
    </>
  );
};

export default Dashboard;
