import React from 'react';
import {Link, Route} from 'react-router-dom';
import About from '../components/About';
import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact={true} path="/"/>
        <Route exact={true} path="/game" component={GameContainer}/>
        <Route exact={true} path="/about" component={About}/>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Link to="/about">About</Link>
    </div>;

export default App;
