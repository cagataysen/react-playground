// const h1 = document.createElement("h1");
// h1.textContent = "Hello world";
// h1.className = "header";
// console.log(h1);

// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);
// ReactDOM.render(element, document.getElementById("root"));

// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// );

// console.log(page);

// ReactDOM.render(page, document.getElementById("root"));

const navbar = (
  <div>
    <h1>Idea Spark</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
);

ReactDOM.render(navbar, document.getElementById("root"));
