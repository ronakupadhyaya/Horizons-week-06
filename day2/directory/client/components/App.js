import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Home from './Home';
import {Person, LinkList, Directory} from './Directory';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          <Route path="/:anything" render={() => <Link to={'/'}>Back to Home</Link>}/> {' '}
          <Route
            path='/directory/:anything'
            render={() => <Link to='/directory'>Back to listings</Link>}
          />
          {/* In a Switch, only the 1st matched route renders.*/}
          <Switch>
            {/* Your routes here */}
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/directory" component={Directory}/>
            <Route
              exact={true}
              path='/directory/:fName'
              component={Directory}
            />
          <Route exact={true} path="/directory/areacode/:digitareacode" component={Directory} />
          <Route exact={true} path="/directory/surname/:lName" component={Directory} />
          <Route exact={true} path="/directory/:fName/:lName" component={Person} />
            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
