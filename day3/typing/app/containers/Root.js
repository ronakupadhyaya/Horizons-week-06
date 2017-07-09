// Root smart component
// Feeds state truths down
//  PropTypes for awareness
import PropTypes from 'prop-types';
import React from 'react';
// Provider component for state awareness
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from '../components/App';

// Root component for passing the state down to containers and components
export default function Root({store, history}) {
    return (
        <Provider store={store}>
            <div>
                <ConnectedRouter history={history}>
                    <Route path="/" component={App}/>
                </ConnectedRouter>
            </div>
        </Provider>
    );
}

// Alert props for redux
Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
