import React from 'react';
import GameContainer from '../containers/GameContainer';
import About from './About';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
// WHY USE CONNECTEDROUTER AND NOT BROWSERROUTER?
// connectedRouter is similar to role of BrowserRouter - whatever it wraps is ready to use Link tags
// import { ConnectedRouter } from 'react-router-redux';
// import { Provider } from 'react-redux';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>

        <Route exact={true} path="/" component={GameContainer}/>
        <Route path="/about" component={About}/>
        <nav className="navbar navbar-inverse navbar-fixed-bottom">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Go to Game</Link></li>
                    <li>  <Link to="/about">About</Link></li>


                </ul>
            </div>
        </nav>

    </div>;


export default App;
