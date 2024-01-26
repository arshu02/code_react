import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function Myapp() {
  return (
    <div>
      <h1>just checking !</h1>
    </div>
  );
}
const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit google
  </a>
);
const reactelement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
);
ReactDOM.createRoot(document.getElementById("root")).render(reactelement);
