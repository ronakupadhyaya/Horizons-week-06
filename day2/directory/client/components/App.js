import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Directory from './Directory';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* why is the {} in Link to needed? */}

          <Route path="/:other" render={()=><Link to={'/'}>Back to Home</Link>}/>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Switch>
            {/* Your routes here */}
            <Route exact={true} path='/' component={Home}/>
            <Route path='/directory' component={Directory}/>
            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Route path="/directory/:other" render={()=><Link to={'/directory'}>Back to Listings</Link>}/>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
