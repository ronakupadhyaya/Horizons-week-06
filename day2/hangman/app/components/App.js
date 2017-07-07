import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <BrowserRouter>
      <div>
          <h1>Redux Hangman</h1>
          <div>
            <Link to="/">Game</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <Route exact={true} path="/" component={GameContainer}/>
          <Route path="/about" component={About}/>
      </div>
    </BrowserRouter>;
export default App;
