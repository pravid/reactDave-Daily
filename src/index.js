import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function Hi(props) {
  const name = "Tri";
  return (
    <div>
      <header />
      Hello, <b>{name}!</b> Hello, <b>{props.name}!</b>
      <br />
      {props.name} works at {props.comp} from {props.yearc - props.years} years.
      <h1 className="custh1">Info</h1>
      <div>
        <ol>
          <li>Set1 </li>
          <li>Set2 </li>
          <li>Set3 </li>
        </ol>
        <ul>
          <li>fox 1 </li>
          <li>fox 2 </li>
          <li>fox 3 </li>
        </ul>
      </div>
      <span>Show Math: 5+6 = {5 + 6}</span>
    </div>
  );
}

function TestES61({ name }) {
  return (
    <div>
      <br />
      <span>
        <b>Test ES6 functions: {name}</b>
      </span>
      <br />
      <span>
        ES6's destructuring syntax to pull the values out of the props object.
        The only thing that changed here is that the argument props became this
        object-looking thing as shown in function call. What that says is: "I
        expect the first argument will be an object. Please extract the 'name'
        item out of it, and give it to me as a variable called 'name'." This
        saves you from having to write "props.whatever" all over the place, and
        makes it clear, right up top, which props this component expects.
      </span>
    </div>
  );
}

const TestES62 = ({ name }) => {
  return (
    <div>
      <b>Test ES6 functions: {name}</b>
      <br />
      <span>
        The const declares a constant, and the arrow function is everything
        after the first equal sign. Removing the "function" keyword and adding
        the arrow after the parameter list.
      </span>
    </div>
  );
};

const TestES63 = ({ name }) => (
  <div>
    <b>Test ES6 functions: {name}</b>
    <br />
    <span>
      Optional step 3: Removing the braces, which makes the "return" implicit so
      we can remove that too. Leaving the parens in for readability.
    </span>
  </div>
);

const TestES64 = ({ name }) => (
  <div>
    <b>Test ES6 functions: {name}</b>
    <br />
    <span>
      Optional step 4: If the component is really short, you can put it all on
      one line:
    </span>
  </div>
);

function MediaCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.imgUrl} alt="img" width="200px" height="150px" />
    </div>
  );
}

const GateOpen = ({ isOpen }) => {
  return (
    <div>
      Gate Status value is: {String(isOpen)}
      <br />
      Hence, {isOpen ? "Gate is Open" : "Gate is Closed"}
    </div>
  );
};

ReactDom.render(
  <Hi name="Dev" comp="Wits" yearc={2020} years={2006} />,
  document.querySelector("#root")
);

ReactDom.render(
  <TestES61 name="JS object instead of props" />,
  document.querySelector("#root1")
);

ReactDom.render(
  <TestES62 name="const and the arrow function" />,
  document.querySelector("#root2")
);

ReactDom.render(
  <TestES63 name="optional ways to write functions" />,
  document.querySelector("#root3")
);

ReactDom.render(
  <TestES64 name="optional ways to write functions" />,
  document.querySelector("#root4")
);

ReactDom.render(
  <MediaCard
    title="MediaBox"
    body={
      <span>
        This is <b>media</b> Box
      </span>
    }
    imgUrl="Assets/Images/evil-hamsters.jpg"
  />,
  document.querySelector("#mediaCard")
);

ReactDom.render(
  <GateOpen isOpen={false} />,
  document.querySelector("#gateStatus")
);
