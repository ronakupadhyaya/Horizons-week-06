import React from 'react';
import PropTypes from 'prop-types';

class TextBox extends React.Component {
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
                        this.props.onInput(e.target.value[e.target.value.length - 1]);
                        if (e.target.value[e.target.value.length - 1] === ' ') {
                            e.target.value = '';
                            this.state.currText = '';
                        } else {
                            this.state.currText = e.target.value;
                        }
                    }}
                    className="textbox"
                    placeholder="Start typing to begin"
                    value={this.state.currText}
                />
            </div>
        );
    }
}

TextBox.propTypes = {
    onInput: PropTypes.func,
};

export default TextBox;
