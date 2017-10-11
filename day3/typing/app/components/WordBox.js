import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({wordList}) => {
    const elements = [];
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];
        for(let j = 0; j < word.length; j++) {
            const letter = word[j];
            elements.push(letter);
        }
        elements.push({'letter': ' ', status: 'pending'});
    }

    return (
		<div>
			{elements.map((element) => {
    if(element.status === 'correct') {
        return <span className="correct"> {element.letter} </span>;
    }else if(element.status === 'incorrect') {
        return <span className="wrong"> {element.letter} </span>;
    }
    return <span>{element.letter}</span>;
})}
		</div>
	);
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
