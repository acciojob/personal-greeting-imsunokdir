import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const handleInput = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      {/* Do not remove the main div */}
      <label for="name">Enter your name: </label>
      <br></br>
      <input id="name" onInput={handleInput}></input>
      <div>{name}</div>
    </div>
  );
};

export default App;
