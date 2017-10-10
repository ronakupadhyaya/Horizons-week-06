import words from '../dictionary';
import _ from 'underscore';

const initialState =  {
    wordList: [],
    userInput: '',
    currentIndex: [0, 0]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case 'START':
            console.log('START');
            return Object.assign({},
                state,
                {
                    wordList: _.sample(words, 100).map((word) => (
                        word.split('').map((letter) => (
                            { letter, status: 'pending' }
                        ))
                    )),
                    currentIndex: [0, 0],
                    userInput: ''
                });
        case 'NEXT_CHAR':
            const { letter } = action;
            // const curLetter = state.words[state.currentIndex[0]][state.currentIndex[1]];
            return Object.assign({},
                state,
                {
                    currentIndex: [state.currentIndex[0], state.currentIndex[1] + 1],
                    userInput: state.userInput + letter
                });
        default:
            return state;
    }
}
