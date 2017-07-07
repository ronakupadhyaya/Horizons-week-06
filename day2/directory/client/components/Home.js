import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Directory</h1>
        <ul>
          <li><Link to="/directory">Directory</Link></li>
          <li><Link to="/chicken">Chicken</Link></li>
        </ul>
      </div>
    )
  }
};

export default Home;
