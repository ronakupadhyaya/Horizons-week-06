'use strict';

// {JavaScript goes here}

// ex1. Adding styles
// We have created a heading for you. It contains
// a basic JS sum. Insert the correct brackets to
// make the output be "The result of the sum is: 5"
var a = 3;
var b = 8;
ReactDOM.render(React.createElement(
  'h2',
  null,
  'The result of the sum is: a+b'
), document.getElementById('ex1'));

// ex2. Embedded expression
// We have created a heading for you. It should display
// "This is a nice title", but it displays the variable
// name instead. Fix it.
var text = "This is a nice title";
ReactDOM.render(React.createElement(
  'h2',
  null,
  'text'
), document.getElementById('ex2'));

// ex3. Adding styles
// We have created an object with styles for you. Add
// the style tag to our header to color the text.
// Right now, it is throwing an error. Fix it.
var styleObject = { color: "pink" };
ReactDOM.render(React.createElement(
  'h2',
  null,
  'This should be Pink'
), document.getElementById('ex3'));

// ex4. Fixing added styles
// We have created a heading for you. It should color
// the text in green. Instead, it is throwing an error.
// Fix it.
ReactDOM.render(React.createElement(
  'h2',
  { style: '{color: green}' },
  'This should be Green'
), document.getElementById('ex4'));