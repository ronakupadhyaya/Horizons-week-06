import React from 'react';
import { Link, Route } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route path="/"  exact component={GameContainer}/>
        <Route path="/about" exact component={About}/>
        <Link to="/about">About  </Link>
        <Link to="/">  Game</Link>
    </div>;


export default App;
