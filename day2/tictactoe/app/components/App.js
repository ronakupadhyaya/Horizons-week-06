import React from 'react';
import {Link, Route} from 'react-router-dom';
import About from './About';

import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <div>
            <Route exact="true" path="/" component={GameContainer} />
            <Link to="/">Home </Link>
            <Link to="/about">About</Link>
            <Route path="/about" component={About} />
        </div>
    </div>;


export default App;
