var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Posts = React.createClass({
  getInitialState: function(){
    return {
      posts: []
    };
  },
  componentDidMount: function(){
    var self = this;
    $.ajax({
      url: "https://horizons-facebook.herokuapp.com/api/1.0/posts",
      type: 'GET',
      data: {"token": self.props.token},
      success: function(posts){
        console.log(posts);
        self.setState({posts: posts.response});
      }
    });
  },
  render: function(){
    return (
      <ul>{this.state.posts.map((item, i) => {
          return <li key={i}>{item.content} by {item.poster.name} on {Date(Date.parse(item.createdAt)).toString()}</li>
        })}</ul>
    );
  }
});

var Registration = React.createClass({
  getInitialState: function(){
    return {
      "fname": "",
      "lname": "",
      "email": "",
      "password": ""
    };
  },
  registerUser: function(){
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/register',
      type: "POST",
      data: this.state,
      success: function(response){
        self.props.navigate('login');
      }
    });
  },
  change: function(event){
    if(event.target.name === 'email'){
      this.setState({
        email: event.target.value
      });
    }else if(event.target.name === 'password'){
      this.setState({
        password: event.target.value
      });
    }else if(event.target.name === 'fname'){
      this.setState({
        fname: event.target.value
      });
    }else if(event.target.name === 'lname'){
      this.setState({
        lname: event.target.value
      });
    }
  },
  render: function(){
      return (
        <div>
          <h2>Registration</h2>
          <form>
            <label>
              Email:
              <input placeholder="Email" type="text" value={this.state.email} onChange={this.change} name="email" />
            </label>
            <br/>
            <label>
              Password:
              <input placeholder="Password" type="password" value={this.state.password} onChange={this.change} name="password" />
            </label>
            <br/>
            <label>
              First Name:
              <input placeholder="First Name" type="text" value={this.state.fname} onChange={this.change} name="fname" />
            </label>
            <br/>
            <label>
              Last Name:
              <input placeholder="Last Name" type="text" value={this.state.lname} onChange={this.change} name="lname" />
            </label>
          </form>
          <button onClick={this.registerUser}>Create User</button>
        </div>
      );
  }
});

var Login = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },
  change: function(event){
    if(event.target.name === 'username'){
      this.setState({
        username: event.target.value,
      });
    }else{
      this.setState({
        password: event.target.value,
      });
    }
  },
  login: function(event){
    event.preventDefault();
    var self = this;

    var credentials = {
      "email": this.state.username,
      "password": this.state.password
    };

    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      data: credentials,
      type: "POST",
      success: function(response){
        self.props.saveToken(response.response.token);
      }
    });
  },
  register: function(){
    this.props.navigate('registration');
  },
  render: function(){
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.login}>
          <label>
            Username:
            <input placeholder="username" type="text" value={this.state.username} onChange={this.change} name="username" />
          </label>
          <br/>
          <label>
            Password:
            <input placeholder="password" type="password" value={this.state.password} onChange={this.change} name="password" />
          </label>
          <br/>
          <input type="submit" value="Login" />
        </form>
        <br/>
        <button onClick={this.register}>Go to registration</button>
      </div>
    );
  }
});


var App = React.createClass({
  getInitialState: function(){
    return {
      page: 'login',
      token: ''
    };
  },
  navigate: function(newPage){
    this.setState({
      page: newPage
    });
  },
  saveToken: function(newToken){
    this.setState({
      token: newToken
    });
    this.navigate('posts');
  },
  render: function(){
    var main;
    if(this.state.page === 'login'){
      main = <Login navigate={this.navigate} saveToken={this.saveToken} />;
    }else if(this.state.page === 'registration'){
      main = <Registration navigate={this.navigate} saveToken={this.saveToken} />;
    }else if(this.state.page === 'posts'){
      main = <Posts token={this.state.token} navigate={this.navigate} saveToken={this.saveToken} />;
    }
    return (
      <div>
        {main}
      </div>
    );
  }
});



ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<h1>Hi</h1>, document.getElementById('root'));
