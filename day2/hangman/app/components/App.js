import React from 'react';
import {Link, Route} from 'react-router-dom';

import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route path="/" exact={true} component={GameContainer} />
        <Route path="/about" exact={true} component={GameContainer} />
        <Link to="/">Game</Link><br></br>
        <Link to="/about">About</Link>
    </div>;

export default App;
