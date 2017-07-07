/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const word = [
	{letter: 'H', guessed: false},
	{letter: 'O', guessed: false},
	{letter: 'R', guessed: false},
	{letter: 'I', guessed: false},
	{letter: 'Z', guessed: false},
	{letter: 'O', guessed: false},
	{letter: 'N', guessed: false},
	{letter: 'S', guessed: false}
];

const wordLettersReducer = (state = word, action) => {
	switch (action.type) {
		case 'GOOD_GUESS':
			var newState = state;
			newState.forEach(function(item, index) {
				if (item.letter === action.letter) {
					var newObj = {
						letter: item.letter,
						guessed: true
					}
					newState = [
						...newState.slice(0, index),
						newObj,
						...newState.slice(index+1)
					];
				}
			});
			console.log(newState);
			return newState;
		case 'NEW_WORD':
			let word = action.word;
			let newWord = [];
			for (let i = 0; i < word.length; i++) {
				newWord.push({
					letter: word[i],
					guessed: false
				});
			}
			console.log(newWord);
			return newWord;
		default:
			return state;
	}
};

export default wordLettersReducer;
