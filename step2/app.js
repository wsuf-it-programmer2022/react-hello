
const Dog = (props) => {
 return React.createElement("div", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.breed),
      React.createElement("h2", {}, props.color),
    ]);
}


// an example of a react component
const App = () => {
return React.createElement(
  "div",
  { id: "brand", className: "header" },
  [ 
    React.createElement("h1", {}, "These are my Dogs"),
    React.createElement(Dog, { name: "Alfie", breed: "Papillon", color: "black and white"}),
    React.createElement(Dog, { name: "Lucie", breed: "Papillon", color: "black and white"}),
  ]
);
};
const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
console.log("hello");