import React from 'react';
import { Route, Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div className='container flex-col'>
        <div className='gray-container'>
          <h1>Benmo</h1>
          <form method='POST' action='/login' className='flex-col'>
            <input type='text' name='username' placeholder='Username' className='margin form-control'/>
            <input type='password' name='password' placeholder='Password' className='margin form-control'/>
            <input type='submit' name='submit' value='Submit' className='margin btn btn-default'/>
          </form>
          <p>Don't have an account? Register <Link to='/register'>here</Link></p>
        </div>
      </div>
    );
  }
};

export default Login;
