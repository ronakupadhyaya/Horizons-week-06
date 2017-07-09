import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { endGame} from '../../actions/index';

class PlayGameButton extends React.Component {

    render() {
        return (
            <div>
                <button onClick={() => this.props.onEndGame()}>
                    <Link to="/">New Game</Link>
                </button>
            </div>
        );
    }
}

PlayGameButton.propTypes = {
    onEndGame: PropTypes.func
};

const mapStateToProps = () => { return {}; };

const mapDispatchToProps = (dispatch) => {
    return {
        onEndGame: () => dispatch(endGame())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayGameButton);
