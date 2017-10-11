import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import { Directory, Person } from './directory/Directory';
import ChickenContest from './chicken/ChickenContest'
import Hangman from './hangman/app/components/App'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Route path="/:anything" render={() => <Link to="/">Back to home</Link>} />
          <Switch>
            {/* Your routes here */}
            <Route path="/" exact component={Home} />
            <Route path="/directory" exact component={Directory} />
            <Route path="/chicken" component={ChickenContest} />
            {<Route path="/hangman" component={Hangman} />}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
