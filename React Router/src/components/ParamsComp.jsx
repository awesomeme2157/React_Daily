// import React from "react";
// import { useParams } from "react-router-dom";

// const ParamsComp = () => {
//   const { id } = useParams();

//   return (
//     <div>
//       <h1>Student Details</h1>
//       <p>Student ID: {id}</p>
//     </div>
//   );
// };

// export default ParamsComp;

import React from "react";
import { useParams } from "react-router-dom";

const ParamsComp = () => {
  const { id } = useParams();

  console.log("Student ID:", id); // Debug log

  return (
    <div>
      <h1>Student Details</h1>
      <p>Student ID: {id}</p>
    </div>
  );
};

export default ParamsComp;
