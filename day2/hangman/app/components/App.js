import React from 'react';
import {Route, Link} from 'react-router-dom';
import About from './About.js';

import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route path="/about" component={About}/>
        <Route path="/" component={GameContainer}/>

    <footer>
      <Link to="/"> Game </Link><br/>
      <Link to="/about"> About </Link>
    </footer>

  </div>;

export default App;
