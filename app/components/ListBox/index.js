import React, { memo } from 'react';
import PropTypes from 'prop-types';

function ListBox({ items, onClick }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item} onClick={() => onClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

ListBox.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
export default memo(ListBox);
