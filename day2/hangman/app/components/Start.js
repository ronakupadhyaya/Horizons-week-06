import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

const Start = ({}) => {
	let input;

	render() {
		return (
			<div>
				<form onSubmit={}>
					<label>
						Word:
					</label>
					<input type="text" value={} />
					<input type="submit" value="Submit" />
				</form>
				<input type="text"
					value={''}
					ref={node => {input = node;}}
					onSubmit={() => letterInAnswer(input.value) ? onGoodGuess(input.value) : onBadGuess(input.value) }

				/>
			</div>
		);
	}
}
