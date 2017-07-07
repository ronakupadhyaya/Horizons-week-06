import React from 'react';
import { Route, Link } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from '../components/About';

const HangmanApp = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact path="/hangman/play" component={GameContainer}/>
        <Link to="/hangman/play">To Game</Link>
        <Link to="/about">About</Link>
        <Route exact path="/about" component={About}/>
    </div>;

export default HangmanApp;
