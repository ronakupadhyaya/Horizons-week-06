import React from 'react';
import PropTypes from 'prop-types';

function WordBox({words}) {
    return (
        <div>
            { words.join(' ') }
        </div>
    );
}

WordBox.propTypes = {
}
