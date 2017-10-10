import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About';
import Start from './Start';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
		<Link to="/"> Start </Link>
		<Link to="/game"> Home </Link>
		<Link to="/about"> About </Link>
		<Route path="/" component={Start}/>
		<Route path="/game" component={GameContainer}/>
		<Route path="/about" component={About}/>
    </div>;

export default App;
