var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Login = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: ''
    };
  },
  register: function() {
    this.props.navigate('registration');
  },
  loginSuccessful: function() {
    this.props.navigate('posts');
  },
  inputChange: function(event) {
    var x = {};
    x[event.target.id] = event.target.value;
    this.setState(x);
  },
  loginClick: function(event) {
    var self = this;
    event.preventDefault();
    $.ajax({
      url:'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      method: 'post',
      data: {
        email: this.state.email,
        password: this.state.password
      },
      success: function(data) {
        self.props.tokenStore(data.response.token);
        self.props.navigate('posts');
      }
    });
  },
  render: function() {
    return (
      <div className = "container">
        <h1>Login to "Facebook"</h1>
        <form>
          <div className="form-group">
            <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.inputChange} value={this.state.emailInput}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.inputChange} value={this.state.passwordInput}/>
          </div>
          <button type="submit" onClick={this.loginClick} className="btn btn-default">Login</button>
        </form>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
});

var Registration = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };
  },
  toLogin: function() {
    this.props.navigate('login');
  },
  inputChange: function(event) {
    var x = {};
    x[event.target.id] = event.target.value;
    this.setState(x);
  },
  registerClick: function(event) {
    var self = this;
    event.preventDefault();
    $.ajax({
      url:'https://horizons-facebook.herokuapp.com/api/1.0/users/register',
      method: 'post',
      data: {
        fname: this.state.firstName,
        lname: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      },
      success: function(data) {
        self.props.navigate('login');
      },
      error: function(err) {
        console.error(err);
      }
    });
  },
  render: function() {
    return (
      <div className = "container">
        <h1>Login to "Facebook"</h1>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="email" placeholder="Email" onChange={this.inputChange} value={this.state.emailInput}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.inputChange} value={this.state.passwordInput}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={this.inputChange} value={this.state.firstNameInput}/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={this.inputChange} value={this.state.lastNameInput}/>
          </div>
          <button type="submit" onClick={this.registerClick} className="btn btn-default">Register</button>
        </form>
        <button onClick={this.toLogin}>Back To Login</button>
      </div>
    );
  }
});

var Posts = React.createClass({
  getInitialState: function() {
    return {
      posts: [],
      commentInput: '',
      postInput: ''
    };
  },
  componentDidMount: function() {
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'get',
      data: {
        token: self.props.token
      },
      success: function(data) {
        self.setState({
          posts: data.response
        });
      }
    });
  },
  postPost: function(event) {
    var self = this;
    event.preventDefault();
    $.ajax({
      url:'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'post',
      data: {
        token: self.props.token,
        content: self.state.postInput
      },
      success: function(data) {
        self.props.navigate('posts');
        var temp = self.state.posts;
        temp.unshift(data.response);
        self.setState({
          posts: temp
        });
      },
      error: function(err) {
        console.error(err);
      }
    });
  },
  postComment: function(id, event) {
    var self = this;
    event.preventDefault();
    $.ajax({
      url:'https://horizons-facebook.herokuapp.com/api/1.0/posts/comments/' + id,
      method: 'post',
      data: {
        token: self.props.token,
        content: self.state.commentInput
      },
      success: function(data) {
        var newPosts = self.state.posts.map(function(x){
          if (x._id === id){
            return data.response;
          }
          return x;
        });
        self.setState({
          posts: newPosts
        });
      },
      error: function(err) {
        console.error(err);
      }
    });
  },
  like: function(id, event) {
    var self = this;
    event.preventDefault();
    $.ajax({
      url:'https://horizons-facebook.herokuapp.com/api/1.0/posts/likes/' + id,
      method: 'get',
      data: {
        token: self.props.token,
      },
      success: function(data) {
        var newPosts = self.state.posts.map(function(x){
          if (x._id === id){
            return data.response;
          }
          return x;
        });
        self.setState({
          posts: newPosts
        });
      },
      error: function(err) {
        console.error(err);
      }
    });
  },
  logout: function(event) {
    var self = this;
    event.preventDefault();
    $.ajax({
      url:'https://horizons-facebook.herokuapp.com/api/1.0/users/logout' + event.target.id,
      method: 'get',
      data: {
        token: self.props.token,
      },
      success: function(data) {
        self.props.tokenStore('');
        self.props.navigate('login');
      },
      error: function(err) {
        console.error(err);
      }
    });
  },
  inputChange: function(event) {
    var x = {};
    x[event.target.id] = event.target.value;
    this.setState(x);
  },
  revealReply: function() {

  },
  render: function() {
    var self = this;
    var posts = this.state.posts;
    posts = posts.map(function(post, i) {
      return (
        <div key={post._id} className="postContainer" id={post._id}>
          <div className="post">
            <h2 className="postName">{post.poster.name}</h2>
            <h5 className="postTime">{post.createdAt}</h5>
            <p className="postContent">{post.content}</p>
          </div>
          <div className="breakLine"></div>
          <div className="postReplyCountContainer">
            <h2 className="postReplyCount">{post.comments.length} Replies</h2>
            <h2 className="postLikeCount">{post.likes.length} Likes</h2>
          </div>
          {post.comments.map(function(comment, i) {
            return (
              <div key={i}>
                <h4>{comment.poster.name}</h4>
                <h5>{comment.createdAt}</h5>
                <p>{comment.content}</p>
              </div>
            );
          })}
          <button name="likeButton" className="glyphicon glyphicon-thumbs-up" onClick={self.like.bind(null, post._id)}></button>
          <button name="replyButton" className="replyButton">Reply</button>
          <div id={post._id} onClick={self.revealReply} className="replyContentContainer">
            <input type="text" id={"commentInput"} placeholder="Type your comment here..." onChange={self.inputChange}></input>
            <button type="button" onClick={self.postComment.bind(null, post._id)}>Confirm</button>
          </div>
        </div>
      );
    });
    return (
      <div className = "container">
        <div>
          <form>
            <input type="text" id="postInput" className="postInput" onChange={self.inputChange} value={self.state.postInput}></input>
            <button type="button" name="postButton" className="postButton" onClick={self.postPost}>Post</button>
          </form>
        </div>
        {posts}
        <div>
          <button type="button" name="logout" onClick={self.logout}>Logout</button>
        </div>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      page: 'login',
      token: ''
    };
  },
  navigate: function(newPage) {
    this.setState({
      page: newPage
    });
  },
  token: function(token) {
    this.setState({
      token: token
    });
  },
  render: function() {
    var page;
    if (this.state.page === 'login') page = <Login tokenStore={this.token} navigate={this.navigate}/>;
    if (this.state.page === 'registration') page = <Registration navigate={this.navigate}/>;
    if (this.state.page === 'posts') page = <Posts token={this.state.token} tokenStore={this.token} navigate={this.navigate}/>;
    return (
      <div>
        {page}
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
