// import React, { useContext } from "react";
// // import { UserContext } from "../App";
// import { ThemeContext } from "../App";

// const ChildC = () => {
//   //   const user = useContext(UserContext);
//   //   console.log(user);

//   const { theme, setTheme } = useContext(ThemeContext);

//   const handleClick = () => {
//     if (theme === "light") setTheme("dark");
//     setTheme("light");
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Change Theme</button>
//     </div>
//   );
// };

// export default ChildC;

import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div style={{ textAlign: "center", alignItems: "center" }}>
      <h1 style={{ color: "white" }}>Current Theme: {theme}</h1>
      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
};

export default ChildC;
