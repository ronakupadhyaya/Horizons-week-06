import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';

import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route exact path="/" component={GameContainer}/>
        <Route path="/about" component={About}/>
    </div>;

export default App;
