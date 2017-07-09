import React from 'react';
import PropTypes from 'prop-types';

class InitialsInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currText: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({currText: e.target.value});
        this.props.onInput(e.target.value);
    }

    render() {
        if (this.state.currText.length >= 3) {
            return (<p>{this.state.currText}</p>);
        }
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChange}
                    className="textbox"
                    placeholder="Type your initials here."
                    value={this.state.currText}
                />
            </div>
        );
    }
}

InitialsInput.propTypes = {
    onInput: PropTypes.func,
};

export default InitialsInput;
