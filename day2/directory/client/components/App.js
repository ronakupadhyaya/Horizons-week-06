import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Directory from './Directory';
import ChickenApp from './ChickenContest';
import Container from './HangMan/index.js';
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Route path="/:anything" render={() => (<Link to="/"> Back to Home </Link>)} />

          <Switch>
            {/* Your routes here */}
            <Route exact path="/" component={Home} />
            <Route path="/directory" component={Directory} />
            <Route path="/chicken" component={ChickenApp} />
            <Route path="/hangman" component={Container} />
            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
