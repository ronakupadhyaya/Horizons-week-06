import React from 'react';

import GameContainer from '../containers/GameContainer';
import About from './About';
import {Route, Link} from 'react-router-dom';
const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact path="/" component={GameContainer}/>
        <Route exact path="/about" component={About} />
        <Link to="/">Game</Link>
        <div></div>
        <Link to="/about">About this Game</Link>
    </div>;

export default App;
