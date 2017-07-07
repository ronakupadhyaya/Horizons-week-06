import React from 'react';

import GameContainer from '../containers/GameContainer';
import About from './About';
import { Link, Route } from 'react-router-dom';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route path="/" exact component={GameContainer} />
        <Link to="/">Game</Link><br></br>
        <Link to="/about">About</Link>
        <Route path="/about" component={About} />
    </div>;

export default App;
