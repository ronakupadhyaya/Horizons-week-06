import React from 'react';
import PropTypes from 'prop-types';


class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
          <input className="textbox" type="text" value={this.props.userInput} placeholder="Start Typing" onKeyPress={(e) => this.props.input(String.fromCharCode(e.which))}/>
        </div>
      );
    }
}

TextBox.propTypes = {
    currentIndex: PropTypes.array,
    userInput: PropTypes.string,
    input: PropTypes.func
};
export default TextBox;
