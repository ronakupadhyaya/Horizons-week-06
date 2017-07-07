import React from 'react';
import {Route, Link} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from '../components/About.js';
const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <GameContainer />
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Route path="/About" component = {About} />
    </div>;

export default App;
