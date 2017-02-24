var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var App = React.createClass({
  getInitialState: function(){
    return{
      page: 'login',
      token: ''
    }
  },
  navigate: function(newPage){
    this.setState({
      page: newPage
    })
  },
  saveToken: function(token){
    this.setState({
      token: token
    })
  },
  render: function(){
    var main;
    console.log(this.state.token)
    if(this.state.page === 'login'){
      main = <Login navigate={this.navigate} saveToken={this.saveToken}/>
    } else if (this.state.page === 'registration') {
      main = <Registration navigate={this.navigate}/>
    } else if (this.state.page === 'posts') {
      main = <Posts navigate={this.navigate} token={this.state.token}/>
    }
    return (
      <div>{main}</div>
    )
  }
});

var Login = React.createClass({
  getInitialState: function(){
    return {
      user: '',
      pass: ''
    }
  },
  inputUser: function(event){
    this.setState({
      user: event.target.value,
    })
  },
  inputPass: function(event){
    this.setState({
      pass: event.target.value,
    })
  },
  goRegister: function(){
    this.props.navigate('registration')
  },
  login: function(event){
    var self = this
    event.preventDefault()
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      method: 'POST',
      data: {
        'email': self.state.user,
        'password': self.state.pass
      },
      success: function(data){
        self.props.saveToken(data.response.token)
        self.props.navigate('posts')
      }
    })
  },
  render: function(){
    return (
      <div>
      <h1>Login to Facebook</h1>
      <form onSubmit={this.login}>
      <input placeholder='Username' type='text' name='user' value={this.state.user} onChange={this.inputUser}/>
      <input placeholder='Password' type='password' name='pass' value={this.state.pass} onChange={this.inputPass}/>
      <input type='submit' value='Login' />
      </form>
      <button onClick={this.goRegister}>Register</button>
      </div>
    )
  }
});

var Registration = React.createClass({
  getInitialState: function(){
    return{
      user: '',
      pass: '',
      first: '',
      last: ''
    }
  },
  updateInfo: function(event){
    var regisObj = function(){
      var returnObj = {};
      returnObj[this.target.name] = this.target.value;
      return returnObj;
    }.bind(event)();
    this.setState(
      regisObj
    );
  },
  register: function(event){
    var self = this
    // event.preventDefault()
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/register',
      method: 'POST',
      data: {
        'email': self.state.user,
        'password': self.state.pass,
        'fname': self.state.first,
        'lname': self.state.last
      },
      success: function(data){
        self.props.navigate('login')
      }
    })
  },
  render: function(){
    return (
      <div>
      <h1>Login to Facebook</h1>
      <form onSubmit={this.register} >
      <input placeholder='Email' type='text' name='user' defaultValue={this.state.user} onChange={this.updateInfo}/>
      <input placeholder='Password' type='password' name='pass' defaultValue={this.state.pass} onChange={this.updateInfo}/>
      <input placeholder='First Name' type='text' name='first' defaultValue={this.state.first} onChange={this.updateInfo}/>
      <input placeholder='Last Name' type='text' name='last' defaultValue={this.state.last} onChange={this.updateInfo}/>
      <input type='submit' value='Register' />
      </form>
      </div>
    )
  }
});

var Posts = React.createClass({
  getInitialState: function(){
    return{
      posts: [],
      currentText: ''
    }
  },
  componentDidMount: function(){
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method:'GET',
      data: {
        'token': this.props.token
      },
      success:(data) => {
        this.setState({
          posts: data.response
        })
      }
    })
  },
  post: function(event){
    event.preventDefault()
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'POST',
      data: {
        'token': this.props.token,
        'content': this.state.currentText
      },
      success:(data) => {
        var tempArr = this.state.posts.slice();
        tempArr.unshift(data.response)
        this.setState({
          posts: tempArr,
          currentText: ''
        })
      }
    })
  },
  posting: function(event){
    this.setState({
      currentText: event.target.value
    })
  },
  //NOTES:
  // <span><input placeholder='Post...' type='text' ref={(input => {this.inputText = input})}/>
  // <input type='submit' value='Post'/></span>
  // does same thing as below
  render: function(){
    return(
      <div>
      {this.state.posts.map((x) => {
        return <div><h3>{x.poster.name}</h3>
        <p>{x.createdAt}</p>
        <p>{x.content}</p>
        <hr />
        </div>
      })}
      <form onSubmit={this.post}>
      <span><input placeholder='Post...' type='text' value={this.state.currentText} onChange={this.posting}/>
      <input type='submit' value='Post'/></span>
      </form>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('root'));
