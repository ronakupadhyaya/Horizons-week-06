import React from 'react';
import { Link, Route } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About';


const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <li><Link to="/subapp/hangmanApp">Game</Link></li>
        <li><Link to="/subapp/hangmanApp/about">About</Link></li>
        <Route path="/subapp/hangmanApp" exact component={GameContainer}/>
        <Route path="/subapp/hangmanApp/about" exact component={About}/>
    </div>;

export default App;
