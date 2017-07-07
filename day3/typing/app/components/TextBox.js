import React from 'react';

const TextBox = ({ onInput }) => {
	return (
		<input placeholder="Start typing to begin" onChange={onInput}></input>
	);
};

export default TextBox;