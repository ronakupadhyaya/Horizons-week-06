var React = require('react');
var ReactDOM = require('react-dom');

// Add these elements inside the form element using JSX:
// <form>
//   Username: <input type="text" name="username">
//   Password: <input type="password" name="password">
//   <input type="submit">
// </form>
var element = <form>
  Username: <input type="text" name="username" />
  Password: <input type="password" name="password" />
  <input type="submit" />
  </form>;

ReactDOM.render(element, document.getElementById('root'));


var RedH1 = React.createClass({
  render: function() {  // just like res.render!
    return <h1 style= { {color: red} }>
    {this.props.children}
    </h1> 
    }
  })
