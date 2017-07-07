import React from 'react';
import {Link, Route} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Route path="/" exact={true} render={() => <GameContainer /> }/>
        <Route path="/about" exact={true} render={() => <About /> }/>
    </div>;

export default App;
