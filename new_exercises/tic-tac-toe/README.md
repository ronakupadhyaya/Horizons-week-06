# Make Tic Tac Toe

Today we will be making a Tic Tac Toe game in React - the "Hello World" equivalent for real programmers (saying "Hello world!" just isn't impressive enough anymore). By the end of this exercise you will have:
1. A clickable grid where our master strategists can place Xs and Os
1. A status text reflecting the state of the Game
1. A history panel that allows for time travel

Here are the part of the exercise:
1. Install React Development Tools
1. The Square Component
1. etc

## Part 1: Install React Development Tools
Install the React Developer Tools extension [here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).

This extension allows you to inspect React components, states, props etc, as your app is running. Use this often to make sure your components are behaving correctly!

We will be using [this codepen](https://codepen.io/josephch405/pen/RVdPQw) for this exercise.

## Part 2: The Square Component
### Goal
We want to design a React component representing a "grid" in our game, capable of displaying Xs and Os and responding to events.
### Steps
1. From the Board component, change ```renderSquare``` so that we pass a value to the Square:
  ```javascript
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
    ...
  }
  ```
1. Change the Square component so that the Square displays the passed-down prop:
  ```javascript
  class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }
  ```
  At this point, your app should look like this:

  ![](./img/img2.png)
1. Change the button so that when clicked, it'll display an alert saying "1337". Remember that for React components, the "onclick" property is actually "onClick", camel-case. Clicking the squares now should trigger a popup.
  ```javascript
  class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={() => alert('click')}>
          {this.props.value}
        </button>
      );
    }
  }
  ```
1. Since Square only uses the ```render``` method, we can turn it into a **functional component**. The general structure of a functional component looks like this, as an example:
  ```javascript
  function ComponentName(props){
    return(
      <div>
        //stuff here
      </div>
    );
  }
  ```

## Part 3: Lifting State Up
## Part 4: Taking Turns
### Goal
Now we have a game where player x (but not y) can place pieces (and thus always win). We'll have to nerf this - we want the players to take turns.

### Steps
1. Make a new boolean in the Board's state object called ```xIsNext``` - initialize it to ```true``` so that player x plays first.
  ```javascript
    class Board extends React.Component {
      constructor() {
        ...
        this.state = {
          ...
          xIsNext: true,
        };
      }
    }
  ```
1. Change the board component's ```handleClick``` so that
  1. The ```squares``` array is updated with the correct player piece
  1. xIsNext as a state variable is updated
```javascript
  handleClick(i){
    ...
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      ...
      xIsNext: !this.state.xIsNext,
    });
  }
```
1. Change the board component's ```render``` method so that the status updates correctly - ie it says "Next player: X" or "Next player: O"
```javascript
const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
```

At this point, you should be able to play through the game as expected - but without a proper endgame. Let's fix that.

## Part 5: Winner Calculation
### Goal
We want the game to stop when one of the players has made a line - one can have too much winning, after all. We want the status text to represent this state.

### Steps
1. Add ```calculateWinner``` to the end of your code - this is a help function that takes in an array representing a board and outputs a winner (x, o) or ```null``` if nobody has won yet.
  ```javascript
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  ```
1. Update the ```render``` code in Board so that we first use ```calculateWinner``` to check if someone has won, then update the status accordingly.
  ```javascript
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
  }
  ```
1. Update the ```handleClick``` method so that if either someone has won *or* the target location is already occupied, then the method would return immediately and change nothing on the board.
```javascript
handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```

## Part 6: Storing and Showing History
### Goal
We want to implement a history feature, where we can revisit the board across different points in time. This means that we need to **store**, **show** and **restore** game states. Let's store history in an array like so:
```javascript
history = [
  {
    squares: [
      null, null, null,
      null, null, null,
      null, null, null,
    ]
  },
  {
    squares: [
      null, null, null,
      null, 'X', null,
      null, null, null,
    ]
  },
  // ...
]
```

### Steps
1. We want to move the state up again - from the Board component to the Game component. Initialize the game state in the constructor for Game:
  ```javascript
  class Game extends React.Component {
    constructor() {
      super();
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        xIsNext: true,
      };
    }

    render() {
      ...
    }
  }
  ```
1. Change the Board component so that it takes ```squares``` and ```onClick``` from the Game component, instead of having its own version.
  1. Delete the constructor in Board:
  1. Replace any instance of ```this.state.squares``` with ```this.props.squares``` in ```renderSquare``` for the Board
  1. Replace any instance of ```this.handleClick``` with ```this.props.handleClick``` in ```renderSquare``` for the Board
1. Have the Game component look at the history array and correctly calculate the game's status.
  ```javascript
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
  ```
1. Since the Game component is calculating the status, remove the ```<div className="status">``` and the lines calculating the status in the Board's ```render()```.
## Part 7: Moves
## Part 8: Keys
## Part 9: Time Travel
