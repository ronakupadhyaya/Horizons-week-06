import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Horizons App Directory</h1>
        <h2>Click the link below to go to the app.</h2>
        <ul>
          <li><Link to='/subapp/directory'>Directory</Link></li>
          <li><Link to='/subapp/hangman'>Hangman</Link></li>
          <li><Link to='/subapp/chicken'>Chicken</Link></li>
        </ul>
      </div>
    )
  }
};

export default Main;
