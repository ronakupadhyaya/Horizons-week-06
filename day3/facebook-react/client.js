var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

<style></style>;

var App = React.createClass({
  getInitialState: function(){
    return {
      page: 'login'
    };
  },
  token: function(token, id){
    this.setState({
      token: token,
      id: id
    });
  },
  navigate: function(newPage){
    this.setState({
      page: newPage
    });
  },
  render: function(){
    var main;
    if (this.state.page === "login"){
      main = <Login navigate={this.navigate} token={this.token} id={this.id}/>;
    } else if (this.state.page === "registration"){
      main = <Registration navigate={this.navigate} />;
    }
    return (
      <div>{main}</div>
    );
  }
});

var Login = React.createClass({
  register: function(e){
    e.preventDefault();
    this.props.navigate('registration');
  },
  changeUsername: function(event){
    this.setState({
      username: event.target.value
    });
  },
  changePassword: function(event){
    this.setState({
      password: event.target.value
    });
  },
  login: function(e){
    e.preventDefault();
    console.log('inside');
    var self = this;
    var dataObj = {
      email: this.state.username,
      password: this.state.password
    };console.log(dataObj);

    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      method: 'POST',
      data: dataObj,
      success: function(data) {
        console.log(self.props);
        console.log(data);
        localStorage.setItem('token', data.response.token);
        self.props.navigate('newsfeed');
        self.props.token(data.response.token, data.response.id);
      }
    });
  },
  render: function() {
    return (
      <div>
        <h1>Login to Facebook </h1>
        <form onSubmit={this.login}>
          <input type='text' name="username" placeholder='Username' onChange={this.changeUsername}></input>
          <input type='password' name="password" placeholder='Password' onChange={this.changePassword}></input>
          <button type="sumbit" value='Login'> Login </button>
        </form>
        <button onClick={this.register}> Register </button>
      </div>
    );
  }
});

var Registration = React.createClass({
  changeFname: function(event){
    this.setState({
      fname: event.target.value
    });
  },
  changeLname: function(event){
    this.setState({
      lname: event.target.value
    });
  },
  changeEmail: function(event){
    this.setState({
      email: event.target.value
    });
  },
  changePpassword: function(event){
    this.setState({
      password: event.target.value
    });
  },
  register: function(e){
    e.preventDefault();
    var self = this;
    var dataObj = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password
    };
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/register',
      method: 'POST',
      success: function(data) {
        self.props.navigate('login');
      },
      data: dataObj
    });
  },
  render: function(){
    return (
      <div>
      <form>
      <input type='text' name="fname" placeholder='First Name' onChange={this.changeFname}></input>
      <input type='text' name="lname" placeholder='Last Name' onChange={this.changeLname}></input>
      <input type='text' name="email" placeholder='email' onChange={this.changeEmail}></input>
      <input type='password' name="password" placeholder='password' onChange={this.changePpassword}></input>
      <button onClick={this.register}> Register </button>
      </form>
      </div>
    );
  }
});

var Posts = React.createClass({
  getInitialState: function(){
    return {
      posts: []
    };
  },
  createPost: function(){
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'POST',
      data: {
        token: localStorage.getItem('token')
      },
      success: function(data){
        this.setState({
          posts: data.response
        });
      }
    });
  },
  componentDidMount: function(){
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'GET',
      data: {
        token: localStorage.getItem('token')
      },
      success: function(data){
        this.setState({
          posts: data.response
        });
      }
    });
  },

  render: function(){
    return (
      this.state.posts.map(function(dataPost){
        <div>
        <h1>NEWS FEED</h1>
        <tr>
        <td>{dataPost.poster.name}</td>
        <td>{dataPost.content}</td>
        <td>{dataPost.createdAt}</td>
        </tr>
        </div>
      })
    );
  }
});


ReactDOM.render(<App />, document.getElementById('root'));
