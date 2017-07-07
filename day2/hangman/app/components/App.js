import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact path="/" component={GameContainer}/>
        <Route path="/about" component={About}/>
        <Link to="/"> Game </Link> <br/>
        <Link to="/about"> About </Link>
    </div>;

export default App;
