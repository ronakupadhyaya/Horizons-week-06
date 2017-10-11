import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Horizons Portfolio</h1>
        <h2>Featuring Directory, Chicken Contest, Hangman</h2>
        {<Link to='/directory'>Directory</Link>} 
      </div>
    )
  }
};

export default Home;
