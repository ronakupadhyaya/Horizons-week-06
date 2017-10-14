import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Directory from './Directory';
import Register from './Register';
import Login from './Login';
import Newsfeed from './Newsfeed';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {<Route exact path='/' component={Directory} />}
          {<Route path='/register' component={Register} />}
          {<Route path='/login' component={Login} />}
          {<Route path='/newsfeed' component={Newsfeed} />}
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
