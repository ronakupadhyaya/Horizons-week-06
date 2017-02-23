var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var App = React.createClass({
  getInitialState: function() {
    return {
      page: 'login'
    };
  },
  navigate: function(newPage){
    console.log(newPage);
    this.setState({
      page: newPage
    });
  },
  render: function() {
    var main;
    if(this.state.page === 'login') {
      main = <Login navigate = {this.navigate} />;
    } else if (this.state.page === 'registration') {
      main = <Registration navigate = {this.navigate} />;
    }
    return (
      <div>
      {main}
      </div>
    );
  }
});

var Login = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },
  register: function(event) {
    event.preventDefault();
    console.log('inside');
    this.props.navigate('registration');
  },
  login: function(event) {
    var self = this;
    event.preventDefault();
    console.log('before ajax');
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      method: 'POST',
      data: {
        'email': self.state.username,
        'password': self.state.password
      },
      success: function(data){
        console.log(data);
        localStorage.setItem('token', data.response.token);
        localStorage.getItem('token');
        // use local storage instead of local variables
        // to remove token, use localStorage.remove()
        self.props.navigate('posts');
      }
    });
  },
  typingUsername: function(event) {
    // console.log('something');
    this.setState({
      username: event.target.value
    });
  },
  typingPassword: function(event) {
    this.setState({
      password: event.target.value
    });
  },
  render: function() {
    return (
      <div>
        <h1>Login to "Facebook"</h1>

        <form onSubmit={this.login}>
        <p><input type="text" value={this.state.username} onChange={this.typingUsername} placeholder="Username" /></p>
        <p><input type="Password" value={this.state.password} onChange={this.typingPassword} placeholder="Password"/></p>
        <p><button>Login</button></p>
        </form>

        <form onSubmit={this.register}>
        <p><button onClick={this.register}>Register</button></p>
        </form>

      </div>
    );
  }
});

var Registration = React.createClass({
  getInitialState: function() {
    return {
      fname: '',
      lname: '',
      email: '',
      password: ''
    };
  },
  render: function() {
    return (
      <div>
        <h1>Register to "Facebook"</h1>

        <form onSubmit={this.register}>
        <p><input type="text" value={this.state.username} onChange={this.typingUsername} placeholder="Username" /></p>
        <p><input type="text" value={this.state.password} onChange={this.typingPassword} placeholder="Password"/></p>
        <p><input type="text" value={this.state.username} onChange={this.typingUsername} placeholder="Username" /></p>
        <p><input type="Password" value={this.state.password} onChange={this.typingPassword} placeholder="Password"/></p>
        <p><button>Login</button></p>
        </form>

        <form onSubmit={this.register}>
        <p><button onClick={this.register}>Register</button></p>
        </form>

      </div>
    )
  }
})


ReactDOM.render(<App />, document.getElementById('root'));
