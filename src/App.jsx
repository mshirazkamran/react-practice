import { useState } from "react";
import "./css/App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const incrementValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log(`the value is: ${counter}`);
    }
  };

  const decrementValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(`the value is: ${counter}`);
    }
  };

  return (
    <>
      <h1>This is a counter app</h1>
      <h3>
        the value is:{" "}
        <span style={{ fontSize: "24px", fontWeight: 680, color: "#fff" }}>
          {counter}
        </span>{" "}
      </h3>
      <button className="btn" onClick={incrementValue} type="button">
        Increase value
      </button>
      <br />
      <button className="btn" onClick={decrementValue} type="button">
        Decrease Value
      </button>
    </>
  );
}

export default App;
