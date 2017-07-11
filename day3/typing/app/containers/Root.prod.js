import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import GameContainer from './GameContainer';
import TimeUp from './TimeUp';

export default function Root({store, history}) {
    return (
        <Provider store={store}>
            <div>
                <ConnectedRouter history={history}>
                  <Switch>
                    <Route exact path="/" component={GameContainer}/>
                    <Route path="/end" component={TimeUp}/>
                  </Switch>
                </ConnectedRouter>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
