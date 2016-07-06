var React = require('react');
var ReactDOM = require('react-dom');

// Update this call to .createElement and add these elements as children:
// <form>
//   Username: <input type="text" name="username">
//   Password: <input type="password" name="password">
//   <input type="submit">
// </form>

var username = React.createElement('input', {type: 'text', name: 'username', className:'form-control'});
var pass = React.createElement('input', {type: 'password', name: 'password', className:'form-control'});
var submit = React.createElement('input', {type: 'submit', className:'btn btn-primary'});
var element = React.createElement('form', {method: 'POST'}, 'Username: ', username, 'Password: ', pass, submit);

ReactDOM.render(element, document.getElementById('root'));
