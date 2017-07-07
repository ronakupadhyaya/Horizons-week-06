import React from 'react';

const TextBox = () => {
    let input;

    return (
        <div className = "main">
            <input className = "wordbox" type="text"
                value={''}
                ref={node => {input = node;}}
                onChange={() => this.props.onInput(input)}
            />
        </div>
    );
};

export default TextBox;
