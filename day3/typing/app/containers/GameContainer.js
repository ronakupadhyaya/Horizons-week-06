import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from './WordBox';

class GameContainer extends React.Component {
    componentDidMount() {
        this.props.start();
    }

    render() {
        return (
            <div className="game">
                <WordBox />
            </div>
        );
    }
}

GameContainer.propTypes = {
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        start: () => dispatch({type: 'START'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
