import React from 'react';

import GameContainer from '../containers/GameContainer';
import About from '../components/About';

import {Link, Route} from 'react-router-dom';

const App = () => <div>
    <h1>Redux Hangman</h1>
    <Route exact="true" path="/" component={GameContainer}/>
    <Route path="/about" component={About}/>
    <Link to="/about">About</Link>
    <Link to="/">Home</Link>
</div>;

export default App;
