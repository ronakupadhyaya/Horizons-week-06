import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Home from './Home';
import Directory from './Directory';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Route path="/:anything" render={() => <Link to="/">Back to Home</Link>}/>
          <Switch>
            {/* Your routes here */}
            <Route path="/" component={Home} exact/>
            <Route path="/directory" component={Directory}/>
            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Route path="/directory/:anything" render={() => <Link to="/directory">Back to Listings</Link>}/>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
