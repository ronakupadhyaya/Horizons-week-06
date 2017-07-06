import React from 'react';
import { Link, Route } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>{
    return (<div>
        <h1>Redux Hangman</h1>
        <Link to="/"> game</Link>
        <Link to="/about"> about </Link>
        <Route path="/" component={GameContainer}/>
        <Route path="/about" component={About}/>
    </div>);
};

export default App;
