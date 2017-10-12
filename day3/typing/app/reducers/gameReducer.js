/* import words from '../dictionary'; */

const initWords = [
    [{letter: 'I', status: 'pending'}],
    [
        {letter: 'a', status: 'pending'},
        {letter: 'm', status: 'pending'}
    ],
    [
        {letter: 'P', status: 'pending'},
        {letter: 'a', status: 'pending'},
        {letter: 'm', status: 'pending'}
    ]
];

const init  = {
    wordList: initWords,
    currentIndex: {
        wordIndex: 0,
        letterIndex: 0
    },
    userInput: ''
};

function gameReducer(state = init, action) {
    switch (action.type) {
        case 'ADD_CHAR':
            const cloneWordList = [...state.wordList];
            const current = cloneWordList[state.currentIndex.wordIndex][state.currentIndex.letterIndex];
            console.log(current);
            current.status = current.letter === action.letter ? 'correct' : 'incorrect';
            console.log(current);
            /* if (cloneWordList[state.currentIndex.wordIndex][state.currentIndex.letterIndex] === action.letter) { */
            /*     cloneWordList[state.currentIndex.wordIndex][state.currentIndex.letterIndex] */
            /* } */
            return {
                wordList: state.wordList,
                currentIndex: {
                    wordIndex: state.currentIndex.wordIndex,
                    letterIndex: state.currentIndex.letterIndex + 1
                },
                userInput: action.letter
            };
        case 'NEW_WORD':
            return {
                wordList: state.wordList,
                currentIndex: {
                    wordIndex: state.currentIndex.wordIndex + 1,
                    letterIndex: 0
                },
                userInput: ''
            };
        default:
            return state;
    }
}

export default gameReducer;
