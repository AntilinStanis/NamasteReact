// const heading = React.createElement("h1",{id:"heading"},"Hello World from React !");

/**
 * <div id ="parent">
 * <div id="child">
 * <h1>Hello from h1 tag </h1>
 * </div>
 * </div>
 *
 *
 */

const body = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello from h1 child1 tag"),
    React.createElement("h2", {}, "Hello from h2 child1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from h1 child2 tag"),
    React.createElement("h2", {}, "Hello from h2  child2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(body);
root.render(body);
