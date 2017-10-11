import React from 'react';
import { BrowserRouter, Route, Switch, Link, } from 'react-router-dom';

import Home from './Home';
import Directory from './Directory';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <Route path={'/:anything'} render={ () => <Link to={'/'}>Back to Home</Link> }/>

          <Switch>
            <Route path={'/'} exact={true} component={Home}/>
            <Route path={'/directory'} component={Directory}/>
            <Route render={() => <h1>404</h1>} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
};

export default App;
