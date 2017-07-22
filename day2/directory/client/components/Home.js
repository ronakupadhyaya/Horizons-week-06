import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Horizons Swiss Army App</h1>
        <Link to='/directory'>Directory</Link>
        <br/>
        <Link to='chickenleg'>Chicken Leg Contest</Link>
      </div>
    )
  }
};

export default Home;
