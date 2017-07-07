import React from 'react';

import GameContainer from '../containers/GameContainer';
import About from './About';
import {Link, Route} from 'react-router-dom';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        {/* <Route exact={true} path="/" component={GameContainer}/> */}
        <Route exact path="/subapp/hangman/game" component={GameContainer}/>
        <Route exact path="/subapp/hangman/about" component={About}/>
        {/* <Link to="/">Game</Link><br></br> */}
        <Link to="/subapp/hangman/about">About</Link><br></br>
        <Link to="/subapp/hangman/game">Start Game</Link>

    </div>;

export default App;
