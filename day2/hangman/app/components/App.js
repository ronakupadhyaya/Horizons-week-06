import React from 'react';
import { Link, Route } from 'react-router-dom';

import About from './About';
import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Hangman SAT Words</h1>
        <Route path="/" exact={true} component={GameContainer}/>
        <Route path="/about" component={About} />
        <Link to="/">Game</Link>
        <Link to="/about">About</Link>
    </div>;

export default App;
