import React from 'react';
import {Link, Route} from 'react-router-dom';
import About from '../components/About';
import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <GameContainer />
        <Route exact={true} path="/"/>
        <Route exact={true} path="/about" component={About}/>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>;

export default App;
