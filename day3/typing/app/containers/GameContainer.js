import React from 'react';
import { connect } from 'react-redux';
import WordBox from './WordBox';
import TextBox from './TextBox';
import InfoBar from './InfoBar';
import EndGameDialog from './EndGameDialog';

class GameContainer extends React.Component {
    render() {
        // Only display the end game dialog after the player plays a full round.
        // When the game first loads, the game hasn't started but we don't want
        // to display the end game dialog. So we use a second key `firstGameStarted`
        // in state to distinguish between the beginning of the very first
        // game and every other game
        return (
            <div className="game">
                {
                    (this.props.endGameDialogOpen) ?
                    <EndGameDialog /> :
                    [<WordBox />, <TextBox />, <InfoBar />]
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        endGameDialogOpen: state.game.endGameDialogOpen
    };
};

export default connect(
    mapStateToProps,
)(GameContainer);
