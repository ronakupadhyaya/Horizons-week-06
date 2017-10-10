import words from '../dictionary';
import _ from 'underscore';

const initialState =  {
    wordList: [],
    userInput: '',
    currentIndex: [0, 0],
    gameStarted: false,
    currentTime: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
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
            return Object.assign({},
                state,
                {
                    wordList: state.wordList.map((word, i) => (
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
                    )),
                    currentIndex: [state.currentIndex[0], state.currentIndex[1] + 1],
                    userInput: state.userInput + typedLetter
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
