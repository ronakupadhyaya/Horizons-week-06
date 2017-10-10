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
          {/* In a Switch, only the 1st matched route renders.*/}
          <Switch>
            {/* Directory page */}
            <Route path='/directory' component={Directory} />

            {/* Home page */}
            <Route path='/' component={Home}/>


            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>

          {/* Catch all non / routes for return link */}
          <Route path='/:any' render={() =>
               <Link to='/'>
                   Return to home
               </Link>} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
