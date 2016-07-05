var React = require('react');
var ReactDOM = require('react-dom');

// Update this call to .createElement and add these elements as children:
// <form>
//   Username: <input type="text" name="username">
//   Password: <input type="password" name="password">
//   <input type="submit">
// </form>
var element = React.createElement('form', ,
  React.createElement('input', {type: 'text', name: 'username'}, 'username'),
  React.createElement('input', {type: 'password', name: 'password'}, 'password'),
  React.createElement('input', {type: 'submit'})
  );

var div = React.createElement('form')
ReactDOM.render(element, document.getElementById('root'));
