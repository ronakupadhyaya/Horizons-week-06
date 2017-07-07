import React from 'react';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';
import Hangman from '../../hangmanSubapp/app/containers/Root.dev.js'
import Directory from '../../directorySubapp/client/components/App.js'
import { configureStore, history } from '../../hangmanSubapp/app/store/configureStore';
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/subapp/hangmanApp"> Check out our hangman app! </Link>
          <br/>
          <Link to="/subapp/directoryApp"> Check out our directory app! </Link>
          <Route exact path="/subapp/hangmanApp" render={() => Hangman({store: store, history: history})}/>
          <Route exact path="/subapp/directoryApp" component={Directory}/>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
