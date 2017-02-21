'use strict';

// getInitalState + setState

// Modify Counter so that it has an initial state of count=0
// use getInitialState to set this as soon as the controller
// is created.

// Declare component methods "increase" and "decrease" using
// setState to increase/decrease the counter when the respective
// buttons are clicked
// Add handlers to the buttons to call the respective methods.

var Counter = React.createClass({
  displayName: 'Counter',

  render: function render() {
    //YOUR CODE HERE
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        null,
        'Increase Count'
      ),
      React.createElement(
        'button',
        null,
        'Deacrease Count'
      ),
      React.createElement(
        'h1',
        null,
        'Count: ',
        this.state.count
      )
    );
  }
});

// DO NOT MODIFY
ReactDOM.render(React.createElement(Counter, null), document.getElementById('blue'));