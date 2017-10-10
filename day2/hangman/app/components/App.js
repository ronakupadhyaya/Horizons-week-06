import React from 'react';
import { Link, Route } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route path="/" exact component={GameContainer} />
        <Link to="/"> Return to Game </Link>
        <Link to="/about"> About the Game </Link>
    </div>;

export default App;
