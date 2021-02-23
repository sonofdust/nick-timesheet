import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CustomButton({ children, onClick, style }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};
export default memo(CustomButton);
