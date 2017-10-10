import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, history } from './components/hangman/app/store/configureStore';

const store = configureStore();

import App from './components/App';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
