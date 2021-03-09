import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Select = props => {
  return (
    <div className="selectBorder">
      <select name={props.name} id={props.name}>
        {props.list.map(e => (
          <option value={e} selected={e == props.selected}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  items: PropTypes.array,
};
export default memo(Select);
