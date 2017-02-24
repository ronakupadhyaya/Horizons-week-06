var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Login = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    }
  },
  register: function() {
    console.log('called register');
    this.props.navigate('registration')
  },
  userChange: function(event) {
    this.setState({
      username: event.target.value
    })
  },
  passChange: function(event) {
    this.setState({
      password: event.target.value
    })
  },
  handleSubmit: function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      method: 'POST',
      data: {
        "email": this.state.username,
        "password": this.state.password
      },
      success: function(data) {
        this.props.tokenize(data.response.token);
        this.props.navigate('posts');
      }.bind(this)
    })
  },
  render: function() {
    return (
      <div>
        <div className="jumbo" id="top">
          <a href="#top"><img id="corner-logo" src="./public/horizbook logo trans.png" alt="horizbook logo"></img></a>
          <div className="container">
            <h1>Hello.</h1>
            <p className="subtitle">Welcome to the world&#39;s coolest social network.</p>
            <p><a id="learn-more-button" href="#login-section" role="button">CHECK IT OUT</a></p>
          </div>
        </div>
        <section id="login-section">
          <div className="fullscreen-bg">
            <video loop="loop" muted="" autoPlay="autoplay" poster="./public/bg2.mp4" className="fullscreen-bg-video">
              <source src="./public/bg2.mp4" type="video/mp4" />
            </video>
          </div>
          <img id="center-logo" src="./public/horizbooktrans@2x.png" alt="horizbook logo"></img>
          <form id='login-form' onSubmit={this.handleSubmit} method="POST">
            <input id="login-email" className="login login-input" type="text" name="email" value={this.state.username} onChange={this.userChange} placeholder="Username" />
            <input id="login-password" className="login login-input" type="password" name="password" value={this.state.password} onChange={this.passChange} placeholder="Password" />
            <div id="login-buttons">
              <button id="login-button" className="login button" name="login" type="submit">Login</button>
              <button id="new-button" className="login button" name="register" onClick={this.register}>I&#39;m new</button>
            </div>
          </form>
        </section>
      </div>
    )
  }
})

var Registration = React.createClass({
  getInitialState: function() {
    return {
      fname: '',
      lname: '',
      username: '',
      password: ''
    }
  },
  firstChange: function(event) {
    this.setState({
      fname: event.target.value
    })
  },
  lastChange: function(event) {
    this.setState({
      lname: event.target.value
    })
  },
  userChange: function(event) {
    this.setState({
      username: event.target.value
    })
  },
  passChange: function(event) {
    this.setState({
      password: event.target.value
    })
  },
  handleSubmit: function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/register',
      method: 'POST',
      data: {
        "fname": this.state.fname,
        "lname": this.state.lname,
        "email": this.state.username,
        "password": this.state.password
      },
      success: function() {
        this.props.navigate('login');
      }.bind(this)
    })
  },
  render: function() {
    return (
      <section id="login-section">
        <div className="fullscreen-bg">
          <video loop="loop" muted="" autoPlay="autoplay" poster="./public/bg2.mp4" className="fullscreen-bg-video">
            <source src="./public/bg2.mp4" type="video/mp4" />
          </video>
        </div>
        <a href="#top"><img id="corner-logo" src="./public/horizbook logo trans.png" alt="horizbook logo"></img></a>
        <img id="center-logo-2" src="./public/horizbooktrans@2x.png" alt="horizbook logo"></img>
        <form id='login-form' onSubmit={this.handleSubmit} method="POST">
          <input id="fname-input" className="login login-input" type="text" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.firstChange} />
          <input id="lname-input" className="login login-input" type="text" name="lname" placeholder="Last Name" value={this.state.lname} onChange={this.lastChange} />
          <input id="login-email" className="login login-input" type="text" name="email" value={this.state.username} onChange={this.userChange} placeholder="Username" />
          <input id="login-password" className="login login-input" type="password" name="password" value={this.state.password} onChange={this.passChange} placeholder="Password" />
          <div id="login-buttons">
            <button className="register button" id="reg-button" type="button" name="register">Register</button>
          </div>
        </form>
      </section>
    )
  }
})

var Posts = React.createClass({
  getInitialState: function() {
    return {
      posts: [],
      newPost: ''
    }
  },
  componentDidMount: function() {
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'GET',
      data: {
        "token": this.props.token
      },
      success: function(posts) {
        this.setState({
          posts: posts.response
        })
      }.bind(this)
    })
  },
  postChange: function(event) {
    this.setState({
      newPost: event.target.value
    })
  },
  handleSubmit: function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method: 'POST',
      data: {
        "token": this.props.token,
        "content": this.state.newPost
      },
      success: function(postObject) {
        var newPosts = this.state.posts;
        newPosts.unshift(postObject.response);
        this.setState({
          posts: newPosts,
          newPost: ''
        })
      }.bind(this)
    })
  },
  handleLike: function(id) {
    event.preventDefault();
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts/likes/' + id,
      method: 'GET',
      data: {
        token: this.props.token
      },
      success: function(returned) {
        var updatedPosts = [];
        this.state.posts.map(function(post) {
          if(post._id === returned.response._id) {
            var index = this.state.posts.indexOf(post);
            updatedPosts = this.state.posts;
            if(index !== -1) {
              updatedPosts[index] = returned.response;
              this.setState({
                posts: updatedPosts
              })
            }
          }
        }.bind(this))
      }.bind(this)
    })
  },
  render: function() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} method="POST">
        <span><input type="text" value={this.state.newPost} onChange={this.postChange} placeholder="What's on your mind?"/>&nbsp;<button type="submit">Post</button></span>
      </form>
      {this.state.posts.map((postObject) =>
        <div style={{border:"2px solid black"}}>
          <div><span>{postObject.poster.name}</span>&nbsp;<span>{postObject.createdAt}</span></div>
          <br/>
          <div>{postObject.content}</div>
          <br/>
          <span>{postObject.likes.length} Likes</span>&nbsp;<span>{postObject.comments.length} Comments</span>
          <div>
          {postObject.comments.map((comment) =>
            <div>
              <span>{comment.poster.name}: {comment.createdAt}</span>
              <div>{comment.content}</div>
            </div>
          )}
          </div>
          <div>
            <span><button onClick={this.handleLike.bind(null, postObject._id)}>Like</button>&nbsp;<button>Reply</button></span>
          </div>
          <br/>
        </div>
      )}
      </div>
    )
  }
})

var App = React.createClass({
  getInitialState: function() {
    return {
      page: 'login',
      token: ''
    }
  },
  navigate: function(newPage) {
    this.setState({
      page: newPage
    })
  },
  tokenize: function(token) {
    this.setState({
      token: token
    })
  },
  render: function() {
    var main;
    if(this.state.page === 'login') {
      main = <Login navigate={this.navigate} tokenize={this.tokenize} />
    } else if(this.state.page === 'registration') {
      main = <Registration navigate={this.navigate} />
    } else if(this.state.page === 'posts') {
      main = <Posts navigate={this.navigate} token={this.state.token} />
    }
    return (
      <div>
        {main}
      </div>
    )
  }

})

//week 2 stuff

$('#reg-form').hide();
$('#logout-button').hide();
$('#getposts-button').hide();
$('#reg-button').hide();

var input = "";
document.body.addEventListener('keypress', function(key) {
  input += String.fromCharCode(key.keyCode);
  if(input === 'horizons\r'){
    $('.jumbo').toggleClass('blueBack');
    $('#learn-more-button').toggleClass('blueText');
    if($('#favicon').attr('href') === './images/horizbook logo blue.png') {
      $('#favicon').attr('href', './images/horizbook logo.png');
    } else {
      $('#favicon').attr('href', './images/horizbook logo blue.png');
    }
    input = "";
  }
});

document.body.addEventListener('keyup',function(key){
    if(key.keyCode === 13) input = "";
});

$('#corner-logo').click(function() {
  $('.jumbo').toggleClass('blueBack');
  $('#learn-more-button').toggleClass('blueText');
  if($('#favicon').attr('href') === './images/horizbook logo blue.png') {
    $('#favicon').attr('href', './images/horizbook logo.png');
  } else {
    $('#favicon').attr('href', './images/horizbook logo blue.png');
  }
})

$('.progress-bar').attr('aria-valuenow', '0');
$('.progress-bar').attr('style', 'width: 0%');
$('.progress-bar').children('span').text('0% Complete');

  // $('#login-password').keydown(function() {
  //   if ($('#login-email').val().length !== 0) {
  //     $('#login-button').show('slow');
  //   }
  // })

$('#fname-input').keydown(function() {
  $('.progress-bar').attr('aria-valuenow', '25');
  $('.progress-bar').attr('style', 'width: 25%');
  $('.progress-bar').children('span').text('25% Complete');
  $('.progress-bar').css('background-color', '#fc5a5f');
  $('.progress').css('border', '5px solid #fc5a5f');
});

$('#lname-input').keydown(function() {
  $('.progress-bar').attr('aria-valuenow', '50');
  $('.progress-bar').attr('style', 'width: 50%');
  $('.progress-bar').children('span').text('50% Complete');
  $('.progress-bar').css('background-color', '#e67e22');
  $('.progress').css('border', '5px solid #e67e22');
});

$('#email-input').keydown(function() {
  $('.progress-bar').attr('aria-valuenow', '75');
  $('.progress-bar').attr('style', 'width: 75%');
  $('.progress-bar').children('span').text('75% Complete');
  $('.progress-bar').css('background-color', '#f1c40f');
  $('.progress').css('border', '5px solid #f1c40f');
});

$('#password-input').keydown(function() {
  $('.progress-bar').attr('aria-valuenow', '100');
  $('.progress-bar').attr('style', 'width: 100%');
  $('.progress-bar').children('span').text('100% Complete');
  $('.progress-bar').css('background-color', '#27ae60');
  $('.progress').css('border', '5px solid #27ae60');
  $('#reg-button').show('slow');
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    var hash = $(this).attr('href');
    // Make sure this.hash has a value before overriding default behavior
    console.log(hash)
    if (hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        //  window.location.hash = "#start";
      });
    } // End if
  });
});

ReactDOM.render(<App />, document.getElementById('root'));
