import words from '../dictionary';
import _ from 'underscore';

const gameReducer = (state = _.shuffle(words).slice(0, 100), action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default gameReducer;
