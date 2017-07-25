import React from 'react';
import PropTypes from 'prop-types';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <form onSubmit={(event) => (event.preventDefault())}>
          <input className="form-control" type="text" onChange={(event) => this.props.inputx(event.target.value)}/>
        </form>
      );
    }
}

TextBox.propTypes = {
    inputx: PropTypes.func
};

export default TextBox;
