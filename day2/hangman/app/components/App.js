import React from 'react';
import GameContainer from '../containers/GameContainer';
import {Link, Route} from 'react-router-dom';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route path={"/"} exact component={GameContainer}/>
        <Route path={"/about"} component={About}/>
        <Link to={"/"}>Game</Link><br></br>
        <Link to={"/about"}>About</Link>
    </div>;

export default App;
