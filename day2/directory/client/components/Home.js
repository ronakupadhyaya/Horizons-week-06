import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Horizons Directory</h1>
        <h2>Click the link below to go to the directory.</h2>
        <Link to="/directory">Directory</Link>
        <h2>Click the link below to go to the Chicken Contest.</h2>
        <Link to="/chicken">Chicken Contest</Link>
        <h2>Click the link below to go to the Hangman.</h2>
        <Link to="/hangman">Hangman</Link>
      </div>
    )
  }
};

export default Home;
