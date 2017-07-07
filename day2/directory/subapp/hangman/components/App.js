import React from 'react';
import { Route, Link } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact path="/hangman" component={GameContainer}/>
        <Route path="/hangman/about" component={About}/>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/hangman/about">About</Link>
    </div>;

export default App;
