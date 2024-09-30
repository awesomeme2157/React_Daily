import "./App.css";
// import { useCallback, useState } from "react";
// import ChildComp from "./components/ChildComp";
import ExpensiveComp from "./components/ExpensiveComp";

function App() {
  // const [count, setCount] = useState(0);

  // const handleInc = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  return (
    <>
      <ExpensiveComp />

      {/* <div>
        <div>The count is: {count}</div>
        <br />
        <button onClick={handleInc}>Increment</button>
      </div>
      <br />
      <div>
        <ChildComp btnName="Click Me" handleIt={handleInc} />
      </div> */}
    </>
  );
}

export default App;
