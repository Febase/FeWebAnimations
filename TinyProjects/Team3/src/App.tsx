import React, { useState } from "react";
import "./App.css";
import Spin from "./components/Spin";

function App() {
  const [word, setWord] = useState<string>("");
  const [type, setType] = useState<string>("wonjong");
  return (
    <div className="app">
      <p>word animation</p>
      <select
        name="type"
        id="type"
        className="dropdown"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="wonjong">원종</option>
        <option value="deokhee">덕희</option>
        <option value="jaewook">재욱</option>
        <option value="junseong">준성</option>
      </select>
      <input
        className="text-input"
        type="text"
        onChange={(e) => setWord(e.target.value)}
      />
      <Spin />
      <p className={type}>{word}</p>
    </div>
  );
}

export default App;
