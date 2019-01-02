import React from "react";
import ReactDOM from "react-dom";

import Input from "./components/Input";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Input />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
