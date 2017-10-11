import React from 'react';
<<<<<<< HEAD
=======
import { Route, Link } from 'react-router-DOM';
import About from './About';

>>>>>>> origin/obadiar
import GameContainer from '../containers/GameContainer';
import {Link, Route} from 'react-router-dom';
import About from './About';

const App = () =>
    <div>
<<<<<<< HEAD
        <h1>Redux Hangman</h1>
        <Route path={"/"} exact component={GameContainer}/>
        <Route path={"/about"} component={About}/>
        <Link to={"/"}>Game</Link><br></br>
        <Link to={"/about"}>About</Link>
=======
      <h1>Redux Hangman</h1>
      <Route path="/" exact component={GameContainer}/>
      <Route path="/about" component={About}/>
      <Link to="/">Game </Link>
      <Link to="/about">About</Link>
>>>>>>> origin/obadiar
    </div>;

export default App;
