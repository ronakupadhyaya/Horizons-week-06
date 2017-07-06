import React from 'react';
import {Link, Route} from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>

        <Link to={'/'} >Game</Link>
        <Link to={'/about'}>About</Link>

        <Route exact path={'/'} component={GameContainer}/>
        <Route exact path={'/about'} component={About}/>
    </div>;

export default App;
