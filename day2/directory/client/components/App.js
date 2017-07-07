import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import {Directory, Person} from './Directory';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Route path="/:something" render={() => <Link to={"/"}>Back to Home</Link>}/>
          <Switch>
            {/* Your routes here */}
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/directory" component={Directory}/>
            <Route path="/directory/:fName/:lName" component={Person}/>


            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
