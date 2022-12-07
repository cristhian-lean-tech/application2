import React, { useState, useEffect } from "react";

function InputFunction() {
  const [text, setText] = useState("none");
  const [disable, setDisable] = useState(false);
  console.log("**");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setDisable((prev) => !prev);
  };

  // Cuando se renderiza
  // Despues algo se actualiza
  // muere
  useEffect(() => {
    // console.log("**_**");
    return () => {
      // console.log("Chao me fui");
    };
  }, [text]);

  return (
    <div>
      <input id="custom-input" disabled={disable} onChange={handleChange} />
      <button id="custom-button" onClick={handleClick}>
        {disable ? "Enable" : "Disable"}
      </button>
      <p>Text: {text}</p>
    </div>
  );
}

export default InputFunction;
