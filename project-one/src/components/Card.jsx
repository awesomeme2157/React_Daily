import React from "react";

const Card = (props) => {
  const handleChange = (e) => {
    props.setName(e.target.value);
  };

  return (
    <>
      {/* <div>
        <h1>My name is {props.name}</h1>
        {props.children}
      </div> */}

      <div className="container">
        <input type="text" onChange={handleChange}></input>
        <p>
          The text inside {props.title} component is: {props.name}
        </p>
      </div>
    </>
  );
};

export default Card;
