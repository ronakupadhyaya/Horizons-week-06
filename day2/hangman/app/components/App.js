import React from 'react';
import {Link} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';

const App = () => (
    <div>
        <h1>Redux Hangman</h1>
        <GameContainer />
        <Link to="/about">About</Link><br/>
        <Link to="/">Play</Link>
    </div>);

export default App;
