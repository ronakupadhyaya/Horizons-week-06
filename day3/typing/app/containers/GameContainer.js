import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '../actions/index';
import Game from '../components/Game';
import TypeBox from '../components/TypeBox';
import { Link, Route, Redirect } from 'react-router-dom';

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="container game-container">
              <Route path="/game" render={() => {
                if(this.props.timeLeft <= 0) {
                  this.props.onGameEnd();
                  return <Redirect to="/finish"/>;
                }
                return <Game words={this.props.words} />;
              }} />

              {/* Start Game button that appears only on `/` route */}
              <Route exact path="/" render={() => (
                <div className="row text-center">
                  <Link to="/game">
                    <input type="submit"
                      className="btn btn-success startButton"
                      onClick={() => this.props.onStartClick()}
                      value="Start Game"/>
                  </Link>
                </div>
              )}/>

              {/* TypeBox that only appears on `/game` route */}
              <Route exact path="/game" component={TypeBox}/>
              <Route exact path="/game" render={() => (
                <div>
                  <div className="row">
                    <div className="col-xs-6 timer">
                      Time left: {this.props.timeLeft} seconds
                    </div>
                    <div className="col-xs-6 scoreCount">
                      Score: {this.props.score}
                    </div>
                  </div>
                  <div className="row text-center">
                    <Link to="/">
                      <input type="submit"
                        className="btn btn-danger endButton"
                        onClick={() => this.props.onStopClick()}
                        value="End Game"/>
                    </Link>
                  </div>
                </div>
              )}/>
          </div>
      );
  }
}

GameContainer.propTypes = {
  words: PropTypes.array,
  onStartClick: PropTypes.func,
  onStopClick: PropTypes.func,
  onGameEnd: PropTypes.func,
  score: PropTypes.number,
  timeLeft: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    words: state.words,
    score: state.score,
    timeLeft: state.timeLeft,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: () => {
      dispatch(actionCreators.startGame());
    },
    onStopClick: () => {
      dispatch(actionCreators.endGame());
    },
    onGameEnd: () => {
      dispatch(actionCreators.endGame());
    },
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
