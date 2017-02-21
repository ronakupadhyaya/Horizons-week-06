"use strict";

// Create a ColorfulCustomHeading React class
// that returns a 'h1' heading where the text
// and color are passed in through props

// YOUR CODE HERE

// DO NOT MODIFY
ReactDOM.render(React.createElement(ColorfulCustomHeading, { color: "red", text: "Red Title" }), document.getElementById('red'));
ReactDOM.render(React.createElement(ColorfulCustomHeading, { color: "blue", text: "Blue Title" }), document.getElementById('blue'));