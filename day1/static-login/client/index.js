var React = require('react');
var ReactDOM = require('react-dom');

// Update this call to .createElement and add these elements as children:
// <form>
//   Username: <input type="text" name="username">
//   Password: <input type="password" name="password">
//   <input type="submit">
// </form>
var div = React.createElement('form', null, "Username",
  React.createElement("input", {type: 'text', name: 'username'}),
  "Password",
  React.createElement("input", {type: 'password', name: 'password'}),
  React.createElement("input", {type: 'submit'}));
ReactDOM.render(div, document.getElementById('out'));
