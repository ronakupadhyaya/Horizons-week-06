import React from 'react';

import GameContainer from '../containers/GameContainer';
import About from './About';
import {Link, Route} from 'react-router-dom';
const App = () => {
  return(
    <div>
        <h1>Redux Hangman</h1>
        <Route exact path="/hangman" component = {GameContainer} />
        <Route path="/hangman/about" component = {About} />
        <div style={{marginTop: '30px'}}>
          <Link style={{marginRight: '30px', marginTop: '30px'}} to={"/hangman"} > Home</Link>
          <Link to={"/hangman/about"}>About</Link>
        </div>
    </div>
  )
}


export default App;
