import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();
const leaderObj = {};
for(let i = 0; i < 10; i++) {
    leaderObj[i + 1] = {
        'name': null,
        'score': 0
    };
}
console.log('leaderObj', leaderObj);
localStorage.setItem('leaderboard', JSON.stringify(leaderObj));
render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const newConfigureStore = require('./store/configureStore');
        const newStore = newConfigureStore.configureStore();
        const newHistory = newConfigureStore.history;
        const NewRoot = require('./containers/Root').default;

        render(
            <AppContainer>
                <NewRoot store={newStore} history={newHistory} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
