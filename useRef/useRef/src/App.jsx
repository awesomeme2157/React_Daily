import { useState, useEffect } from "react";
import "./App.css";
import { useRef } from "react";
import StopWatch from "./components/StopWatch";

function App() {
  // const [count, setCount] = useState(0);
  // // let val = 1;
  // let val = useRef(0);
  // let btnRef = useRef();

  // const handleInc = () => {
  //   // val = val + 1;
  //   val.current = val.current + 1;
  //   console.log(val.current);

  //   setCount(count + 1);
  // };

  // const handleColor = () => {
  //   btnRef.current.style.backgroundColor = "red";
  // };

  // useEffect(() => {
  //   console.log("Re rendered the page");
  // });

  return (
    <>
      {/* <button ref={btnRef} onClick={handleInc}>Increament</button>
      <br />
      <button onClick={handleColor}>Change the color of 1st button</button>
      <h3>Count is: {count}</h3> */}
      <StopWatch />
    </>
  );
}

export default App;
