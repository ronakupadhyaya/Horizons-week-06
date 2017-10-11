import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root.js';

const store = configureStore();

class Container extends React.Component {
  render(){
    console.log("ROOT", Root);
    return(
      <AppContainer>
          <Root store={store} history={history} />
      </AppContainer>
    )
  }

}
export default Container;
