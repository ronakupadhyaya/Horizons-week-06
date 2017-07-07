import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Jamie's Apps!</h1>
        <h2>Click the link below to go to the Directory App.</h2>
        <Link to='/subapp/directory'> Directory </Link>
        <h2>Click the link below to go to the Hangman App.</h2>
        <Link to='/subapp/hangman'> Hangman </Link>
        <h2>Click the link below to go to the Chicken Contest App.</h2>
        <Link to='/subapp/chicken_contest'> Chicken Contest </Link>
      </div>
    )
  }
};

export default Home;
