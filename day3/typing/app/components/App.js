import React from 'react';
import Routes from '../routes';
import GameContainer from '../containers/GameContainer';
// import GameOverContainer from '../containers/GameOverContainer';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

const App = () => {
    return (<div>
        {Routes}
        <h1>Typing Game</h1>
        <GameContainer />
        {/* {!gameOver ? <GameContainer /> : <GameOverContainer />} */}
    </div>);
};

// App.propTypes = {
//     gameOver: PropTypes.bool
// };

// const mapStateToProps = (state) => {
//     return {
//         gameOver: state.gameOver
//     };
// };

// const mapDispatchToProps = () => {
//     return {};
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App);

export default App;

