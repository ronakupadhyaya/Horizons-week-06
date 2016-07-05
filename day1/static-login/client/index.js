var React = require('react');
var ReactDOM = require('react-dom');

// Update this call to .createElement and add these elements as children:
// <form>
//   Username: <input type="text" name="username">
//   Password: <input type="password" name="password">
//   <input type="submit">
// </form>
var element = React.createElement('form', null,
	React.createElement('input', null, 'Username'),
	React.createElement('input', null, 'Password'));

// var children = [
//   React.createElement('h2', null, 'Items'),
//   React.createElement('ul', null,
//     React.createElement('li', null, 'Item 1'),
//     React.createElement('li', null, 'Item 2'),     React.createElement('li', null, 'Item 3'),     React.createElement('li', null, 'Item 4'))
// ];

// var div = React.createElement('div', null, children)

ReactDOM.render(element, document.getElementById('root'));
