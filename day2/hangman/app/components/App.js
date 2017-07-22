import React from 'react';
import { Link, Route } from 'react-router-dom';

import About from './About';
import GameContainer from '../containers/GameContainer';


const App = () => {
    let input;
    let word;
    return (
        <div>
            <h1>Redux Hangman</h1>
            <Link to="/about">About</Link><br/>
            <input value={""} type="text" ref={node => {input = node;}}/>
            <button onClick={() => {word = input.value;} }>
                <Link to={'/' + word}>Start Game</Link>
            </button>
            <Route path="/about" component={About}/>
            {/* <Route path="/:chosenWord" component={GameContainer}/> */}
        </div>
    );};

export default App;
