import React, { memo } from 'react';
import PropTypes from 'prop-types';

function ListBox({ items, onClick }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => onClick(item)}>
          {item.id} - {item.title}
        </li>
      ))}
    </ul>
  );
}

ListBox.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};
export default memo(ListBox);
