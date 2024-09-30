import React from "react";

const ChildComp = React.memo((props) => {
  console.log("Child component re-rendered");

  return (
    <div>
      <button onClick={props.handleIt}>{props.btnName}</button>
    </div>
  );
});

ChildComp.displayName = ChildComp;

export default ChildComp;
