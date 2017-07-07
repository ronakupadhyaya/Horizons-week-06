import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Directory from './Directory';
import Chicken from '../../ChickenContest/App';
import TicTacToe from '../../TicTacToe/App'
import Hangman from '../../../hangman/app/containers/Root';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Route path="/:d" render={() => <Link to="/">Back to Home</Link>} />
          <Switch>
            {/* Your routes here */}
            <Route exact path="/" component={Home} />
            <Route path="/subapp/directory" component={Directory} />
            <Route path="/subapp/hangman" component={Hangman} />
            <Route path="/subapp/chickenContest" component={Chicken} />
            <Route path="/subapp/ticTacToe" component={TicTacToe} />
            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
