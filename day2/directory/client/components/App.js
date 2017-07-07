import React from 'react';
import { BrowserRouter, Route, Switch , Link  } from 'react-router-dom';

import Home from './Home';
import Directory from './Directory';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/directory' render={() => <Link to={'/'}>Back to Home</Link>} />
          {/* In a Switch, only the 1st matched route renders.*/}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/directory' component={Directory} />

            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
