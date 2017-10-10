import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Andros's React Portfolio</h1>
        <h2>Click the link below to go to each project.</h2>
        <Link to="/directory"> Go to Directory project </Link>
      </div>
    )
  }
};

export default Home;
