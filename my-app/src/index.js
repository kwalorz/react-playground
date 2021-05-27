import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

let lName = "Walorz";
let loggedIn = true;
let width = 400;
let height = 500;
let styles = {
  box: {
    background: "red",
    color: "white",
    textAlign: "center",
    width: `${width}px`,
    height: `${height}px`,
  },
};

ReactDOM.render(<App />, document.getElementById("root"));
