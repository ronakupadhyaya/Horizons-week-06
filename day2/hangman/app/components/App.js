import React from 'react';
import { Route, Link } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact path={'/'} component={GameContainer}/>
        <Route path={'/about'}  component={About}/>
            <ul>
                <li> <Link to={'/'} > Home </Link> </li>
                <li><Link to={'/about'}> About </Link> </li>
            </ul>
    </div>;

export default App;
