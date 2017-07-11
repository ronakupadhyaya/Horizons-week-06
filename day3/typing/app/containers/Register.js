import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import PlayGameButton from '../components/PlayGameButton.js';
import FinalScore from '../components/FinalScore.js';
import ViewLeaderboardButton from '../components/ViewLeaderboardButton.js';
import _ from 'underscore';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        };
    }
    onSubmit(input) {
        const initials = input.slice(0, 3);
        const score = {name: initials, score: this.props.score };
        const retrievedObject = localStorage.getItem('highScores');
        if (retrievedObject.highScores) {
            const scores = _.values(retrievedObject);
            const retObj = {};
            scores.push(score);
            scores.sort(function(a, b) {
                return parseInt(a.score, 10) - parseInt(b.score, 10);
            });
            const newScore = scores.slice(0, 9);
            newScore.forEach((item, index)=>{
                retObj[index] = item;
            });
            localStorage.setItem('highScore', JSON.stringify(retObj));
        }else {
            localStorage.setItem('highScore', JSON.stringify({1: score}));
        }
        this.setState({
            submitted: true
        });
    }
    render() {
        let input;
        if (this.state.submitted) {
            return(<Redirect to="/" />);
        }
        return (
          <div>
            <h1>Congratulation!</h1>
            <input type="text"
                value={''}
                ref={node => {input = node;}}
            />
            <button type="submit" onSubmit={() => this.onSubmit(input.value.toUpperCase())}/>
          </div>
        );
    }
}

Register.propTypes = {
    score: PropTypes.number,
    onSubmit: PropTypes.func
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        score: state.scoreReducer.score,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
