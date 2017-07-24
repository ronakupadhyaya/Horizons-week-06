import React from 'react';

import GameContainer from '../containers/GameContainer';
import About from './About';
import { Link, Route } from 'react-router-dom';

const App = () =>

    <div>
        <h1>Redux Hangman</h1>
        <Link to="/">Game</Link>
        <Link to="/about">About</Link>
        <Route exact={true} path="/" component={GameContainer}/>
        <Route exact={true} path="/about" component={About} />
    </div>;

export default App;
