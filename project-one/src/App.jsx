import "./App.css";
import { useState, useEffect, createContext } from "react";
// import Card from "./components/Card";
// import Counter from "./components/Counter";
// import UserCard from "./components/UserCard";
import ChildA from "./components/ChildA";

// const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  // const [name, setName] = useState("");
  // const [Count, setCount] = useState(0);
  // const [Name, setName] = useState({ Name: "Raj" });
  const [theme, setTheme] = useState("light");

  // const handleClick = () => {
  //   setCount(Count + 1);
  // };

  // useEffect(() => {
  //   alert("Hello on every render");
  // });

  // useEffect(() => {
  //   alert("I run on 1st render only");
  // }, []);

  // useEffect(() => {
  //   alert("I run when count is updated");
  // }, [Count]);

  // useEffect(() => {
  //   alert("Count is Updated");

  //   return () => {
  //     alert("Count is unmounted from UI");
  //   };
  // }, [Count]);

  return (
    <>
      {/* <UserCard name="Raj1" age="20" />
      <UserCard name="Raj2" age="21" />
      <UserCard name="Raj3" age="22" /> */}
      {/* <Counter /> */}
      {/* <Card name="Raj">
        <h1>Hello there</h1>
        <p>Im doing great</p>
        <p>How are you?</p>
      </Card> */}
      {/* <Card title="card1" name={name} setName={setName} />
      <Card title="card2" name={name} setName={setName} /> */}
      {/* <p>The text inside app component is: {name}</p> */}

      {/* <button onClick={handleClick}>Click Me</button>
      <p>The count is: {Count} </p> */}

      {/* <UserContext.Provider value={Name}>
        <ChildA />
      </UserContext.Provider> */}

      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
// export { UserContext };
export { ThemeContext };
