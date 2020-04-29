import React from 'react';
import ReactDOM   from 'react-dom';
import App  from './components/App';
const element = <h1>Hello, world</h1>;
console.log(document.getElementById("root"));
ReactDOM.render((<App/> , document.getElementById('root')));