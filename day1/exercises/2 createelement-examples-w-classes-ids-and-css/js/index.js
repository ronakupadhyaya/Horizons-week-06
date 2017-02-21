// DO NOT MODIFY ANY CSS

// ex1: create a heading w/id
// create a 'h1' element that has the id 'title'
// and text 'Horizons'
// render the above element at id 'ex1'

// if the rendered element has the correct id it
// will be red and HUUUUUUUUUUUUGE #Trump

// YOUR CODE HERE

// ex2: create a div w/two child divs
//   - Taylor w/ class 'taylor'
//   - Beyonce w/ class 'bae'

// if the rendered element has the correct class
// you will see the baes

// YOUR CODE HERE

// ex3: create a BOX
// create a div element (200px x 200px)
// using inline styles give it a 20px solid red border
// and a blue background

// YOUR CODE HERE
"use strict";

ReactDOM.render(React.createElement(
	'h1', {
		id: 'title'
	}, "Horizons"
), document.getElementById("ex1"));


ReactDOM.render(React.createElement(
	'div', {
		id: 'artists'
	},
	React.createElement('div', {
		className: 'taylor'
	}, 'Taylor'),
	React.createElement('div', {
		className: 'bae'
	}, 'Beyonce')
), document.getElementById("ex2"));

ReactDOM.render(React.createElement(
	'div', {
		style: {
			height: '200px',
			width: '200px',
			border: '20px solid red',
			backgroundColor: 'blue'
		}
	}), document.getElementById("ex3"));