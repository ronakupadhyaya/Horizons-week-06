import React from 'react';

import GameContainer from '../containers/GameContainer';
import { Link, Route } from 'react-router-dom';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Link to={"/"}>Game</Link>
        <Link to={"/about"}>About</Link>
        <Route exact path={"/"} component={GameContainer}/>

    </div>;

export default App;
