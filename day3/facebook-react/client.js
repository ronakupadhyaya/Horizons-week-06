var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

//----------------------REGISTRATION----------------------
var Registration = React.createClass({
  getInitialState: function() {
    return ({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  },
  enterName: function() {

  },
  change: function(e) {
    console.log('Etarget:', e.target.value);
    var whichField = {};
    whichField[e.target.id] = e.target.value;
    this.setState(whichField);

  },
  login: function() {
    this.props.navigate('login');
  },
  registering: function(e) {
    e.preventDefault();
    console.log(this.state.firstName);
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/register',
      method: 'post',
      data: {
        fname: this.state.firstName,
        lname: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      },
      success: function(result) {
        console.log(result);
        this.props.navigate('login');
      }.bind(this),
      error: function(err) {

      }
    });
  },
  render: function() {
    return (
      <form>
        <div>
          <input onChange={this.change} id="firstName" placeholder="First Name" value={this.state.firstName} type="text" />
          <input onChange={this.change} id="lastName" placeholder="Last Name" value={this.state.lastName} type="text" />
        </div>
        <div>
          <input onChange={this.change} id="email" placeholder="Email" value={this.state.email} type="text" />
          <input onChange={this.change} id="password" placeholder="Password" value={this.state.password} type="password" />
        <div>
          <button onClick={this.registering}>Register</button>
        </div>
        <div>
          <button onClick={this.login}>Back to login</button>
        </div>
        </div>
      </form>
    );
  }

});

//----------------------LOGIN----------------------
var Login = React.createClass({
  getInitialState: function() {
    return ({
      username:'',
      password:''
    });
  },
  enterUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },
  enterPwd: function(e) {
    this.setState({
      password: e.target.value
    });
  },
  logging: function(e) {
    e.preventDefault();
    console.log('----username: ', this.state.username);
    console.log('----password: ', this.state.password);
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      method: 'post',
      data: {
        'email': this.state.username,
        'password': this.state.password
      },
      success: function(result) {
        console.log('DATA: ', result);
        this.props.getToken(result.response.token);
        this.props.navigate('posts');
      }.bind(this),
      error: function(err) {
        console.log('Error: ', err);
      }
    });
  },
  register: function() {
    // this.setState({
    //   page: 'registration'
    // });
    this.props.navigate('registration');
  },
  render: function() {
    //this.props.navigate(this);
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input onChange={this.enterUser} placeholder="Email" value={this.state.username} type="text" />
          <input onChange={this.enterPwd} placeholder="Password" value={this.state.password} type="password" />
          <div><button onClick={this.logging}>Login</button></div>
        </form>
        <form>
          <button onClick={this.register}>Register</button>
        </form>
      </div>
    );
  }
});

//----------------------POSTS----------------------
var Posts = React.createClass({
  getInitialState: function() {
    return ({
      posts:[],
      newPost: '',
      newComment: ''
    });
  },
  componentDidMount: function() {
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'get',
      data: {
        token: this.props.token
      },
      success: function(result) {
        console.log('RESULT: ', result.response);
        console.log('COmments: ', result.response.comments);
        this.setState({
          posts: result.response
        });

      }.bind(this),
      error: function(err) {
        console.log('Error: ', err);
      }
    });
  },
  typing: function(e) {
    this.setState({
      newPost: e.target.value
    });
  },
  addPost: function(e) {
    e.preventDefault();
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'post',
      data: {
        token: this.props.token,
        content: this.state.newPost
      },
      success: function(result) {
        console.log('POSTED result: ', result);
        var temp = this.state.posts;
        temp.unshift(result.response);
        this.setState({
          posts: temp,
          newPost: ''
        });
      }.bind(this),
      error: function(err) {
        console.log('Error: ', err);
      }
    });
  },
  addLike: function(id, e) {
    e.preventDefault();
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts/likes/' + id,
      method: 'post',
      data: {
        token: this.props.token
      },
      success: function(result) {

      }.bind(this),
      error: function(err) {
        console.log('Error: ', err);
      }
    });
  },
  typingComment: function(item, e) {
    console.log(e.target.value);
    this.setState({
      newComment: e.target.value
    });
  },
  addComment: function(id, e) {
    e.preventDefault();
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts/comments/' + id,
      method: 'post',
      data: {
        token: this.props.token,
        content: this.state.newComment
      },
      success: function(result) {
        console.log('comment result: ', result);

      }.bind(this),
      error: function(err) {
        console.log('Error: ', err);
      }
    });
  },
  render: function() {
    console.log('posts: ', this.state.posts);
    var p = this.state.posts.map((item, i) =>
      <div><li key={i}><b>{item.poster.name}</b>: {item.content}</li>
      <div>{item.likes.length} likes</div>
      {item.comments.map(function(eachComment) {
        return <div>{eachComment.content}</div>;
      })}
      <button onClick={this.addLike.bind(this, item._id)}>Like</button>
      <form>
        <input key={i} onChange={this.typingComment.bind(this, item)} placeholder="comment on dis post" value={this.state.newComment}/>
        <button onClick={this.addComment.bind(this, item._id)}>Comment</button>
      </form>
      </div>);

    return (
      <div>
      <ul>{p}</ul>
      <div>
        <form>
          <input onChange={this.typing} value={this.state.newPost} placeholder="type sumsing"/>
          <button onClick={this.addPost}>Post</button>
        </form>
      </div>
      </div>
    );
  }

});

var App = React.createClass({
  getInitialState: function() {
    return ({
      page: 'login',
      token: ''
    });
  },
  getToken: function(t) {
    this.setState({
      token: t
    });
  },
  navigate: function(newPage) {
    this.setState({
      page: newPage
    });
  },
  render: function() {
    var main;
    if (this.state.page === 'login') {
      main = <Login getToken={this.getToken} navigate={this.navigate}/>;
    }
    else if (this.state.page === 'registration') {
      main =  <Registration navigate={this.navigate}/>;
    }
    else if (this.state.page === 'posts') {
      main =  <Posts token={this.state.token} navigate={this.navigate}/>;
    }
    return (<div>
      <h1>hi</h1>
      {main}
      </div>);
  }
});


ReactDOM.render(<App />, document.getElementById('root'));
