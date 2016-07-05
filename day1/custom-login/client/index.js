var React = require('react');
var ReactDOM = require('react-dom');

var MyForm = React.createClass({
  render: function() {
    
    return (<form action={this.props.action} method={this.props.method}>
  Username: <input type="text" name="username" />
  Password: <input type="password" name="password" />
  <input type="submit" value={this.props.submitLabel} />
</form>);
  }
});

ReactDOM.render(<MyForm action="/test" method="post" submitLabel="Test submit"/>,
                document.getElementById('root'));
