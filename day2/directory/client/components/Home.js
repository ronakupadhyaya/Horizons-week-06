import React from 'react';
import { Link } from 'react-router-dom';

class Directory extends React.Component {
  render() {
    return (
      <div className='container flex-col'>
        <div className='gray-container'>
          <h1>Benmo</h1>
          <Button label='Register' accent />
        </div>
      </div>
    );
  }
};

export default Directory;
