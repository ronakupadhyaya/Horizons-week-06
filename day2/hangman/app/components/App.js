import React from 'react';
import {Link, Route} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './about';

const inlineStyle = () => ({
    // 'backgroundColor': 'pink'
    fontFamily: 'Avenir'
});

const App = () =>
    <div style={inlineStyle()}>
        <h1>Urban Dictionary Hangman</h1>
        <Link to="/">Game </Link>
        <Link to="/about">About</Link>
        <Route path="/" render={()=><GameContainer />}/>
        <Route path="/about" render={()=><About/>}/>
    </div>;

export default App;
