import React from 'react';
import {Route, Link} from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
      <h1>Redux Hangman</h1>
      <Route exact={1} path="/" component={GameContainer} />
      <Route path="/about" component={About} />
      <Link style={{margin: '5px'}} to="/">Game</Link>
      <Link to="/about">About</Link>
    </div>;

export default App;
