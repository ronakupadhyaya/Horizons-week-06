import words from '../dictionary';
import _ from 'underscore';

const initialState =  {
    wordList: [],
    userInput: '',
    currentIndex: [0, 0],
    gameStarted: false,
    currentTime: 0,
    score: 0,
    endGameDialogOpen: false
};

function calcScore(wordList) {
    return _.flatten(wordList).reduce((acc, {status}) => {
        if (status === 'correct') {
            return acc + 1;
        }
        if (status === 'incorrect') {
            return acc - 1;
        }
        return acc;
    }, 0);
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'CLOSE_DIALOG':
            return Object.assign({},
                state,
                {
                    endGameDialogOpen: false,
                    wordList: []
                });
        case 'END_GAME':
            return Object.assign({},
                state,
                {
                    userInput: '',
                    gameStarted: false,
                    currentTime: 0,
                    endGameDialogOpen: true
                });
        case 'START_GAME':
            return Object.assign({},
                state,
                {
                    wordList: _.sample(words, 100).map((word) => (
                        word.split('').map((letter) => (
                            { letter, status: 'pending' }
                        ))
                    )),
                    currentIndex: [0, 0],
                    userInput: '',
                    gameStarted: true,
                    currentTime: 60
                });
        case 'CHAR_ADDED':
            const typedLetter = action.letter;
            const wordList = state.wordList.map((word, i) => (
                word.map(({letter, status}, j) => {
                    if (state.currentIndex[0] === i && state.currentIndex[1] === j) {
                        // found the current letter, update status
                        return {
                            letter,
                            status: typedLetter === letter ? 'correct' : 'incorrect'
                        };
                    }
                    // return other letters as is
                    return {letter, status};
                })
            ));
            return Object.assign({},
                state,
                {
                    wordList: wordList,
                    currentIndex: [state.currentIndex[0], state.currentIndex[1] + 1],
                    userInput: state.userInput + typedLetter,
                    score: calcScore(wordList)
                });
        case 'INCREMENT_TIMER':
            return Object.assign({},
                state,
                {
                    currentTime: state.currentTime - 1
                });
        case 'NEXT_WORD':
            return Object.assign({},
                state,
                {
                    currentIndex: [state.currentIndex[0] + 1, 0],
                    userInput: ''
                });
        default:
            return state;
    }
}
