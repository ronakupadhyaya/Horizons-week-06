var FizzBuzz = React.createClass({
  render: function() {
    // YOUR CODE HERE
    var arr = [];
    for (var i = 0; i < this.props.n; i++) {
      if ((i % 2 === 0) && (i % 3 === 0)) {
        arr.push(<li style={ { color: "purple" } }>
                   { i }
                 </li>)
      } else if (i % 2 === 0) {
        arr.push(<li style={ { color: "blue" } }>
                   { i }
                 </li>)
      } else if (i % 3 === 0) {
        arr.push(<li style={ { color: "red" } }>
                   { i }
                 </li>)
      } else {
        arr.push(<li style={ { color: "black" } }>
                   { i } </li>)
      }
    }
    return <ul>
             { arr }
           </ul>;
  }
});

ReactDOM.render(<FizzBuzz n={ 20 } />, document.getElementById('out'));



numbers.push(<button>)