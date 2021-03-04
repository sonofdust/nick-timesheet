import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  return (
    <div>
      <select name="cars" id="cars">
        {props.list.map(e=><option value={e}>{e}</option>)}
      </select>
    </div>
  );
};

Select.propTypes = {
   items: PropTypes.array,
};
export default memo(Select);
