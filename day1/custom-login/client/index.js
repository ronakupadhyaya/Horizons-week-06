var React = require('react');
var ReactDOM = require('react-dom');

var MyForm = React.createClass({
  render: function() {
    // Update this function and make this form customizable.
    // Read values with {this.props.action}, {this.props.method} and
    // {this.props.submitLabel}
    // YOUR CODE HERE
    return <form action={this.props.action} method={this.props.method} submitLabel={this.props.submitLabel}>
					    Username: <input type="text" name="username"/>
							Password: <input type="password" name="password"/>
							<input type="submit"/>
						</form>;
  }
});

ReactDOM.render(<MyForm action="/test" method="post" submitLabel="Test submit"/>,
                document.getElementById('root'));
