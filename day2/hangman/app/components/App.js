import React from 'react';

import GameContainer from '../containers/GameContainer';
import About from './About';
import {Route, Link} from 'react-router-dom';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route path="/"  component={GameContainer}/>
        <Route path="/about" component={About}/>
        <Link to="/">Game State</Link> <br />
        <Link to="/about">About</Link>
    </div>;

export default App;
