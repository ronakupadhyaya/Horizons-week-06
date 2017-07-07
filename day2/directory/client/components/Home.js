import React from 'react';
//import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Horizons Directory</h1>
        <h2>Click the link below to go to the directory.</h2>
        <a href="/directory">Directory</a> 
      </div>
    )
  }
};

export default Home;
