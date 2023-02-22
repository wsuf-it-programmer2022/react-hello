import React from "react";
import { createRoot } from "react-dom/client";
import Dog from "./Dog";

// an example of a react component
// const App = () => {
//   return React.createElement("div", { id: "brand", className: "header" }, [
//     React.createElement("h1", {}, "These are my Dogs"),
//     React.createElement(Dog, {
//       name: "Alfie",
//       breed: "Papillon",
//       color: "black and white",
//     }),
//     React.createElement(Dog, {
//       name: "Lucie",
//       breed: "Papillon",
//       color: "black and white",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1 id="brand">These are my dogs</h1>
      <div className="spinner" />
      <Dog name="Alfie" breed="Papillon" color="black and white" />
      <Dog name="Lucie" breed="Papillon" color="black and white" />
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);
console.log("hello");
