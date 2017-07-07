import React from 'react';
import {Link, Route} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route path="/about" component={About}/>
        <Route exact path="/" component={GameContainer}/>
        <Link to="/">To Game</Link> {' '}
        <Link to="/about">About Page</Link>
    </div>;

export default App;
