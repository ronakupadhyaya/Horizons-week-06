import React from 'react';
import { Link, Route } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About';


const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <li><Link to="/">Game</Link></li>
        <li><Link to="/about">About</Link></li>
        <Route path="/" exact component={GameContainer}/>
        <Route path="/about" exact component={About}/>
    </div>;

export default App;
