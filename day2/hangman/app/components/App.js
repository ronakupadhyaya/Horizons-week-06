import React from 'react';
import {Link, Route} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';

const footerLinks = ['About'];

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact path="/" component={GameContainer}/>
        <ul>
          <li key="game"><Link to="/">Game</Link></li>
          {footerLinks.map((link) => {
              return (
                <li key={link}><Link to={'/' + link}>{link}</Link></li>
              );
          })}
        </ul>
    </div>;

export default App;
