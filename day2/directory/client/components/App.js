import React from 'react';
import { BrowserRouter, Route, Switch , Link } from 'react-router-dom';

import Home from './Home';
import Directory from './Directory';
import Main from './Main';
import Chicken from './Chicken'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Route path='/:a' render={() => <Link to={'/'}>Back to Home</Link>}/><br></br>
          <Route path='/directory/:a' render={() => <Link to={'/subapp/directory'}>Back to Directory</Link>}/>
          <Switch>
            {/* Your routes here */}
            <Route exact path='/' component={Main} />
            <Route path='/subapp/directory' component={Home} />
            <Route path='/directory' component={Directory}/>
            <Route path='/subapp/chicken' component={Chicken}/>
            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
