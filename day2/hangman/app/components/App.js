import React from 'react';
import {Link, Route} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from '../components/About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route path="/" exact="true" component={() => <GameContainer />} />
        <span>
            <Link to="/">Game</Link>
            <Link to="/about">About</Link>
            <Route path="/about" exact="true" component={() => <About />} />
            <Link to="/new"></Link>
        </span>

    </div>;

export default App;
