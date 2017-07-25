import React from 'react';
import PropTypes from 'prop-types';

const InitialsInput = ({changeFunc, currInput}) =>
    <div>
      <h2 style={{display: 'inline'}}>Enter initials: </h2><input onChange={(evt) => changeFunc(evt)} type="text" style={{width: '5%', display: 'inline'}} placeholder="XXX"></input>
    </div>;

InitialsInput.propTypes = {
    changeFunc: PropTypes.func,
    currInput: PropTypes.string
};

export default InitialsInput;
