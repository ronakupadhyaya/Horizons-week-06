import React from 'react';
import Routes from '../routes';
import GameContainer from '../containers/GameContainer';

const App = () => {
    return (<div>
      { Routes }
      <center>
  <img src="/img/typing.png" style={{'width': '600px', 'padding': '10px'}}/>
    </center>
    <center>
      <GameContainer />
    </center>
    </div>);
};

export default App;
