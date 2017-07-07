import React from 'react';
import PropTypes from 'prop-types';

class SetWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }
    handleChange(event) {
        this.setState({input: event.target.value});
    }
    handleSubmit() {
        this.props.setWord(this.state.input);
        this.setState({input: ''});
    }
    render() {
        return (
          <div>
            <input
              type="text"
              placeholder="Your word here!"
              onChange={(event) => this.handleChange(event)}
              value={this.state.input}
            />
            <button onClick={() => this.handleSubmit()}>Update Word</button>
          </div>
        );
    }
}

SetWord.propTypes = {
    setWord: PropTypes.func
};


export default SetWord;
