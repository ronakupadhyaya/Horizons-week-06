// Defining the store for redux containers
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

// Allow timetravel?
export const history = createHistory();
const middleware = routerMiddleware(history);

// Pass confiuration for use in index
export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(middleware),
    );
}
