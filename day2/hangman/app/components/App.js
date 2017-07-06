import React from 'react';
import PropTypes from 'prop-types';
import GameContainer from '../containers/GameContainer';
import About from './About.js';
import {Route, Link, Redirect} from 'react-router-dom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        };
    }

    playGame() {
        this.setState({
            word: this.inputVar.value
        });
    }

    render() {
        return(
          <div>
              {this.state.word && <Redirect to={'/game'} />}
              <h1>Redux Hangman</h1>
              <input
                type="text"
                placeholder="Type a word!"
                ref={node => {this.inputVar = node;}}
              />
              <button onClick={() => this.playGame()}>Play the Game!</button>
              <Route exact path="/game" render={(p) => {
                  return <GameContainer {...p} word={this.state.word} />;
              }} />
              <Route exact path="/about" component={About} />
              <Link to="/">Start Over</Link>
              <Link to="/about">About</Link>
          </div>
        );
    }
}

App.PropTypes = {
    setInitialState: PropTypes.func
};

export default App;
