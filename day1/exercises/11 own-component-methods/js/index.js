// ex1. Create a React class called MyButton
// that renders a button that alerts 'clicked!' 
// when pressed.

// This exercise is similar to the previous one,
// but should use a function called 'click'
// instead of handling the action inline. 

var MyButton = React.createClass({
  click: //YOUR CODE HERE 
  , render: function() {
    return (
      <div>
       <button >Click me</button>
      </div>
    )
  }
});


// DO NOT MODIFY
ReactDOM.render(<MyButton count={0} />, document.getElementById('blue'));