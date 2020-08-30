// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import App from "./components/App";

// const jsx = <h1>Hello, Platzi-Badges!</h1>;

// const element = React.createElement("h1", {}, "Hola, soy un children!");
// const element = React.createElement(
//   "a",
//   { href: "https://leonsonidovirtual.com/" },
//   "Ir a LSV"
// );
// const name = "Mortal";
// const element = React.createElement("h1", {}, `Hola soy ${name}`);

// const jsx = <h1> Hola soy, {name}</h1>;

// const jsx = (
//   <div>
//     <h1>Hola soy ramiro</h1>
//     <p>Soy inge</p>
//   </div>
// );

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(
//   <Badge
//     firstName="León"
//     lastName="Contreras"
//     avatarUrl="https://s.gravatar.com/avatar/ee292d382b296908326f83a68e308e1e?s=80"
//     jobTittle="Full Stack"
//     twitter="ramirocontrerasleon"
//   />,
//   container
// );
