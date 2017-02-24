var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

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
    console.log(event.target.value);
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
    console.log('events dude');
    console.log(event);
    console.log('eventstarget', event.target.getAttribute('id'));
    var self = this;
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts/likes/' + event.target.getAttribute('id'),
      method: 'GET',
      data: {
        'token': localStorage.getItem('token')
      },
      success: function(data) {
        // console.log('data', data);
        // var currentPosts = self.state.posts;
        // currentPosts.map(function(x){
        //   if(data.response._id === x._id){
        //     console.log('before', x);
        //     x.likes.push(data.response.likes);
        //     console.log('after', x);
        //   }
        // });
        // self.setState({
        //   posts: currentPosts
        // });
      }
    });
  },
  comment: function(event){
    
  },
  render: function() {
    return (
      <div>
        <h1>Newsfeed</h1>
        <table>
        {this.state.posts.map((x) => <tr><td>{x.content}</td><td>{x.poster.name}</td><td>{x.createdAt}</td><td>Likes: {x.likes.length}</td><button id={x._id} onClick={this.clickLike}>Like</button><button onClick={this.comment}>Comment</button></tr>)}
        </table>

        <form onSubmit={this.submit}>
        <input type="text" value={this.state.currentText} onChange={this.typingPost} placeholder="Enter some great content"></input>
        <button>Submit</button>
        </form>
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('root'));
