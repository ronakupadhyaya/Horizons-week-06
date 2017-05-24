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
1. From the Board component, change ```javascript renderSquare``` so that we pass a value to the Square:
```javascript
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
```

## Part 3: Interactive Component
## Part 4: Lifting State Up
## Part 5: Immutability
## Part 6: Functional Components
## Part 7: Taking Turns
## Part 8: Winner Calculation
## Part 9: Display Game Status

## Part 10: Moves
## Part 11: Keys
## Part 12: Time Travel
