import React from 'react';
import { Link, Route } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>

        <Route exact={true} path="/" component={GameContainer} />
        <Route exact={true} path="/about" component={About} />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>;


export default App;
