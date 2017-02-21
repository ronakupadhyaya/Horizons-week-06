'use strict';

// make a class called 'CustomList' that
// takes in an array as props, and creates
// an unordered list where each list element
// is from that array

// YOUR CODE HERE

// DO NOT MODIFY
// if implemented properly the following list should show
// up correctly
ReactDOM.render(React.createElement(CustomList, { data: ['Snap dat Selfie', 'Clean Big Toe', 'Weave Dank Breadbasket'] }), document.getElementById('myList'));