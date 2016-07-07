var React = require('react');
var ReactDOM = require('react-dom');

var children = [
	"Username",
	React.createElement("input", {type: 'text', name: 'username'}),
	"Password", 
	React.createElement("input", {type: 'password', name: 'password'}),
	React.createElement("input", {type: 'submit', value: 'submit'})
] 
var element = React.createElement('form', null, children);

ReactDOM.render(element, document.getElementById('root'));
