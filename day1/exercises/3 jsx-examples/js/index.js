// Write the following using JSX syntax

// ex1: create a heading
// create a 'h1' element that displays 'Hello World!'
// render the above element at id 'ex1'

// YOUR CODE HERE
ReactDOM.render(<h1>Hello World</h1>, document.getElementById('ex1'));


// ex2: create a heading w/children
// create a 'ul' element that displays a list of
// your favorite musical artists
// render the above element at id 'ex2'

// YOUR CODE HERE
ReactDOM.render(
	<ul>
	<li>Darwish</li>
	<li>Abhi</li>
	</ul>,
	document.getElementById('ex2'));

// ex3: create a link
// create a 'a' element called 'Horizons'
// that links to 'https://www.joinhorizons.com'
// render the above element at id 'ex3'

// YOUR CODE HERE
ReactDOM.render(
	<a href = "http://google.com/">Google</a>,
	document.getElementById('ex3'));


// ex4: create a heading w/id
// create a 'h1' element that has the id 'title'
// and text 'Horizons'
// render the above element at id 'ex1'
ReactDOM.render(
	<h1 id="title">Horizons</h1>,
	document.getElementById('ex1'));
// if the rendered element has the correct id it
// will be red and HUUUUUUUUUUUUGE #Trump

// YOUR CODE HERE

// ex5: create a div w/two child divs
//   - Taylor w/ class 'taylor'
//   - Beyonce w/ class 'bae'

// if the rendered element has the correct class
// you will see the baes

// YOUR CODE HERE
ReactDOM.render(
	<div id="artists">
	<div className="taylor">
	</div>
	<div className="bae">
	</div>
	</div>,
	document.getElementById('ex5'));

// ex6: create a BOX
// create a div element (200px x 200px)
// using inline styles give it a 20px solid red border
// and a blue background

// YOUR CODE HERE

ReactDOM.render(<div style={{height: '200px',
	width: '200px',
	border: '20px solid red',
	backgroundColor: 'blue'
	>}}>
	</div>,
	document.getElementById('ex6'));



var RedHeading = React.createClass({
	render: ()=> {
		return <h1 style={{color: "red"}}>Horizons Red</h1>;
	}
});


// {JavaScript goes here}

// ex1. Adding styles
// We have created a heading for you. It contains
// a basic JS sum. Insert the correct brackets to
// make the output be "The result of the sum is: 5"
var a=3;
var b=8;
ReactDOM.render(
	<h2>The result of the sum is: {a+b}</h2>,
	document.getElementById('ex1')
	);

// ex2. Embedded expression
// We have created a heading for you. It should display
// "This is a nice title", but it displays the variable 
// name instead. Fix it. 
var text="This is a nice title"
ReactDOM.render(
	<h2>{text}</h2>,
	document.getElementById('ex2')
	);

// ex3. Adding styles
// We have created an object with styles for you. Add 
// the style tag to our header to color the text. 
// Right now, it is throwing an error. Fix it. 
var styleObject = {color: "pink"};
ReactDOM.render(
	<h2 style={styleObject}>This should be Pink</h2>,
	document.getElementById('ex3')
	);

// ex4. Fixing added styles
// We have created a heading for you. It should color
// the text in green. Instead, it is throwing an error.
// Fix it. 
ReactDOM.render( 
	<h2 style={{color: "green"}}>This should be Green</h2>,  
	document.getElementById('ex4')
	);



// Create a ColorfulCustomHeading React class
// that returns a 'h1' heading where the text
// and color are passed in through props

// YOUR CODE HERE
var ColorfulCustomHeading = React.createClass({
	render: function(){
		return <h1 style={{color: this.props.color}}> {this.props.text}</h1>;
	}
});

// DO NOT MODIFY
ReactDOM.render(<ColorfulCustomHeading color="red" text="Red Title"/>,	
	document.getElementById('red'));
ReactDOM.render(<ColorfulCustomHeading color="blue" text="Blue Title"/>,
	document.getElementById('blue'));




var CustomList = React.createClass({
	render: function() {
		var children = [];
		for (var i = 0; i < this.props.data.length; i++) {
			children.push(<li>{this.props.data[i]}</li>);
		}
		return <ul>{children}</ul>;
	}
})

var CustomList = React.createClass({
	render: function(){
		return <ul>{
			this.props.data.map((item) => <li>{item}</li>)
		}
		</ul>
	}
});


// ex1. Create a React class called MyButton
// that should render a button that logs
// 'clicked!' when pressed

// YOUR CODE HERE

// DO NOT MODIFY
// check if this works by clicking the button and checking
// whether or not 'clicked!' was logged in the console
var MyFirstButton = React.createClass({
	click: function() {
		console.log('click');
	},
	render: function() {
		return <button onClick={this.click}>Click me</button>;
	}
});

ReactDOM.render(<MyFirstButton />, document.getElementById('button'));



// ex2. Create a MyInputBox React class where you should render
// an input box that logs the value using event (event.target.value)

var MyInputBox = React.createClass({
	change: function(event) {
		console.log(event.target.value);
	},
	render: function() {
		return <input type="text" onChange={this.change} />;
	}
});

// DO NOT MODIFY
// check if this works by typing into the input box and
// checking if it gets immediately logged into the console
ReactDOM.render(<MyInputBox />, document.getElementById('input'));


var Counter = React.createClass({
	getInitialState: function() {
		return {count: 0};
	},
	click: function() {
		this.setState({count: this.state.count + 1});
	},
	render: function() {
		return <div>
		<button onClick={this.click}>Click me</button>
		<h1>Count: {this.state.count}</h1>
		</div>
	}
});

// getInitalState + setState 

// Modify Counter so that it has an initial state of count=0
// use getInitialState to set this as soon as the controller
// is created. 

// Declare component methods "increase" and "decrease" using
// setState to increase/decrease the counter when the respective
// buttons are clicked
// Add handlers to the buttons to call the respective methods. 

var Counter = React.createClass({
	getInitialState: function() {
		return {count: 0};
	},s
	increase: function() {
		this.setState({count: this.state.count + 1});
	},
	decrease: function(){
		this.setState({count:this.state.count -1 });
	},
	render: function() {
		return <div>
		<button onClick={this.increase}>Increase Count</button>
		<button onClick={this.decrease}>Decrease Count</button>
		<h1>Count: {this.state.count}</h1>
		</div>
	}
});


// DO NOT MODIFY
ReactDOM.render(<Counter />, document.getElementById('blue'));

