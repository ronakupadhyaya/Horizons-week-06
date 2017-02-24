var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Login = React.createClass({
  getInitialState: function(){
    return {
      email: '',
      password: '',
    };
  },
  register: function(){
    this.props.navigate('registration');
  },
  updateEmail: function(evt){
    this.setState({email: evt.target.value});
  },
  updatePassword: function(evt){
    this.setState({password: evt.target.value});
  },
  submit: function(e){
    e.preventDefault();
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      method: 'POST',
      data:{
        "email": self.state.email,
        "password": self.state.password
      },
      success: function(returned){
        console.log('You have logged in!');
        self.props.token(returned.response.token);
        self.props.navigate('posts');
      }
    });
  },
  render: function(){
    return(
    <div>
    <h1>Login</h1>
    <form onSubmit={this.submit}>
      <input type='text' value={this.state.email} onChange={this.updateEmail} placeholder='Email'></input>
      <input type='password' value = {this.state.password} onChange={this.updatePassword} placeholder='Password'></input>
      <button type='submit'>Submit</button>
      </form>
      <form onSubmit={this.register}>
      <button type='submit'>Go to registration</button>
      </form>
    </div>
    );
  }
});

var Registration = React.createClass({
  getInitialState: function(){
    return {
      email: '',
      password: '',
      fname: '',
      lname: ''
    };
  },
  updateEmail: function(evt){
    this.setState({email: evt.target.value});
  },
  updatePassword: function(evt){
    this.setState({password: evt.target.value});
  },
  updateFname: function(evt){
    this.setState({fname: evt.target.value});
  },
  updateLname: function(evt){
    this.setState({lname: evt.target.value});
  },
  login: function(){
    this.props.navigate('login');
  },
  submit: function(){
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/register',
      method: 'POST',
      data: {
        "fname": self.state.fname,
        "lname": self.state.lname,
        "email": self.state.email,
        "password": self.state.password
      },
      success: function(){
        console.log('Your account has been created!');
        self.props.navigate('login');
      }
    });
  },
  render: function(){
    return(
    <div>
    <h1>Registration</h1>
    <form onSubmit={this.submit}>
      <input type='text' value={this.state.email} onChange={this.updateEmail} placeholder='Email'></input>
      <input type='password' value = {this.state.password} onChange={this.updatePassword} placeholder='Password' ></input>
      <input type='text' value={this.state.fname} onChange={this.updateFname} placeholder='First Name'></input>
      <input type='password' value = {this.state.lname} onChange={this.updateLname} placeholder='Last Name' ></input>
      <button type='submit'>Submit</button>
      </form>
    </div>
    );
  }
});

var Posts = React.createClass({
  getInitialState: function(){
    return {
      messages: [],
      post: ''
    };
  },
  componentDidMount: function(){
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'GET',
      data: {"token": self.props.authToken},
      success: function(data){
        var arr = [];
        data.response.map((x) => arr.push(x));
        self.setState({messages: arr});
        console.log('You got posts!');
      }
    });
  },
  updatePost: function(evt){
    evt.preventDefault();
    this.setState({post: evt.target.value});
  },
  submit: function(e){
    e.preventDefault();
    console.log('we here');
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'post',
      data: {
        "token": self.props.authToken,
        "content": self.state.post
      },
      success: function(data){
        console.log('You have posted!');
        self.setState({
          post: '',
          messages: [data.response, ...self.state.messages ]
        });
      }
    });
  },
  like: function(e){
    console.log(event.target.id);
    console.log('trying to make a like!');
    e.preventDefault();
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts/likes/'+ event.target.id,
      method: 'GET',
      data: {
        "token": self.props.authToken
      },
      success: function(data){
        console.log('Liked!');
        var _id = data.response._id;
        var index;
        for(var i = 0; i < self.state.messages.length; i++){
          if(self.state.messages[i]._id === _id){
            index = i;
          }
        }
        self.setState({messages: self.state.messages.splice(index,1, data.response)});
      }
    });
  },
  render: function(){
    return (
      <div>
      <h1>Posts</h1>
      <form onSubmit = {this.submit}>
      <textarea style={{width: '400px', height: '120px'}} onChange={this.updatePost} value ={this.state.post} placeholder='Post'></textarea>
      <button type='submit'>Post!</button>
      </form>
      {this.state.messages.map((x, i) => <div key = {i} style={{border: "2px solid black", padding: "10px"}}>
      <h3>{x.poster.name}</h3>
      <p>{x.content}</p>
      <h5>{x.likes.length} likes</h5>
      <h6>{x.createdAt}</h6>
      <form onSubmit={this.like}><button id={x._id} type='submit'>Like</button></form></div>)}
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
  navigate: function(currPage){
    this.setState({page: currPage});
  },
  saveToken: function(token){
    this.setState({token: token});
  },
  render: function(){
    var current;
    if(this.state.page === 'login'){
      current = <Login navigate={this.navigate} token={this.saveToken}/>;
    } else if(this.state.page==='registration'){
      current = <Registration navigate={this.navigate}/>;
    } else if(this.state.page === 'posts'){
      current = <Posts navigate={this.navigate} authToken={this.state.token}/>;
    }
    return(
      <div>
      {current}
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));
