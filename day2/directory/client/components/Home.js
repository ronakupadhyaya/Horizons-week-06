import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Andros's React Portfolio</h1>
        <h2>Click the link below to go to each project.</h2>
        <div>
        <Link to="/directory"> Go to Directory project </Link>
        </div>
        <div>
        <Link to="/chicken"> Go to chicken contest </Link>
        </div>
        <div>
        <Link to="/hangman"> Go to Hangman </Link>
        </div>
      </div>
    )
  }
};

export default Home;
