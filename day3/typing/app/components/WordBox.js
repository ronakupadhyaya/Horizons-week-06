import React from 'react';
import PropTypes from 'prop-types';


const WordBox = ({ wordList }) => {
    return (
		<div className="main">
			<div className="wordbox">
			{
				wordList.map(word => {
					const letters = word.split('');
					letters.map(letter => <span>{letter}</span>);
					return letters;
				})
			}
			</div>
		</div>
	);
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
