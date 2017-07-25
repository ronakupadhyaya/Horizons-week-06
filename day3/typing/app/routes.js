import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import App from './components/App';
import GameContainer from './containers/GameContainer';
import RegisterContainer from './containers/RegisterContainer';
import Leaderboard from './components/Leaderboard';
export default (
	<Switch>
			<Route path="/" exact={true} component={GameContainer}/>
			<Route path="/addleaderboard" exact={true} component={RegisterContainer}/>
			<Route path="/leaderboard" exact={true} component={Leaderboard}/>
	</Switch>
);
