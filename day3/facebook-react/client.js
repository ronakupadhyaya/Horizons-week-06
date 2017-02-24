var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var App = React.createClass({
  getInitialState: function(){
    return {
      page: 'login'
    };
  },
  navigate: function(newPage){
    this.setState({
      page: newPage
    });
  },
  render: function(){
    var main;
    if(this.state.page === 'login'){
      main = <Login navigate={this.navigate}/>;
    } else if(this.state.page === 'registration'){
      main = <Registration navigate={this.navigate}/>;
    } else if(this.state.page === 'post'){
      main = <Post navigate={this.navigate}/>;
    }
    return (
			<div>
			{main}
			</div>
    );
  }
});
/////////////////////////////////REGISTRATION
var Registration = React.createClass({
  getInitialState: function(){
    return {
      fname: '',
      lname: '',
      email: '',
      password: ''
    };
  },
  register: function(event){
    event.preventDefault();
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/register',
      method: 'POST',
      data: {
        'fname': self.state.fname,
        'lname': self.state.lname,
        'email': self.state.email,
        'password': self.state.password
      },
      success: function(data){
        console.log('POST that bish');
        self.props.navigate('login');
      }
    });
  },
  typeFname: function(event){
    this.setState({
      fname: event.target.value
    });
  },
  typeLname: function(event){
    this.setState({
      lname: event.target.value
    });
  },
  typeEmail: function(event){
    this.setState({
      email: event.target.value
    });
  },
  typePass: function(event){
    this.setState({
      password: event.target.value
    });
  },
  render: function(){
    return (
			<div>
			<h1>Register to 'Facebook'</h1>
			<form>
				<input type="text" placeholder="First Name" onChange={this.typeFname} value={this.state.fname}/><br/>
				<input type="password" placeholder="Last Name" onChange={this.typeLname} value={this.state.lname}/><br/>
				<input type="text" placeholder="Email" onChange={this.typeEmail} value={this.state.email}/><br/>
				<input type="password" placeholder="Password" onChange={this.typePass} value={this.state.password}/><br/>
				<button onClick={this.register}>Register</button><br/>
			</form>
			</div>
    );
  }
});
/////////////////////////////////LOGIN
var Login = React.createClass({
  getInitialState: function(){
    return {
      email: '',
      password: '',

    };
  },
  register: function(event){
    event.preventDefault();
    console.log('in register');
    this.props.navigate('registration');
  },
  login: function(event){
    event.preventDefault();
    var self = this;
    console.log('Succes login');
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      method: 'POST',
      data: {
        'email': self.state.email,
        'password': self.state.password
      },
      success: function(data){
        console.log('Success');
        console.log(data);
        localStorage.setItem('token', data.response.token);
        localStorage.getItem('token');
        self.props.navigate('post');
      }
    });
  },
  typeEmail: function(event){
    this.setState({
      email: event.target.value
    });
  },
  typePass: function(event){
    this.setState({
      password: event.target.value
    });
  },
  render: function(){
    return(
     <div>
      <h1>Login to 'Facebook'</h1>
			<form>
        <input type="text" name="email" placeholder="Email" onChange={this.typeEmail} value={this.state.email}/><br/>
        <input type="password" placeholder="password" onChange={this.typePass} value={this.state.password}/><br/>
				<button onClick={this.login}>Login</button><br/>
				<button onClick={this.register}>Register</button><br/>
			</form>

     </div>
    );
  }
});

/////////////////////////////////POST

var Post = React.createClass({
  getInitialState: function(){
    return {
      post: [],
      newPost: ''
    };
  },
  componentDidMount: function(){
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'GET',
      data:{
        token: localStorage.getItem('token')
      },
      success: function(data){
				console.log(data,'postlog');
        self.setState({
          post: data.response
        });
        self.props.navigate('post');
      },
    });
  },
  newPost: function(){
		console.log('newpost selected');
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'POST',
      data: {
        'token': localStorage.getItem('token'),
        'content': self.state.newPost
      },
      success: function(data){
        console.log('You were able to post');
        self.setState({
          newPost: '',
          post: [data.response, ...self.state.post]
        });
      }
    });
  },
  typePost: function(event){
    event.preventDefault();
    this.setState({
      newPost: event.target.value
    });
  },
  render: function(){
    return(
			<div>
			<h1>You just got into 'Facebook'</h1>
			<th>{this.state.post.map(function(x,i){return (<tr key={i}><td>{x.content}</td><td>{x.poster.name}</td><td>{x.createdAt}</td></tr>); })}</th>
			<input type="textarea" value={this.state.newPost} onChange={this.typePost}></input>
			<button onClick={this.newPost}>Submit</button>
			</div>
    );
  }
});











ReactDOM.render(<App/>, document.getElementById('root'));
