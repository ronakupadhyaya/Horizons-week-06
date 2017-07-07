import React from 'react';
import { BrowserRouter, Route, Switch , Link } from 'react-router-dom';

import Home from './Home';
import Directory from './Directory';
import Hangman from '../../../hangman/app';
var chicken_contest = 'https://codepen.io/jtomli/details/VWBgKq/';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Route path="/subapp/:url" render={() => <Link to="/">Back to home</Link>}/>
          <Switch>
            {/* Your routes here */}
            <Route path="/" component={Home} exact/>

            <Route path="/subapp/directory" component={Directory} />
            <Route path="/subapp/hangman" component={Hangman} />

            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
