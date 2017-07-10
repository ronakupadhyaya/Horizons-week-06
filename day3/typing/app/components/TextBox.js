import React from 'react';
import PropTypes from 'prop-types';

//TextBox is gonna be our input box
const TextBox = () => {
    return (
      <div>
        <input type="text" name="TextBox" value="Here's the Input"></input>
        // so props.TextBox will be whatever the user put in
      </div>
  );
};

// TextBox.propTypes = {
//     : PropTypes.array
// };

export default TextBox;
