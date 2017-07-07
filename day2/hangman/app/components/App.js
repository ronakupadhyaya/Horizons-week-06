import React from 'react';
import {Link, Route} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link>
        <Route exact={true} path="/" component={GameContainer} />
        <Route path="/about" component={About} />
    </div>;

export default App;
