import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import { Directory, Person} from './Directory';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Normally multiple routes can match at once.*/}
          {/* In a Switch, only the 1st matched route renders.*/}
          <Route path='/:page' render={() => <button><Link to='/'>Back Home</Link></button>}/>
          <Route path='/directory' render={(p) => {
            if (p.location.search === '') {
              return <span></span>;
            }
            return <button><Link to='/directory'>Back to Directory</Link></button>
          }}/>
          <Switch>
            {/* Your routes here */}
            <Route path='/' exact component={Home}/>
            <Route path='/directory' exact component={Directory}/>
            <Route path='/directory/:fName/:lName' exact component={Person}/>
            {/* A route with no path is matched unconditionally.*/}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
