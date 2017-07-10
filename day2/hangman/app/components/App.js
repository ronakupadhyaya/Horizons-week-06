import React from 'react';
import { Link, Route } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from '../components/About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route path="/" component={GameContainer} />
        <Route path="/about" component={About} />
        <Link to="/"> Game </Link>
        <Link to="/about"> About </Link>
    </div>;

export default App;
