// const Dog = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.breed),
//     React.createElement("h2", {}, props.color),
//   ]);
// };

const Dog = (props) => {
  // inside JSX we can use { } to add javascript expressions.
  // javascript expression: can be anything that is valid on the right side of the = (equal sign)

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.breed}</h2>
      <h2>{props.color}</h2>
    </div>
  );
};

export default Dog;
