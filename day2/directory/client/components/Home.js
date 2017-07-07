import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
          <h1>Swiss Army App</h1>
          <div>
              <Link to="/directory">Directory</Link>
          </div>
          <div>
              <Link to="/directory">Hangman</Link>
          </div>
      </div>
    )
  }
};

export default Home;
