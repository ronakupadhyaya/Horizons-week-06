var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

ReactDOM.render(<h1>ASUUHHH</h1>, document.getElementById('root'));

var App = React.createClass({
  getInitialState: function(){
    return{
      page: 'login',
      loginToken:'',
    };
  },
  navigate: function(newPage){
    this.setState({
      page:newPage
    });
  },
  login: function(loginToken){
    this.setState({
      loginToken:loginToken
    });
  },
  render: function(){
    var main;
    if (this.state.page === 'login'){
      main = <Login login={this.login} navigate={this.navigate}/>;
    } else if (this.state.page === 'registration'){
      main = <Registration navigate = {this.navigate} />; //wasn't specified in instructions
    } else if (this.state.page === 'posts'){
      main = <Posts loginToken = {this.state.loginToken} navigate = {this.navigate} />;
    }
    return(
      <div>
        {main}
      </div>
    );
  }
});

var Login = React.createClass({
  getInitialState: function(){
    return{
      email: "",
      password:""
    };
  },
  register: function(){
    console.log("HULLO");
    this.props.navigate('registration');
  },
  handleChangeEmail(event){
    this.setState({email:event.target.value});
  },
  handleChangePassword(event){
    this.setState({password:event.target.value});
  },
  handleSubmit(event){
    event.preventDefault();
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/users/login',
      method:'POST',
      data:{
        email: this.state.email,
        password: this.state.password
      },
      success: function(data){
        alert("ASUH");
        this.setState({email:this.state.email, password: this.state.password});
        this.props.navigate("posts");
        this.props.login(data.response.token);
      }.bind(this)
    });
  },
  render: function(){
    return(
      <div>
        <h1> Login to ClurBook</h1>
        <form onSubmit = {this.handleSubmit}>
          <label>
            Username:
            <input type = "text" value = {this.state.email} onChange = {this.handleChangeEmail} />
            </label>
          <label>
            Password:
              <input type = "password" value = {this.state.password} onChange = {this.handleChangePassword} />
          </label>
          <button className = "btn btn-default" type="Submit">Login</button>
        </form>
        <button onClick = {this.register}>Register</button>
      </div>
    );
  }
});

var Registration = React.createClass({
  getInitialState: function(){
    return{
      email: "",
      password:"",
      fname: "",
      lname:"",
      login: this.props.login
    };
  },
  handleChangeEmail(event){
    this.setState({email:event.target.value});
  },
  handleChangePassword(event){
    this.setState({password:event.target.value});
  },
  handleChangeFname(event){
    this.setState({fname:event.target.value});
  },
  handleChangeLname(event){
    this.setState({lname:event.target.value});
  },
  handleSubmit(event){
    event.preventDefault();
    $.ajax({
      url: ' https://horizons-facebook.herokuapp.com/api/1.0/users/register',
      method:'POST',
      data:{
        email: this.state.email,
        password: this.state.password,
        fname: this.state.fname,
        lname: this.state.lname

      },
      success: function(data){
        alert("ASUH");
        this.setState({fname: this.state.fname, lname: this.state.lname,email:this.state.email, password: this.state.password});
        this.props.navigate("login");

      }.bind(this)
    });
  },
  render: function(){
    return(
      <div>
      <h1> Register for ClurBook</h1>
      <form onSubmit = {this.handleSubmit}>
      <label>
          First Name:
          <input type = "text" value = {this.state.fname} onChange = {this.handleChangeFname} />
      </label>
      <label>
          Last Name:
          <input type = "text" value = {this.state.lname} onChange = {this.handleChangeLname} />
      </label>
        <label>
            Username:
            <input type = "text" value = {this.state.email} onChange = {this.handleChangeEmail} />
        </label>
        <label>
            Password:
            <input type = "password" value = {this.state.password} onChange = {this.handleChangePassword} />
        </label>
              <button className = "btn btn-default" type="Submit">Register</button>

        </form>


      </div>
    );
  }
});
var Posts = React.createClass({
  getInitialState:function(){
    return{
      text:"",
      posts:[]
    };

  },
  handleChangePost(event){
    this.setState({text:event.target.value});
  },
  componentDidMount: function(){
    $.ajax({
      url: 'https://horizons-facebook.herokuapp.com/api/1.0/posts',
      method:'GET',
      data:{
        "loginToken": this.props.loginToken
      },
      success: function(data){
        console.log(data);
        alert("ASUH posts");
        this.setState({posts:data.response});
        // this.props.navigate("login");

      }.bind(this)
    });
  },
  handleSubmit: function(){

  },
  render: function(){
    return(
      <div>
      <h1> Register for ClurBook</h1>
      <form onSubmit = {this.handleSubmit}>
      <label>

          Enter your Clur Post:
          <input type = "text" value = {this.state.text} onChange = {this.handleChangePost} />
      </label>

              <button className = "btn btn-default" type="Submit">submit dat post bruhh</button>

        </form>


      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
