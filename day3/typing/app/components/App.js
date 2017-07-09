// App for the routes
// Dumb component, depends on Root
//  for info of state
import React from 'react';
// Get routes for game and gameover
import Routes from '../routes';

// Dumb component app
const App = () => {
    // Render heading and then pass dependence onto routes
    return (<div>
      <h1 className="main">Typing Game</h1>
      { Routes }
    </div>);
};

export default App;
