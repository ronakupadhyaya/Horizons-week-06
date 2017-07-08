import React from 'react';
import PropTypes from 'prop-types';

class TextBox extends React.Component {
    render() {
        let input;
        return (
            <div>
                <input type="text" placeholder="Start typing to begin..." ref={node => {input = node;}} value={input}
                  onChange={() => {
                      this.props.onType(input.value);
                      if (input.value.indexOf(' ') > -1) {
                          input.value = '';
                      }
                  }}>
                  </input>
                <button type="submit">Submit</button>
                <br></br>
            </div>
        );
    }
}

TextBox.propTypes = {
    onType: PropTypes.func
};


export default TextBox;
