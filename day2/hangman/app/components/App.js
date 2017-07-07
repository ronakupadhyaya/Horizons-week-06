import React from 'react';
import About from './About';
import { Link, Route } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1> <br/>
        {/* <GameContainer /> */}
        <Link to="/">Game</Link> <br/>
        <Link to="/about">About</Link> <br/>
        <Route exact path="/" component={GameContainer}/>
        <Route exact path="/about" component={About}/>
    </div>;

export default App;
