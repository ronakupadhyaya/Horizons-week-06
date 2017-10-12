import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from './WordBox';
import TextBox from './TextBox';
import InfoBar from './InfoBar';

class GameContainer extends React.Component {
    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
    }

    render() {
        return (
            <div>
                <WordBox />
                <TextBox />
                <InfoBar />
            </div>
        );
    }
}

GameContainer.propTypes = {
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
