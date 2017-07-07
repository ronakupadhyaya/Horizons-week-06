import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Swiss Army App</h1>
        {/* Link to /directory here */}
        <Link to="/directory">Directory</Link>
        <Link to="/hangman">Hangman</Link>
      </div>
    )
  }
};

export default Home;
