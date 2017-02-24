var id = 0;
var Item = React.createClass({
  getInitialState: function() {
    return {
      value: Math.random()
    }
  },
  render: function() {
    return (
      <span>{this.state.value}</span>
    );
  }
})
var App = React.createClass({
  getInitialState: function() {
    return {
      items: []
    }
  },
  create: function() {
    this.setState({
      items: this.state.items.concat(id++)
    });
  },
  delete: function(itemToDelete) {
    console.log('deleting', itemToDelete);
    this.setState({
      items: this.state.items.filter((item) => (item !== itemToDelete))
    })
  },
  render: function() {
    var self = this;
    console.log('render', this.state.items);
    return (
      <ul>
        <button onClick={this.create}>Create</button>
        {this.state.items.map(function(item) {
          return <li>
            <Item />
            <button onClick={self.delete.bind(null, item)}>Delete</button>
            </li>
        })}
      </ul>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
