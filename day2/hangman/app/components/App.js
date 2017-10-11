import React from 'react';
import { Route, Link} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About.js';

const App = () =>
    <div>
      <h1>Redux Hangman</h1>
        <Route exact={1} path="/" component={GameContainer} />
        <Route path="/about" component={About} />
        <Link to="/">Game Container</Link>
        <Link to="/about">About</Link>
    </div>;

export default App;
