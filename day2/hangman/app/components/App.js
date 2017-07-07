import React from 'react';
import {Route, Link} from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Link to="/">Game</Link><br/>
        <Link to="/about">About</Link><br/>
        <Route path="/" exact={true} component={GameContainer}/>
        <Route path="/about" component={About}/>
    </div>;

export default App;
