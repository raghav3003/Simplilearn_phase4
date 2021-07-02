import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = <p>Name: Raghav</p>;
const address = <p>Address: Delhi</p>;React.createElement('p', {}, );
const phone_number = <p>Phone: +91 9956375698</p>;
const city = <p>City: New Delhi</p>;
const container = <div>
  {name}
  {address}
  {phone_number}
  {city}
</div>;

const tech = <div>
  <h1>Technologies</h1>
  <ul>
    <li>Python</li>
    <li>C++</li>
    <li>Java</li>
    <li>JS</li>
  </ul>
</div>

const hobbies = <div>
  <h1>Hobbies</h1>
  <ul>
    <li>Watching F!</li>
    <li>Playing tennis</li>
  </ul>
</div>

// const name = React.createElement('p', {}, 'Name: Raghav');
// const address = React.createElement('p', {}, 'Address: Delhi');
// const phone_number = React.createElement('p', {}, 'Phone: +91 9956375698');
// const city = React.createElement('p', {}, 'City: New Delhi');
// const container = React.createElement('div', {}, [name, address, phone_number, city]);

// const tech = React.createElement('div', {}, 
//   React.createElement('h1', {}, 'Technologies'),
//   React.createElement('ul', {}, 
//     [
//       React.createElement('li', {}, "Python"),
//       React.createElement('li', {}, "C++"),
//       React.createElement('li', {}, "Java"),
//       React.createElement('li', {}, "JS"),
//     ]
//   )
// );

// const hobbies = React.createElement('div', {}, 
//   React.createElement('h1', {}, 'Hobbies'),
//   React.createElement('ul', {}, 
//     [
//       React.createElement('li', {}, "Playing tennis"),
//       React.createElement('li', {}, "Watching F1"),
//     ]
//   )
// );

ReactDOM.render(
  [container, tech, hobbies],
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
