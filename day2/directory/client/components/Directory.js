import React from 'react';
import { Route, Link } from 'react-router-dom';

class Directory extends React.Component {
  render() {
    return (
      <div className='container flex-col'>
        <div className='gray-container'>
          <h1>Benmo</h1>
          <div>
            <button className='button-or-input btn btn-default'><Link to='/register'>Register</Link></button>
            <button className='button-or-input btn btn-default'><Link to='/login'>Login</Link></button>
          </div>
        </div>
      </div>
    );
  }
};

export default Directory;
