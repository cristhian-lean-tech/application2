import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// FLUX

function App() {
  console.log("******");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // count 0
    setCount((count) => count + 1); // su valor en el proximo render es 1
    nose();
  };

  const nose = () => {
    // count 0
    console.log("Valor", count); // ???
  };

  console.log("count: ", count);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => handleClick()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
