import React from 'react';
import { Route, Link } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './about.js';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Link to = {'/'}> Home </Link>
        <Link to = {'/about'}> About </Link>
        <Route exact ={true} path="/" component = {GameContainer} />
        <Route exact={true} path="/about" component ={About}/>
    </div>;

export default App;
