import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ timer }) => (
    <div>
      Timer: {timer >= 0 ? timer : 0}
    </div>
);

InfoBar.propTypes = {
    timer: PropTypes.number,
};

export default InfoBar;
