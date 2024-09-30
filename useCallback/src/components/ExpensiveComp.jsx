import React, { useCallback } from "react";
import { useState } from "react";

const ExpensiveComp = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleInc = () => {
    setCount((count) => count + 1);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const ExpensiveCalc = useCallback(() => {
    console.log("Running expensive calc...");
    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={handleText}
          placeholder="Type something"
        />
      </div>
      <br />
      <div>Expensive calc count is: {ExpensiveCalc()}</div>
      <br />
      <button onClick={handleInc}>Increment</button>
      <br />
      <div>The count is: {count}</div>
    </>
  );
};

export default ExpensiveComp;

// useMemo if you want to cache the result

// import React, { useCallback, useMemo } from "react";
// import { useState } from "react";

// const ExpensiveComp = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const handleInc = () => {
//     setCount((count) => count + 1);
//   };

//   const handleText = (e) => {
//     setText(e.target.value);
//   };

//   // Memoize the result of the expensive calculation based on `count`
//   const expensiveCalcResult = useMemo(() => {
//     console.log("Running expensive calc...");
//     let result = 0;

//     for (let i = 0; i < 100000000; i++) {
//       result += i;
//     }
//     return result;
//   }, [count]); // This will only run when `count` changes

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={text}
//           onChange={handleText}
//           placeholder="Type something"
//         />
//       </div>
//       <br />
//       <div>Expensive calc result is: {expensiveCalcResult}</div>
//       <br />
//       <button onClick={handleInc}>Increment</button>
//       <br />
//       <div>The count is: {count}</div>
//     </>
//   );
// };

// export default ExpensiveComp;
