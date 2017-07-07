import React from 'react';
import { Route, Link } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from '../components/About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>

        <div>
        <Link to="/">Back to Game</Link>
        </div>
        <div>
        <Link to="/about">About Us</Link>
      </div>
      <Route exact path="/" component={GameContainer}/>
      <Route path="/about" component={About}/>
    </div>;


export default App;
