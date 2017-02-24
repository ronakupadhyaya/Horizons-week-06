var App = React.createClass({
  getInitialState: function() {
    return {
      text: 'Default value'
    }
  },
  change: function(evt) {
    this.setState({
      textBoxValue: evt.target.value.trim()
    });
  },
  render: function() {
    return (
      <div>
        <p>
          Two form fields that change together
        </p>
        <p>
          Current value: {this.state.textBoxValue}
        </p>
        <div>
          Field 1
          <input onChange={this.change} placeholder="Text field" className="form-control" type="text" value={this.state.textBoxValue}/>
        </div>
        <div>
          Field 2
          <input onChange={this.change} placeholder="Text field" className="form-control" type="text" value={this.state.textBoxValue}/>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('out')
);