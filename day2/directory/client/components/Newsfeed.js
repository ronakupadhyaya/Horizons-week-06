import React from 'react';
import { Route, Link } from 'react-router-dom';

class Newsfeed extends React.Component {
  render() {
    return (
      <div className='container flex-col'>
        <div className=''>
          <button className='btn btn-default'>Pay</button>
          <button className='btn btn-default'>Charge</button>
        </div>
      </div>
    );
  }
};

export default Newsfeed;
