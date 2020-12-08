import React from "react";
import ReactDOM from "react-dom";
import * as pi from "./math";

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublepi()}</li>
    <li>{pi.triplepi()}</li>
  </ul>,
  document.getElementById("root")
);
