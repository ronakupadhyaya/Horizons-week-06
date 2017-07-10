import PropTypes from 'prop-types';
import React from 'react';

const TextBox = ({onInput}) => {
    return (
        <form>
            <div className="form-group">
                <input type="text" className="form-control" onChange={onInput()}/>
            </div>
        </form>
    );
};

TextBox.propTypes = {
    onInput: PropTypes.func
};

export default TextBox;
