var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var App = React.createClass({
  getInitialState: function(){
    return{
      page: 'login',
      token: null
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
    if (this.state.page === 'login'){
      main = <Login navigate = {this.navigate} token = {this.saveToken}/>
      // this.props.navigate('login')
    } else if (this.state.page === 'registration') {
      main = <Registration navigate = {this.navigate} />
    } else if (this.state.page === 'posts'){
      main = <Posts token = {this.state.token}/>
    }
    return (
      <div>{main}</div>
    )
  }
})


var Login = React.createClass({
  getInitialState: function(){
    return {
      email: '',
      password: ''
    }
  },
  register: function(){
    this.props.navigate('registration');
  },
  updateEmail: function(event){
    this.setState({
      email: event.target.value
    })
  },
  updatePassword: function(event){
    this.setState({
      password: event.target.value
    })
  },
  login: function(e){
    e.preventDefault();
    var self = this;
    $.ajax({
      method: 'POST',
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      data: {
        "email": self.state.email,
        "password": self.state.password
      },
      // success: (content)=>self.props.token(content.response.token)

      success: function(content){
        self.props.token(content.response.token);
        self.props.navigate('posts')
      }
    })
  },
  render: function(){
    return (
      <div>
      <h1>Login to Facebook!</h1>
      <form onSubmit={this.login}>
      <label>
      Email:
      <input type="text" name="email" value={this.state.email} onChange = {this.updateEmail} />
      </label>
      <label>
      Password:
      <input type="password" name="password" onChange = {this.updatePassword}/>
      </label>
      <input type="submit" value="Login"/>
      </form>
      <button onClick={this.register}>Register</button>
      </div>
    )
  }
})

var Registration = React.createClass({
  getInitialState: function(){
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  },
  updateEmail: function(event){
    this.setState({
      email: event.target.value
    })
  },
  updatePassword: function(event){
    this.setState({
      password: event.target.value
    })
  },
  updateFirstName: function(event){
    this.setState({
      firstName: event.target.value
    })
  },
  updateLastName: function(event){
    this.setState({
      lastName: event.target.value
    })
  },
  submitRegistration: function(e){
    e.preventDefault();
    var self = this;
    console.log(self.state.firstName)


    $.ajax({
      method: 'POST',
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/register',
      data: {
        "fname": self.state.firstName,
        "lname": self.state.lastName,
        "email": self.state.email,
        "password": self.state.password
      },
      success: function(){
        self.props.navigate('login');
      }
    })
  },
  render: function(){
    return (
      <form onSubmit = {this.submitRegistration}>
      <label>
      Email:
      <input type="text" name="email" onChange = {this.updateEmail}/>
      </label>
      <label>
      Password
      <input type="password" name="password" onChange = {this.updatePassword}/>
      </label>
      <label>
      First Name:
      <input type="text" name="firstName"  onChange = {this.updateFirstName}/>
      </label>
      <label>
      Last Name:
      <input type="text" name="lastName" onChange = {this.updateLastName}/>
      </label>
      <input type="submit" value = "Register" />
      </form>
      // <button type = "button" onClick = {this.submitRegistration}>Register</button>
    )
  }
})




var Posts = React.createClass({
  getInitialState: function(){
    return {
      posts: [],
      newPost: '',
      data: {}
    }
  },
  componentDidMount: function(){
    self = this;
    $.ajax({
      method: "GET",
      url: "https://horizons-facebook.herokuapp.com/api/1.0/posts",
      data: {token: self.props.token},
      success: function(posts){
        console.log('success')
        console.log(posts)
        self.setState({
          posts: posts.response,
          data: posts
        })
      }
    })
  },
  updatePost: function(event){
    this.setState({
      newPost: event.target.value
    })
  },
  submitPost: function(event){
    var self = this;
    event.preventDefault();
    // console.log(self.props.token);
    // console.log(self.state.newPost);
    // console.log("submitpost")
    $.ajax({
      method: "POST",
      url: "https://horizons-facebook.herokuapp.com/api/1.0/posts",
      data: {
        "token": self.props.token,
        "content": self.state.newPost
      },
      success: function(data){
        self.setState({
          posts: [data.response,...self.state.posts]
        })
      }
    })
  },
  likePost: function(id){
    console.log("id", id);
    //event.preventDefault();
    var self = this;
    $.ajax({
      method:"GET",
      url: "https://horizons-facebook.herokuapp.com/api/1.0/posts/likes/"
      ,

      success: function(data){

      }
    })
  },
  render: function(){
    return(
      <div>
          {this.state.posts.map((element)=>(<div>
            {element.content}
            <br />
            {element.poster.name}
            <br />
            {element.createdAt}
            <br />
            <button type = "button" id = {element._id} onClick = {this.likePost.bind(this, element._id)}>Like</button>
            <br />
            <br />
          </div>)
          )}
          <form onSubmit = {this.submitPost}>
          <label>
          <input type="text" placeholder = "What's on your mind?" name="newPost" onChange = {this.updatePost}/>
          </label>
          <input type="submit" value = "Post" />
          </form>
      </div>

    )
  }
})





ReactDOM.render(<h1>Hi <App/></h1>, document.getElementById('root'));
