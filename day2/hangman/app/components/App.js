import React from 'react';
import About from './About.js';
import { Link, Route } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Link to="/">Game</Link>
        <Link to="/about">About</Link>
        <Route path="/" component={GameContainer}/>
        <Route path="/about" component={About} />
    </div>;

export default App;
