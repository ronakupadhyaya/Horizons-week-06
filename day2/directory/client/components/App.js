import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Directory from './Directory/Directory';

import Chicken from './Chicken/App';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Route path='/:anything/' render={() => <Link to="/">Back To Home</Link>} />
          <Switch>
            {/* Your routes here */}
            <Route exact path="/" component={Home} />
            <Route path="/directory" component={Directory} />
            <Route path="/chicken" component={Chicken} />
            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
