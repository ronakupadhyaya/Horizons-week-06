import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TextBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { inputNew: '' };
    }
    onType(character) {
        console.log('HERE');
        if(character === ' ') {
            console.log('IF');
            this.props.nextWord();
            this.setState({inputNew: ''});
        }else{
            console.log('ELSE');
            this.props.charAdded(character);
        }
    }
    render() {
        let input;
        return (
            <div>
              <input type="text"
                     value={this.state.inputNew}
                     placeholder="Start typing to begin..."
                     ref={node => {input = node;}}
                     onChange={() => {
                         this.setState({inputNew: input.value});
                         // this.props.onInput();
                         this.onType(input.value[input.value.length - 1]);
                     }} />
            </div>
        );
    }
}

TextBox.propTypes = {
    onInput: PropTypes.func,
    charAdded: PropTypes.func,
    nextWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        charAdded: (character) => dispatch({type: 'CHAR_ADDED', character: character}),
        nextWord: () => dispatch({type: 'NEXT_WORD'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextBox);

// WordBox.propTypes = {
//
// };
//
// const mapStateToProps = (state) => {
//     return {
//         // YOUR MAP STATE TO PROPS HERE
//
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         // YOUR MAP DISPATCH TO PROPS HERE
//     };
// };
