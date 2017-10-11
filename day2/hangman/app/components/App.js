import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Link, Route } from 'react-router-dom';


import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <GameContainer />
        <span> <Link to="/">Game</Link> </span>
        <span> <Link to="/about">About</Link> </span>
    </div>;

export default App;
