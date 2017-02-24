var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
// var ScrollBox = require('react-scroll-box').ScrollBox; // ES5
// import {ScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box'; // ES6


var App = React.createClass({
  getInitialState: function() {
    return {
      page: 'login'
    };
  },
  navigate: function(newPage){
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
    } else if (this.state.page === 'posts') {
      main = <Posts navigate = {this.navigate} />;
    }
    return (
      <div>
      {main}
      </div>
    );
  }
});

///////////////////////////////////////////////////////LOGIN///////////////////////////////////////////////////////
var Login = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: ''
    };
  },
  register: function(event) {
    event.preventDefault();
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
        'email': self.state.email,
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
  typingEmail: function(event) {
    this.setState({
      email: event.target.value
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
        <p><input type="text" value={this.state.email} onChange={this.typingEmail} placeholder="Email" /></p>
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


///////////////////////////////////////////////////////REGISTRATION///////////////////////////////////////////////////////
var Registration = React.createClass({
  getInitialState: function() {
    return {
      fname: '',
      lname: '',
      email: '',
      password: ''
    };
  },
  typingfname: function(event) {
    this.setState({
      fname: event.target.value
    });
  },
  typinglname: function(event) {
    this.setState({
      lname: event.target.value
    });
  },
  typingEmail: function(event) {
    this.setState({
      email: event.target.value
    });
  },
  typingPassword: function(event) {
    this.setState({
      password: event.target.value
    });
  },
  register: function(event) {
    var self = this;
    event.preventDefault();
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
        console.log(data);
        // use local storage instead of local variables
        // to remove token, use localStorage.remove()
        self.props.navigate('login');
      }
    });
  },
  render: function() {
    return (
      <div>
        <h1>Register to "Facebook"</h1>

        <form onSubmit={this.register}>
        <p><input type="text" value={this.state.fname} onChange={this.typingfname} placeholder="First Name" /></p>
        <p><input type="text" value={this.state.lname} onChange={this.typinglname} placeholder="Last Name"/></p>
        <p><input type="text" value={this.state.email} onChange={this.typingEmail} placeholder="Email" /></p>
        <p><input type="Password" value={this.state.password} onChange={this.typingPassword} placeholder="Password"/></p>
        <p><button>Register</button></p>
        </form>

        <form onSubmit={this.login}>
        <p><button onClick={this.login}>Login</button></p>
        </form>

      </div>
    );
  }
});

///////////////////////////////////////////////////////POSTS///////////////////////////////////////////////////////

var Posts = React.createClass({
  getInitialState: function() {
    return {
      posts: [],
      currentText: '',
      currentCommentText: ''
    };
  },
  componentDidMount: function() {
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'GET',
      data: {
        token: localStorage.getItem('token')
      },
      success: function(data){
        //////
        console.log(data);
        self.setState({
          posts: data.response
        });
        // use local storage instead of local variables
        // to remove token, use localStorage.remove()
        self.props.navigate('posts');
      }
    });
  },
  typingPost: function(event) {
    event.preventDefault();
    this.setState({
      currentText: event.target.value
    });
  },
  submit: function(event){
    var self = this;
    event.preventDefault();
    console.log(event);
    // push a message here or something
    // use AJAX to post
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'POST',
      data: {
        'token': localStorage.getItem('token'),
        'content': this.state.currentText
      },
      success: function(data) {
        console.log(data);
        var thisArr = self.state.posts;
        thisArr.unshift(data.response);
        self.setState({
          posts: thisArr,
          currentText: ''
        });
        console.log('successful post', self.state.posts);
      }
    });
  },
  clickLike: function(event) {
    event.preventDefault();
    var currentId = event.target.getAttribute('id');
    // var self = this; currently there is no need for self because the arrow function in success binds automatically
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts/likes/' + event.target.getAttribute('id'),
      method: 'GET',
      data: {
        'token': localStorage.getItem('token')
      },
      success:(data) => { // assign modified array to new array
        var newPosts = this.state.posts.map(function(item){  // iterate through each post
          if (item._id === currentId){ // if iterated post matches clicked post
            return data.response; // update particular element with new like
          }
          return item; // if not matched, don't do anything
        });
        this.setState({
          posts: newPosts
        });
      }
    });
  },
  typingComment: function(event) {
    event.preventDefault();
    this.setState({
      currentCommentText: event.target.value
    });
  },
  comment: function(event){
    var currentId = event.target.getAttribute('id');
    // var self = this; currently there is no need for self because the arrow function in success binds automatically
    event.preventDefault();
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts/comments/' + event.target.getAttribute('id'),
      method: 'POST',
      data: {
        'token': localStorage.getItem('token'),
        'content': this.state.currentCommentText
      },
      // success: function(data) {
        // console.log('comment', data);
        // console.log('self state posts', self.state.posts);
        // var thisArr = self.state.posts;
        // thisArr.unshift(data.response.comments);
        // self.setState({
        //   posts: thisArr,
        //   currentText: ''
        // });

      // }
      success:(data) => {
        var newPosts = this.state.posts.map(function(item){
          if (item._id === currentId){
            return data.response;
          }
          return item;
        });
        this.setState({
          posts: newPosts
        });
      }
    });
  },
  render: function() {
    return (
      <div>
        <h1>Newsfeed</h1>

        <form onSubmit={this.submit}>
        <input type="text" value={this.state.currentText} onChange={this.typingPost} placeholder="Enter some great content"></input>
        <button>Submit</button>
        </form>

        <div style = {{overflow: "scroll", height: "86vh"}}>
        {this.state.posts.map((x) =>
          <div>
            <h4>Name: {x.poster.name}</h4>
            <h2>{x.content}</h2>
            <h5>{x.createdAt}</h5>
            <button id={x._id} onClick={this.clickLike}>Likes: {x.likes.length}</button>

            <form id={x._id} onSubmit={this.comment}>
            <input type="text" onChange={this.typingComment} placeholder="Enter a comment b"></input>
            <button>Submit</button>
            </form>
            <h3>Comments: </h3><div style = {{overflow: "scroll", height: "100px", border: "1px solid black"}}>{x.comments.map((y) => <h5>{y.poster.name}: {y.content} <p>{y.createdAt}</p></h5>)}</div>

          </div>
        )}
        </div>
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('root'));
