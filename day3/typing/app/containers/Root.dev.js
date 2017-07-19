import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import GameContainer from './GameContainer';
import LeaderboardContainer from './LeaderboardContainer';
import RegisterContainer from './RegisterContainer';
import TimeUp from './TimeUp';
import DevTools from './DevTools';

export default function Root({store, history}) {
    return (
        <Provider store={store}>
            <div>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={GameContainer} />
                        <Route exact path="/end" component={TimeUp} />
                        <Route exact path="/leaderboard" component={LeaderboardContainer} />
                        <Route exact path="/register" component={RegisterContainer} />
                    </Switch>
                </ConnectedRouter>
                <DevTools />
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
