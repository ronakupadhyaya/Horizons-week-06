
import * as englishData from '../data/englishWords.json';
import * as koreanData from '../data/koreanWords.json';
import * as spanishData from '../data/spanishWords.json';
import * as mandarinData from '../data/mandarinWords.json';

const wordLettersReducer = (state = {}, action) => {
    // console.log(action);
    switch(action.type) {
        case 'NEW_GAME':
            let randomWord;
            let randomObj;

            if (action.language === 'english') {
                const randomNum = Math.floor(Math.random() * englishData.default.length);
                randomObj = englishData[randomNum];
                randomWord = randomObj.word;
            } else if (action.language === 'korean') {
                const randomNum = Math.floor(Math.random() * koreanData.default.length);
                randomObj = koreanData[randomNum];
                randomWord = randomObj.word;
            } else if (action.language === 'spanish') {
                const randomNum = Math.floor(Math.random() * spanishData.default.length);
                randomObj = spanishData[randomNum];
                randomWord = randomObj.word;
            } else if (action.language === 'mandarin') {
                const randomNum = Math.floor(Math.random() * mandarinData.default.length);
                randomObj = mandarinData[randomNum];
                randomWord = randomObj.word;
            }

            const word = randomWord;
            const newState2 = [];
            for (let i = 0; i < word.length; i++) {
                newState2.push({letter: word[i], guessed: false});
            }

            return {
                letters: newState2,
                word: randomWord,
                definition: randomObj.definition
            };
        case 'BAD_GUESS':
            return state;
        case 'GOOD_GUESS':
            const newState = [...state.letters];
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].letter === action.letter) {
                    newState[i].guessed = true;
                }
            }
            return Object.assign({}, state, { letters: newState });
            // return newState;
        default:
            return state;
    }
};

export default wordLettersReducer;
