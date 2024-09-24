import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  const expensiveTask = (num) => {
    console.log("Inside expensive task");

    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  // let doubleValue = expensiveTask(input);
  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <>
      <button onClick={handleInc}>Increment</button>
      <p>Count is: {count}</p>

      <input
        type="number"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <p>Double is: {doubleValue}</p>
    </>
  );
}

export default App;
