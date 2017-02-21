'use strict';

// ex1. Create a React class called MyButton
// that should render a button that logs
// 'clicked!' when pressed

// YOUR CODE HERE

// DO NOT MODIFY
// check if this works by clicking the button and checking
// whether or not 'clicked!' was logged in the console
ReactDOM.render(React.createElement(MyFirstButton, null), document.getElementById('button'));

// ex2. Create a MyInputBox React class where you should render
// an input box that logs the value using event (event.target.value)

// YOUR CODE HERE

// DO NOT MODIFY
// check if this works by typing into the input box and
// checking if it gets immediately logged into the console
ReactDOM.render(React.createElement(MyInputBox, null), document.getElementById('input'));