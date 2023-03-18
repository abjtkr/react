const heading1 = React.createElement(
  "h1",
  { id: "title1" },
  "Namaste World From React!"
);
const heading2 = React.createElement(
  "h2",
  { id: "title2" },
  "Namaste World From React!"
);

const container = React.createElement("div", { id: "containner" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(container);
heading.innerText = "hi";
