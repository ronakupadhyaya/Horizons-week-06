import React from 'react';
import { connect } from 'react-redux';
import InitialsInput from '../components/register_container_components/InitialsInput';
import SubmitButton from '../components/register_container_components/SubmitButton';
import PropTypes from 'prop-types';


class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    onInput(name) {
        this.state.name = name;
    }

    onHandleClick() {
        const newLeader = {
            name: this.state.name,
            score: this.props.totalScore
        };
        if (!localStorage.getItem('leaders')) {
            const first = {
                '1': newLeader
            };
            localStorage.setItem('leaders', JSON.stringify(first));
        } else {
            const leaders = JSON.parse(localStorage.getItem('leaders'));
            const leaderArray = Object.keys(leaders).map(key => leaders[key]);
            leaderArray.push(newLeader);
            leaderArray.sort((a, b) => b.score - a.score);
            while (leaderArray.length > 10) {
                leaderArray.pop();
            }
            const newLeaderObject = {};
            leaderArray.forEach((player, index) => {
                newLeaderObject[index + 1] = player;
            });
            localStorage.setItem('leaders', JSON.stringify(newLeaderObject));
        }
    }

    render() {
        return (
            <div>
                <h1>Congratulations!</h1>
                <h3>You have a high score of {this.props.totalScore}! Enter your initials below.</h3>
                <InitialsInput onInput={(char) => this.onInput(char)}/>
                <SubmitButton onHandleClick={() => this.onHandleClick()}/>
            </div>
        );
    }
}

RegisterContainer.propTypes = {
    totalScore: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        totalScore: state.totalScore
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterContainer);
