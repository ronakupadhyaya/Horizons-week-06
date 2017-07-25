import PropTypes from 'prop-types';
import React from 'react';
import InitialsInput from '../components/InitialsInput';
import SubmitButton from '../components/SubmitButton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

let input = '';
class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        input = evt.target.value;
        console.log('input: ' + input);
    }

    handleSubmit() {
        if (input.length === 3) {
            if (!localStorage.getItem('topTen')) {
                const topTen = [{name: input, score: this.props.endScore}];
                localStorage.setItem('topTen', JSON.stringify(topTen));
                console.log('first time saving: ' + localStorage.getItem('topTen'));
            } else {
                let currTopTen = JSON.parse(localStorage.getItem('topTen'));
                currTopTen.push({name: input, score: this.props.endScore});
                currTopTen.sort((a, b) => b.score - a.score);
                if (currTopTen.length > 10) {
                    console.log('SLICE');
                    currTopTen = currTopTen.slice(0, 10);
                }
                localStorage.setItem('topTen', JSON.stringify(currTopTen));
                console.log('not first time saving: ' + localStorage.getItem('topTen'));
            }
        }
    }

    render() {
        return (
        <center>
          <h1>Congratulations! You made it to the leaderboard!</h1>
          <InitialsInput currInput={input} changeFunc={this.handleChange}/>
          <br/>
          <br/>
          <SubmitButton submitFunc={this.handleSubmit}/>
          <br/>
          <br/>
          <br/>
          <Link to="/">Back to game</Link>
        </center>
      );
    }
}

RegisterContainer.propTypes = {
    endScore: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        endScore: state.user.endScore
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterContainer);
