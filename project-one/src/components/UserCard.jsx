import React from "react";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-container">
      <p>Hello My name is {props.name}</p>
      <p>Im {props.age}</p>
    </div>
  );
};

export default UserCard;
