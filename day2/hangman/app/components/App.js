import React from 'react';

import GameContainer from '../containers/GameContainer';
import About from './About';
import {Link, Route} from 'react-router-dom';
const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact path="/" component = {GameContainer} />
        <Route path="/about" component = {About} />
        <div style={{marginTop: '30px'}}>
          <Link style={{marginRight: '30px', marginTop: '30px'}} to={"/"} > Home</Link>
          <Link to={"/about"}>About</Link>
        </div>
    </div>;

export default App;
