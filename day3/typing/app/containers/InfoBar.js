import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class InfoBar extends React.Component {

    render() {
        return (
            <div>
                <span>Time Left: </span>
                <span>Score: </span>
            </div>
        );
    }
}

InfoBar.propTypes = {
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE  TO PROPS HERE
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
    };
};

InfoBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoBar);

export default InfoBar;
