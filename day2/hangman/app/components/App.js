import React from 'react';
<<<<<<< HEAD
import { Link, Route } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from '../components/About';
=======

import GameContainer from '../containers/GameContainer';
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
<<<<<<< HEAD
        <Route exact={true} path="/" component={GameContainer}/>
        <Route exact={true} path="/about" component={About}/>
        {/* <GameContainer /> */}
        <Link to="/">Game</Link><br></br>
        <Link to="/about">About</Link>
=======
        <GameContainer />
>>>>>>> 442651ce66adbdb2ac1a491b5a808af3d8ab4e8a
    </div>;

export default App;
