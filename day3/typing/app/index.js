// Entrance point for the webapp -- index
import React from 'react';
// Render function responsible for actual display
import { render } from 'react-dom';
// Appciontainer allows for server changes without frontend interupt
import { AppContainer } from 'react-hot-loader';
// Configuration for redux store
import { configureStore, history } from './store/configureStore';
// Entrance point for smart component
import Root from './containers/Root';

// Configure single source of truth store for entire application
const store = configureStore();

// Render the application to the root divider
//  Root is smart component
render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

// ???????? down there

// if (module.hot) {
//     module.hot.accept('./containers/Root', () => {
//         const newConfigureStore = require('./store/configureStore');
//         const newStore = newConfigureStore.configureStore();
//         const newHistory = newConfigureStore.history;
//         const NewRoot = require('./containers/Root').default;
//         render(
//             <AppContainer>
//                 <NewRoot store={newStore} history={newHistory} />
//             </AppContainer>,
//             document.getElementById('root')
//         );
//     });
// }
