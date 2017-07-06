import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Directory from './Directory';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              {/* Normally multiple routes can match at once.*/}
              <Route path="/:any" render={() => <Link to="/">Back To Home</Link>}/>
              <Switch>
                  <Route exact={true} path="/" component={Home}/>
                  <Route path="/directory" component={Directory} />


            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
