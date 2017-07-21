import React from 'react';
import { Link, Route } from 'react-router-dom';

import About from './About';
import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <Route path="/about" component={About}/>
        <Route path="/" component={GameContainer}/>
        <h1>Redux Hangman</h1>
        <Link to="/about">About</Link><br/>
        <Link to="/">Game Container</Link>
    </div>;

export default App;
