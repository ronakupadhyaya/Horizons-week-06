// Write the following using JSX

// ex1: create a heading
// create a 'h1' element that displays 'Hello World!'
// render the above element at id 'ex1'

// YOUR CODE HERE

// ex2: create a heading w/children
// create a 'ul' element that displays a list of
// your favorite musical artists
// render the above element at id 'ex2'

// YOUR CODE HERE

// ex3: create a link
// create a 'a' element called 'Horizons'
// that links to 'https://www.joinhorizons.com'
// render the above element at id 'ex3'

// YOUR CODE HERE
"use strict";

var ex1 = React.createElement('ex1', {},
	'Hello World!');

ReactDOM.render(ex1, document.getElementById("ex1"));


var list = React.createElement('ul', null,
	React.createElement('li', null, '1'),
	React.createElement('li', null, '2')
);

ReactDOM.render(list, document.getElementById("ex2"));

ReactDOM.render(React.createElement(
	'a', {
		href: 'https://google.com'
	}, "Google"
), document.getElementById("ex3"));