import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class SubmitButton extends React.Component {
    render() {
        return (
            <div>
                <button>
                    <Link
                        onClick={() => this.props.onHandleClick()}
                        to={"/leaderboard"}>Submit
                    </Link>
                </button>
            </div>
        );
    }
}

SubmitButton.propTypes = {
    onHandleClick: PropTypes.func,
};

export default SubmitButton;
