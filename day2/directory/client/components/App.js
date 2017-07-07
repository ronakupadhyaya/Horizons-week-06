import React from 'react';
import { BrowserRouter, Route, Switch /*, Link */ } from 'react-router-dom';

import Home from './Home';
import Directory from './Directory';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Route path="/" render={() => <Link to="/">Link</Link>}
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/directory" component={Directory} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
