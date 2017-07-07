import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Swiss Army App</h1>
        <h2>Checkout one of the apps below!</h2>
          <div>
            <Link to="/subapp/directory">Directory App</Link>
          </div>
          <div>
            <Link to="/subapp/hangman">Hangman Game</Link>
          </div>
          <div>
            <Link to="/subapp/chickenContest">Chicken Contast Game</Link>
          </div>
          <div>
            <Link to="/subapp/ticTacToe">Tic-Tac-Toe game</Link>
          </div>
      </div>
    )
  }
};

export default Home;
