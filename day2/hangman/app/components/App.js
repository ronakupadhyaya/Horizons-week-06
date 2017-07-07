import React from 'react';
import { Link, Route } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/">Game</Link>
        <Route exact={true} path="/" render={() => <GameContainer /> }/>
        <Route exact={true} path="/about" component= {About} />

    </div>;

export default App;
