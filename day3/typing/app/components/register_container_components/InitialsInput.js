import React from 'react';
import PropTypes from 'prop-types';

class InitialsInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currText: ''
        };
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={(e) => {
                        this.props.onInput(e.target.value);
                        // console.log(this.state.currText);
                    }}
                    className="textbox"
                    placeholder="Type your initials here."
                />
            </div>
        );
    }
}

InitialsInput.propTypes = {
    onInput: PropTypes.func,
};

export default InitialsInput;
