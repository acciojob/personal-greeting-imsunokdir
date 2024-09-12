import React, { useState } from "react";
import "./../styles/App.css";
import DisplayName from "./DisplayName";

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
      <DisplayName name={name} />
    </div>
  );
};

export default App;
