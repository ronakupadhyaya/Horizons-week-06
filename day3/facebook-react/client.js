var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var _ = require('underscore');
var Login = React.createClass({
  getInitialState: function(){
    return {
      emailText: "",
      pwText: ""
    };
  },
  change: function(field, evt){
    if (field === "email"){
      this.setState({emailText: evt.target.value});
    } else if (field === "password"){
      this.setState({pwText: evt.target.value});
    }
  },
  login: function(){
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      method: 'POST',
      data: {
        email: this.state.emailText,
        password: this.state.pwText
      },
      success: (res) => {
        // console.log(res.response.token);
        this.props.changeToken(res.response.token, res.response.id);
        this.props.navigate.bind(null, 'Posts')();
      }
    });
  },
  render: function() {
    return(
      <div id='login-form'>
      <input type = "text" name="email" placeholder = "email" value = {this.state.emailText} onChange={this.change.bind(null, 'email')}/>
      <input type = "password" name="password" placeholder = "password" value = {this.state.pwText} onChange={this.change.bind(null, 'password')}/>
      <button type = "button" name = "login-button" onClick = {this.login}> Login </button>
      <button type = "button" name = "newUser-button" onClick={this.props.navigate.bind(null, 'Registration')}> New User </button>
      </div>);
  }
});
var Registration = React.createClass({
  getInitialState: function(){
    return {
      fnameText: "",
      lnameText: "",
      usernameText: "",
      pwText:""
    };
  },
  change: function(field, evt){
    if (field === "fname"){
      this.setState({fnameText: evt.target.value});
    } else if (field === "lname"){
      this.setState({lnameText: evt.target.value});
    } else if (field === "username"){
      this.setState({usernameText: evt.target.value});
    } else if (field === "password"){
      this.setState({pwText: evt.target.value});
    }
  },
  cancel: function(){
    this.setState({fnameText: "", lnameText: "", usernameText: "", pwText: ""});
  },
  register: function() {
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/register',
      method: 'POST',
      data: {
        fname: this.state.fnameText,
        lname: this.state.lnameText,
        email: this.state.usernameText,
        password: this.state.pwText
      },
      success: (res) => {
        console.log(this.props);
        this.props.navigate.bind(null, 'Login')();
      }
    });
  },
  render: function() {
    return(
        <div id='register-form'>
        <input type="text" name="firstname" placeholder="First Name" value = {this.state.fnameText} onChange={this.change.bind(null, 'fname')} />
        <input type="text" name="lastname" placeholder="Last Name" value = {this.state.lnameText} onChange={this.change.bind(null, 'lname')}/>
        <input type="text" name="username" placeholder="Username" value = {this.state.usernameText} onChange={this.change.bind(null, 'username')}/>
        <input type="password" name="register-password" placeholder="Password" value = {this.state.pwText} onChange={this.change.bind(null, 'password')}/>
        <button type="button" name="register-button" onClick={this.register}>Register</button>
        <button type="button" name="register-cancel-button" onClick={this.cancel}>Cancel</button>
        </div>
    );
  }
});
var Posts = React.createClass({
  getInitialState: function(){
    return{
      posts: []
    };
  },
  componentDidMount: function() {
    this.textInput.focus();
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: "GET",
      data: {
        token: this.props.token
      },
      success:(res) =>{
        this.setState({posts: this.state.posts.concat(res.response)});
      }
    });
  },
  getComments: function(id){
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts/comments/'+id,
      method: "POST",
      data: {
        token: this.props.token
      },
      success:(res) =>{
      }
    });
  },
  postComment: function(id, evt){
    evt.preventDefault();
    console.log('$$$$$$$$4', this.commentInput.value);
    console.log(this.commentInput);
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts/comments/'+id,
      method: "POST",
      data: {
        token: this.props.token,
        content: this.commentInput.value
      },
      success:(res) =>{
        var newPosts = this.state.posts.map(function(x){
          if (x._id === id){
            return res.response;
          }
          return x;
        });
        this.setState({posts: newPosts});
      }
    });
  },
  likes: function(id){
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts/likes/'+id,
      method: "GET",
      data: {
        token: this.props.token
      },
      success:(res) =>{
        var newPosts = this.state.posts.map(function(x){
          if (x._id === id){
            return res.response;
          }
          return x;
        });
        console.log(newPosts);
        this.setState({posts: newPosts});
      }
    });
  },
  postPost: function(evt) {
    evt.preventDefault();
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: "POST",
      data: {
        token: this.props.token,
        content: this.textInput.value
      },
      success:(res) =>{
        this.setState({posts: this.state.posts.concat(res.response)});
      }
    });
  },
  render: function(){
    var sortedItems;
    sortedItems = _.sortBy(this.state.posts, 'createdAt');
    return(
      <div id="main">
      <button name="logout">Logout</button>
      <div name="post-list">
      <div name='post-list-container'>
        {sortedItems.map((x) => { return(<div>
          <h2>{x.poster.name}</h2>
          <h4>{x.createdAt}</h4>
          <h3>{x.content}</h3>
          <div>
          <button onClick={this.likes.bind(null, x._id)}>Likes: {x.likes.length}</button>
          <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">comments: {x.comments.length}</button>
          <div id="demo" class="collapse">
            {x.comments.map(function(x){
              return (<div><h3>{x.content}</h3><h4>{x.poster.name}</h4><h4>{x.createdAt}</h4></div>
              );
            })}
            <form onSubmit = {this.postComment}>
            <input onClick={() => this.commentInput.focus()} ref={(comment) => {this.commentInput = comment; }} type="text" name="comment-box" />
            <button type='submit' name="comment-button" onClick={this.postComment.bind(null, x._id)}> Add-Comment </button>
            </form>
          </div>
          </div>
          </div>);})}
      </div>
      </div>
      <div name="post-post">
      <form onSubmit = {this.postPost}>
      <input onClick={() => this.textInput.focus()} ref={(input) => {this.textInput = input; }} type="text" name="post-box" />
      <button type='submit' name="post-button"> Post </button>
      </form>
      </div>
      </div>);
  }
});
var App = React.createClass({
  getInitialState: function(){
    return {
      page:  'Login',
      token: '',
      id: ''
    };
  },
  navigate: function (newPage){
    this.setState({page: newPage});
  },
  changeToken: function(newToken, newId){
    this.setState({token: newToken, id: newId});
    console.log(this.state);
  },
  render: function() {
    var main;
    if( this.state.page === 'Login') {
      main = <Login navigate={this.navigate} changeToken = {this.changeToken}/>;
    } else if (this.state.page === 'Registration') {
      main = <Registration navigate={this.navigate}/>;
    } else if (this.state.page === 'Posts') {
      main = <Posts navigate={this.navigate} token = {this.state.token} id={this.state.id}/>;
    } else {
      main =<Login navigate={this.navigate}/>;
    }
    return (
          <div>
          <h1 style={{color: 'rgb(59,89,152)'}}> FACEBOOK BITCH! </h1>
          {main}
          </div>
    );
  }
});
ReactDOM.render(<App />, document.getElementById('root'));