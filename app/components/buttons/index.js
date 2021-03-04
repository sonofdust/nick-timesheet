import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import FaTrashAlt from 'react-icons/fa';

const deleteBtn = () => {
  return (
    <div className="btnBorder">
      <FaTrashAlt />
    </div>
  );
};

// const editBtn = () => {
//   return (
//     <div className="btnBorder">
//       <FaEdit />
//     </div>
//   );
// };

export default memo(deleteBtn);
// export default memo(editBtn);
