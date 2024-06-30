/*
    <div id="parent">
      <h1>I am h1 tag!</h1>
    </div>

*/

const parent = React.createElement("div",{id:"parent"},
    React.createElement("h1",{},"I am h1 tag!")
);

const root = ReactDOM.createRoot(document.getElementById("root"));


/*
    <div id="parent2">
      <h1>I am h1 tag!</h1>
      <h2>I am h2 tag!</h2>
    </div>

*/

const parent2 = React.createElement("div",{},[
    React.createElement("h1",{},"I am h1 tag!"),
    React.createElement("h2",{},"I am h2 tag!")
]);


// root.render(parent);
root.render(parent2);