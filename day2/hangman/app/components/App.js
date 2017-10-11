import React from 'react';

import GameContainer from '../containers/GameContainer';
import About from './About';

import{Route, Link} from 'react-router-dom';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact = {true} path = "/" component={GameContainer} />
        <Route path="/about" component={About} />
        <Link to="/about" style={{margin: '5px'}}> About </Link>
        <Link to="/" style={{margin: '5px'}}> Game </Link>

    </div>;

export default App;
