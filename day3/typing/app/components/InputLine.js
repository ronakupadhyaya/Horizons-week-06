import React from 'react';
import PropTypes from 'prop-types';

const InputLine = ({infunction}) => {
    let input;
    return(
      <input className="input" type="text"  ref={node => {input = node;}}
        onChange={()=>infunction(input.value)}
      />
    );
};

InputLine.propTypes = {
    infunction: PropTypes.func,
};

export default InputLine;
