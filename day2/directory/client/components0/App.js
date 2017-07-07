import React from 'react';
import {Route, Link} from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from '../components/About';

const App = () => {
    return(
      <div>
        <h1>Redux Hangman</h1>
        <Route path="/" exact="true" component={GameContainer}/>
        <Route path="/about" exact="true" component={About}/>
        <div>
          <Link to="/">Game</Link> | <Link to="/about">About</Link>
        </div>
      </div>
  );
};

export default App;
