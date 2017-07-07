import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Directory from './Directory';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/:any" component={() => <Link to="/">Back To Home</Link>}></Route>
          <Switch>
            <Route path="/directory" component={Directory}></Route>
            <Route path="/" component={Home}></Route>
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Route path="/directory/:any/:any2" component={() => <Link to="/directory">Back To Directory</Link>}></Route>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
